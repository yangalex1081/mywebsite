import headshot from "../assets/IMG_6785.JPG";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-24 mx-auto max-w-4xl"
    >
      <div className="flex flex-col items-center text-center gap-8">

        {/* Photo */}
        <img
          src={headshot}
          alt="Alex Yang"
          className="w-32 h-32 rounded-full object-cover shadow-lg shadow-black/40 border border-white/20"
        />

        {/* Text */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>

          <p className="text-white/80 text-lg leading-relaxed">
            I just like making useful stuff, check out some of my projects below. I am currently a Junior at NYU studying computer science with a specific interest in cybersecurity. I'm super passionate about rock climbing (bouldering and sport both) and cooking, so if you're interested in any of the above hit me up!

          </p>
        </div>
      </div>
    </section>
  );
}
