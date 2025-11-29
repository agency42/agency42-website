import type { Metadata } from "next";
import ProjectList from "./ProjectList";
import HeroVideo from "./HeroVideo";

export const metadata: Metadata = {
  title: "Project Archives",
  description: "Selected projects and client work from Agency/42. Including Daybloom, Miniverse, LinkedIn MCP, and more.",
  openGraph: {
    title: "Project Archives | Agency/42",
    description: "Selected projects and client work from Agency/42. Including Daybloom, Miniverse, LinkedIn MCP, and more.",
    images: [
      {
        url: "/images/content/cybernet.jpeg",
        width: 1200,
        height: 630,
        alt: "Agency/42 Project Archives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: "Project Archives | Agency/42",
    description: "Selected projects and client work from Agency/42. Including Daybloom, Miniverse, LinkedIn MCP, and more.",
    images: ["/images/content/cybernet.jpeg"],
  },
};

export default function ProjectsPage() {
  const projects = [
    {
      name: "Miniverse",
      client: "agency/42",
      year: "10.25",
      details: "Python library for building generative agent simulations.",
      link: "https://github.com/miniverse-ai/miniverse",
    },
    {
      name: "Daybloom",
      client: "agency/42",
      year: "08.25",
      details: "Platform for building AI characters that autonomously manage social media.",
      link: "https://daybloom.ai",
    },
    {
      name: "AI Training and Enablement",
      client: "herman-scheer",
      year: "07.25",
      details: "Custom AI training programs and organizational enablement workshops.",
    },
    {
      name: "AI Assisted Code Workshop",
      client: "florida state university",
      year: "07.25",
      details: "Hands-on workshop teaching AI-assisted development workflows.",
    },
    {
      name: "[REDACTED]'s Digital Twin",
      client: "warner records (innovation studio)",
      year: "06.25",
      details: "Experimental fan chatroom experience.",
    },
    {
      name: "Teamputer",
      client: "agency/42",
      year: "06.25",
      details: "Claude Code running autonomously in the cloud.",
    },
    {
      name: "AI Email Agent",
      client: "cogent world",
      year: "06.25",
      details: "Intelligent email processing and response system.",
    },
    {
      name: "LinkedIn MCP",
      client: "agency/42",
      year: "05.25",
      details: "Model Context Protocol for LinkedIn posting and engagement.",
      link: "https://github.com/robertcedwards/linkedin-mcp-server",
    },
    {
      name: "[REDACTED]'s Digital Twin",
      client: "roomservice ltd",
      year: "04.25",
      details: "Digital twin with voice cloning and conversational AI capabilities.",
    },
    {
      name: "Sports Terminal",
      client: "okung ventures",
      year: "03.25",
      details: "Real-time sports data agent with automated analysis and feed generation.",
    },
    {
      name: "PreRich CEO",
      client: "prerich app",
      year: "03.25",
      details: "Autonomous marketing agent on Twitter.",
    },
    {
      name: "Dashworld",
      client: "game over media",
      year: "02.25",
      details: "AI musician and agent running live in a Discord community.",
      link: "https://dashworld.gg",
    },
  ];

  const hero = {
    name: "Daybloom",
    client: "agency/42",
    year: "08.25",
    details: "Platform for building AI characters that autonomously manage social media.",
    link: "https://daybloom.ai",
    image: "/images/content/default-projects-gif-raw.mp4",
  };

  // Filter out hero project from the list
  const otherProjects = projects.filter((p) => p.name !== "Daybloom");

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-1 px-4 sm:px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="pt-8 sm:pt-12 pb-4">
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-medium leading-tight mb-8">
              project archives
            </h1>
          </div>

          <HeroVideo
            src={hero.image}
            alt={hero.name}
            link={hero.link}
            name={hero.name}
            client={hero.client}
            year={hero.year}
            details={hero.details}
          />

          <div className="mt-16">
            <ProjectList projects={otherProjects} />
          </div>
        </div>
      </main>
    </div>
  );
}
