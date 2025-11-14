import type { Metadata } from "next";
import ProjectList from "./ProjectList";

export const metadata: Metadata = {
  title: "Our Work | Agency/42",
  description: "Selected projects and clients",
};

export default function OurWorkPage() {
  const projects = [
    {
      name: "miniverse",
      client: "agency/42",
      year: "2025",
      details: "Python library for building generative agent simulations.",
      link: "https://github.com/miniverse-ai/miniverse",
    },
    {
      name: "daybloom",
      client: "agency/42",
      year: "2025",
      details: "Platform for building AI characters that autonomously manage social media.",
      link: "https://daybloom.ai",
    },
    {
      name: "ai training and enablement",
      client: "herman-scheer",
      year: "2025",
      details: "Custom AI training programs and organizational enablement workshops.",
    },
    {
      name: "ai assisted code workshop",
      client: "florida state university",
      year: "2025",
      details: "Hands-on workshop teaching AI-assisted development workflows.",
    },
    {
      name: "[redacted]'s digital twin",
      client: "warner records (innovation studio)",
      year: "2025",
      details: "Experimental fan chatroom experience.",
    },
    {
      name: "teamputer",
      client: "agency/42",
      year: "2025",
      details: "Claude Code running autonomously in the cloud.",
    },
    {
      name: "ai email agent",
      client: "cogent world",
      year: "2025",
      details: "Intelligent email processing and response system.",
    },
    {
      name: "linkedin mcp",
      client: "agency/42",
      year: "2025",
      details: "Model Context Protocol for LinkedIn posting and engagement.",
      link: "https://github.com/robertcedwards/linkedin-mcp-server",
    },
    {
      name: "[redacted]'s digital twin",
      client: "roomservice ltd",
      year: "2025",
      details: "Digital twin with voice cloning and conversational AI capabilities.",
    },
    {
      name: "sports terminal",
      client: "okung ventures",
      year: "2025",
      details: "Real-time sports data agent with automated analysis and feed generation.",
    },
    {
      name: "prerich ceo",
      client: "prerich app",
      year: "2025",
      details: "Autonomous marketing agent on Twitter.",
    },
    {
      name: "dashworld",
      client: "game over media",
      year: "2025",
      details: "AI musician and agent running live in a Discord community.",
      link: "https://dashworld.gg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
        backgroundSize: '32px 32px'
      }} />

      <main className="flex-1 px-4 sm:px-6 pb-16 relative z-10">
        <div className="max-w-2xl mx-auto space-y-16">
          <section className="pt-16 sm:pt-20 pb-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium leading-tight mb-12">
              our work
            </h1>
          </section>

          <ProjectList projects={projects} />
        </div>
      </main>
    </div>
  );
}
