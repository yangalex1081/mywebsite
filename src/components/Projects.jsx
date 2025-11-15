import ProjBox from "./ProjBox";

export default function Projects() {
  const projects = [
    {
        ProjName: "Alex's Receipt Parser",
        Liner: "Automated OCR system for receipt transcription and expense splitting.",
        About: "Built a serverless OCR pipeline using Modal GPUs and the DONUT transformer model to accurately parse receipts. Designed a concurrent job-queue system and integrated FastAPI with a React frontend for fast, effortless expense splitting.",
        TechStack: "Modal • Python • FastAPI • React • DONUT • Transformers",
        CTA1: "View Repo",
        CTA1_link: "https://github.com/yangalex1081/receipt_parser?tab=readme-ov-file",
        CTA2: "View Live Demo",
        CTA2_link: "https://alexs-receipt-parser.netlify.app/",
    },
    {
        ProjName: "Suspension Telemetry System",
        Liner: "Raspberry Pi and Arduino based data acquisition system.",
        TechStack: "SQL • RPi 4 • Arduino • Python",
        About: "Built a full data acquisition system to capture suspension performance using a Raspberry Pi 4 and Arduino. Created and maintained an SQL database for over 1,000 telemetry data points per test drive. Implemented hardware-software integration for real-time performance monitoring and analytics.",
        CTA1: "",
        CTA1_link: "",
        CTA2: "",
        CTA2_link: ""
    },
    {
        ProjName: "Due Diligence Q&A Platform",
        Liner: "Automated Q&A system using GOT 2.0 and ChromaDB.",
        TechStack: "GOT 2.0 • ChromaDB • Python • LLMs",
        About: "Developed a fully automated due diligence Q&A application using the GOT 2.0 model for question parsing and a ChromaDB vector database for semantic retrieval. The system streamlines internal knowledge access through accurate, context-aware query answering.",
        CTA1: "",
        CTA1_link: "",
        CTA2: "",
        CTA2_link: ""
    },
    {
        ProjName: "Outbound Recruiting Automation",
        Liner: "Automated sourcing with GitHub data and LLM-powered messaging.",
        TechStack: "GitHub API • LLMs • Python",
        About: "Created an automated tool leveraging public GitHub data for software talent sourcing. Integrated LLM-generated personalized outreach messages, achieving a 30% cold outreach response rate.",
        CTA1: "",
        CTA1_link: "",
        CTA2: "",
        CTA2_link: ""
    },
    {
        ProjName: "Nonprofit Data Visualization Platform",
        Liner: "Custom data science app for donor analytics.",
        TechStack: "Python • Data Viz • SQL",
        About: "Led a team of 5 to build a data visualization application for nonprofits, enabling clear, client-ready insights. Oversaw outreach to 100+ nonprofits, collected requirements, and delivered actionable analytical tools.",
        CTA1: "",
        CTA1_link: "",
        CTA2: "",
        CTA2_link: ""
    },

    // add more...
  ];

  return (
    <section className="px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-8">Projects</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(p => (
            <ProjBox key={p.ProjName} project={p} />
            ))}
        </div>
    </section>
  );
}
