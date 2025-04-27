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
    const repos = await fetch(
      "https://api.github.com/orgs/agency42/repos?per_page=100&type=public",
      { headers: HEADERS }
    ).then(r => r.json());

    let totalBytes = 0;

    await Promise.all(
      repos.map(async (r: any) => {
        try {
          const bytes = await fetch(r.languages_url, { headers: HEADERS })
            .then(res => res.json())
            .then(obj => Object.values(obj).reduce((s: number, b: any) => s + b, 0));
          totalBytes += bytes;
        } catch (err) {
          console.error(`Error fetching languages for ${r.name}:`, err);
        }
      })
    );

    const lines = Math.round(totalBytes / 60); // Approximate conversion from bytes to lines
    cache.set("loc", lines);
    return lines;
  } catch (err) {
    console.error("Error fetching GitHub data:", err);
    return 0;
  }
} 