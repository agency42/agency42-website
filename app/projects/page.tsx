import type { Metadata } from "next";
import ProjectList from "./ProjectList";

export const metadata: Metadata = {
  title: "Project Archives | Agency/42",
  description: "Selected projects and clients",
};

export default function ProjectsPage() {
  const projects = [
    {
      name: "miniverse",
      client: "agency/42",
      year: "10.25",
      details: "Python library for building generative agent simulations.",
      link: "https://github.com/miniverse-ai/miniverse",
    },
    {
      name: "daybloom",
      client: "agency/42",
      year: "08.25",
      details: "Platform for building AI characters that autonomously manage social media.",
      link: "https://daybloom.ai",
    },
    {
      name: "ai training and enablement",
      client: "herman-scheer",
      year: "07.25",
      details: "Custom AI training programs and organizational enablement workshops.",
    },
    {
      name: "ai assisted code workshop",
      client: "florida state university",
      year: "07.25",
      details: "Hands-on workshop teaching AI-assisted development workflows.",
    },
    {
      name: "[REDACTED]'s digital twin",
      client: "warner records (innovation studio)",
      year: "06.25",
      details: "Experimental fan chatroom experience.",
    },
    {
      name: "teamputer",
      client: "agency/42",
      year: "06.25",
      details: "Claude Code running autonomously in the cloud.",
    },
    {
      name: "ai email agent",
      client: "cogent world",
      year: "06.25",
      details: "Intelligent email processing and response system.",
    },
    {
      name: "linkedin mcp",
      client: "agency/42",
      year: "05.25",
      details: "Model Context Protocol for LinkedIn posting and engagement.",
      link: "https://github.com/robertcedwards/linkedin-mcp-server",
    },
    {
      name: "[REDACTED]'s digital twin",
      client: "roomservice ltd",
      year: "04.25",
      details: "Digital twin with voice cloning and conversational AI capabilities.",
    },
    {
      name: "sports terminal",
      client: "okung ventures",
      year: "03.25",
      details: "Real-time sports data agent with automated analysis and feed generation.",
    },
    {
      name: "prerich ceo",
      client: "prerich app",
      year: "03.25",
      details: "Autonomous marketing agent on Twitter.",
    },
    {
      name: "dashworld",
      client: "game over media",
      year: "02.25",
      details: "AI musician and agent running live in a Discord community.",
      link: "https://dashworld.gg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-1 px-4 sm:px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <section className="pt-8 sm:pt-12 pb-4">
            <h1 className="text-3xl sm:text-4xl font-medium leading-tight mb-8">
              project archives
            </h1>
          </section>

          <ProjectList projects={projects} />
        </div>
      </main>
    </div>
  );
}
