export default function ProjBox({ project }) {
  return (
    <div
      aria-label={`Project: ${project.ProjName || "Project"}`}
      className="
        w-full flex flex-col justify-between 
        bg-white/5 backdrop-blur-md 
        group relative overflow-hidden 
        hover:scale-[1.02] transition-transform duration-500 
        rounded-xl p-6 
        border border-white/20 hover:border-white/50
        hover:shadow-xl hover:shadow-cyan-400/20
        cursor-pointer
      "
    >
      {/* Text */}
      <article className="flex flex-col grow text-white gap-3">

        {/* Project Title */}
        {project.ProjName && (
          <h2 className="text-2xl font-semibold">{project.ProjName}</h2>
        )}

        {/* One-line summary */}
        {project.Liner && (
          <p className="text-white/80">{project.Liner}</p>
        )}

        {/* Tech stack */}
        {project.TechStack && (
          <p className="text-xs text-white/50">{project.TechStack}</p>
        )}

        {/* About / longer description */}
        {project.About && (
          <p className="text-sm text-white/70 leading-relaxed mt-1">
            {project.About}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col gap-2 mt-3">
          {/* First Link */}
          {project.CTA1 && project.CTA1_link && (
            <a
              href={project.CTA1_link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex justify-center items-center 
                w-full py-2 px-3 text-cyan-300 underline underline-offset-4 
                hover:bg-white/80 hover:text-black
                transition rounded-lg
                hover:shadow-md hover:shadow-cyan-200
                hover:ring-2 hover:ring-white/70
              "
            >
              {project.CTA1}
            </a>
          )}

          {/* Second Link */}
          {project.CTA2 && project.CTA2_link && (
            <a
              href={project.CTA2_link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex justify-center items-center 
                w-full py-2 px-3 text-cyan-300 underline underline-offset-4 
                hover:bg-white/80 hover:text-black
                transition rounded-lg
                hover:shadow-md hover:shadow-cyan-200
                hover:ring-2 hover:ring-white/70
              "
            >
              {project.CTA2}
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
