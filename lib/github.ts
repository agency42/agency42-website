import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 60 * 60 * 6 }); // 6 hours cache
const HEADERS = {
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  "User-Agent": "agency42-site",
  Accept: "application/vnd.github+json",
};

export async function totalLinesOfCode(): Promise<number> {
  const cached = cache.get<number>("loc");
  if (cached) return cached;

  try {
    const res = await fetch(
      "https://api.github.com/orgs/agency42/repos?per_page=100&type=public",
      { headers: HEADERS }
    );

    if (!res.ok) {
      console.error(`GitHub API error fetching repos: ${res.status} ${res.statusText}`);
      // Optionally try to parse error message from GitHub
      try {
        const errorBody = await res.json();
        console.error("GitHub API error body:", errorBody.message || JSON.stringify(errorBody));
      } catch (parseError) { /* Ignore if error body isn't JSON */ }
      return 0; // Return 0 on fetch error
    }

    const repos = await res.json();

    // Check if the response is an array before mapping
    if (!Array.isArray(repos)) {
      console.error("GitHub API did not return an array for repos. Response:", repos);
      return 0; // Return 0 if response is not an array
    }

    let totalBytes = 0;

    await Promise.all(
      repos.map(async (r: any) => {
        // Check if languages_url exists
        if (!r || !r.languages_url) {
            console.warn(`Skipping repo due to missing languages_url: ${r?.name || 'unknown'}`);
            return; 
        }
        try {
          const langRes = await fetch(r.languages_url, { headers: HEADERS });
          if (!langRes.ok) {
            console.error(`Error fetching languages for ${r.name}: ${langRes.status} ${langRes.statusText}`);
            return; // Skip this repo if language fetch fails
          }
          const bytesObj = await langRes.json();
          // Ensure bytesObj is an object before reducing
          if (typeof bytesObj === 'object' && bytesObj !== null) {
             const bytes = Object.values(bytesObj).reduce((s: number, b: any) => s + (typeof b === 'number' ? b : 0), 0);
             totalBytes += bytes;
          } else {
             console.warn(`Received non-object language data for ${r.name}:`, bytesObj);
          }
        } catch (err) {
          console.error(`Error processing languages for ${r.name}:`, err);
        }
      })
    );

    const lines = Math.round(totalBytes / 60); // Approximate conversion from bytes to lines
    cache.set("loc", lines);
    return lines;
  } catch (err) {
    console.error("General error fetching GitHub data:", err);
    return 0;
  }
} 