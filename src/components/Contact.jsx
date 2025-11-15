export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>

      <p className="text-white/80 text-lg leading-relaxed mb-8">
        Whether you want to talk about AI pipelines, OCR work, engineering projects, 
        climbing, cooking, or potential collaborations, feel free to reach out. 
        Always happy to chat.
      </p>

      <div className="flex flex-col gap-3 text-lg">
        <a
          href="mailto:way9227@nyu.edu"
          className="text-cyan-300 hover:text-white transition underline underline-offset-4"
        >
          way9227@nyu.edu
        </a>

        <a
          href="https://www.linkedin.com/in/waynealexanderyang/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 hover:text-white transition underline underline-offset-4"
        >
          linkedin.com/in/waynealexanderyang
        </a>

        <p className="text-white/60">(917) 232-5688</p>
      </div>
    </section>
  );
}
