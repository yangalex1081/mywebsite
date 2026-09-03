export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-32 max-w-3xl mx-auto text-center flex flex-col items-center gap-6"
    >
      <h2 className="text-4xl font-semibold">Get in Touch</h2>

      <p className="text-white/75 text-lg max-w-xl leading-relaxed">
        Whether you want to talk about AI pipelines, OCR work, engineering projects, 
        climbing, cooking, or potential collaborations, feel free to reach out. 
        Always happy to chat.
      </p>

      <div className="flex flex-col gap-3 w-full max-w-sm mt-4">
        {/* Personal email */}
        <a
          href="mailto:yangalex1081@gmail.com"
          className="
            py-2 px-4 
            text-cyan-300 underline underline-offset-4 
            hover:bg-white/80 hover:text-black
            transition rounded-lg
            hover:shadow-md hover:shadow-cyan-200
            hover:ring-2 hover:ring-white/70
          "
        >
          yangalex1081@gmail.com
        </a>

        {/* School email */}
        <a
          href="mailto:way9227@nyu.edu"
          className="
            py-2 px-4 
            text-cyan-300 underline underline-offset-4 
            hover:bg-white/80 hover:text-black
            transition rounded-lg
            hover:shadow-md hover:shadow-cyan-200
            hover:ring-2 hover:ring-white/70
          "
        >
          way9227@nyu.edu
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/waynealexanderyang/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            py-2 px-4 
            text-cyan-300 underline underline-offset-4 
            hover:bg-white/80 hover:text-black
            transition rounded-lg
            hover:shadow-md hover:shadow-cyan-200
            hover:ring-2 hover:ring-white/70
          "
        >
          linkedin.com/in/waynealexanderyang
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/yangalex1081"
          target="_blank"
          rel="noopener noreferrer"
          className="
            py-2 px-4 
            text-cyan-300 underline underline-offset-4 
            hover:bg-white/80 hover:text-black
            transition rounded-lg
            hover:shadow-md hover:shadow-cyan-200
            hover:ring-2 hover:ring-white/70
          "
        >
          github.com/yangalex1081
        </a>
      </div>

      <p className="text-white/70 text-sm mt-4">
        Based in New York City • Open to collaborations and new projects
      </p>
    </section>
  );
}
