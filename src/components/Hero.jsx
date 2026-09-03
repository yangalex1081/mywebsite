export default function Hero() {
  return (
    <section
        id="home"
        className="px-6 pt-24 pb-10 mx-auto max-w-4xl"
    >
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Hi, I'm Alex 👋
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
            Undergrad CS student at NYU Tandon, trying to build stuff that people use.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="#projects"
              className="
                py-2 px-4 rounded-lg
                border border-white/25 text-cyan-300
                hover:bg-white/80 hover:text-black hover:border-transparent
                transition
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300
              "
            >
              See my projects
            </a>
            <a
              href="https://github.com/yangalex1081"
              target="_blank"
              rel="noopener noreferrer"
              className="
                py-2 px-4 rounded-lg
                border border-white/25 text-cyan-300
                hover:bg-white/80 hover:text-black hover:border-transparent
                transition
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300
              "
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="
                py-2 px-4 rounded-lg
                border border-white/25 text-cyan-300
                hover:bg-white/80 hover:text-black hover:border-transparent
                transition
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300
              "
            >
              Get in touch
            </a>
        </div>
    </section>
  );
}
