export default function ProjBox({ project }) {
  return (
    <div
      aria-label={`Project: ${project.ProjName || "Project"}`}
      className="
        w-full flex flex-col justify-between 
        bg-white/5 backdrop-blur-md 
        group relative overflow-hidden 
        hover:scale-[1.02] transition-transform duration-500 
        motion-reduce:transition-none motion-reduce:hover:scale-100
        rounded-xl p-6 
        border border-white/20 hover:border-white/50
        hover:shadow-xl hover:shadow-cyan-400/20
      "
    >
      {/* Text */}
      <article className="flex flex-col grow text-white gap-3">

        {/* Status + year */}
        {(project.Status || project.Year) && (
          <div className="flex items-center gap-2 flex-wrap">
            {project.Status && (
              <span className="text-[11px] uppercase tracking-wide px-2 py-0.5 rounded-full border border-cyan-300/40 text-cyan-200 bg-cyan-300/10">
                {project.Status}
              </span>
            )}
            {project.Year && (
              <span className="text-[11px] text-white/60">{project.Year}</span>
            )}
          </div>
        )}

        {/* Project Title */}
        {project.ProjName && (
          <h3 className="text-2xl font-semibold">{project.ProjName}</h3>
        )}

        {/* One-line summary */}
        {project.Liner && (
          <p className="text-white/80">{project.Liner}</p>
        )}

        {/* Tech stack */}
        {project.TechStack && (
          <p className="text-xs text-white/70">{project.TechStack}</p>
        )}

        {/* About / longer description */}
        {project.About && (
          <p className="text-sm text-white/70 leading-relaxed mt-1">
            {project.About}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col gap-2 mt-3">
          {[
            [project.CTA1, project.CTA1_link],
            [project.CTA2, project.CTA2_link],
          ].map(([label, href]) =>
            label && href ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex justify-center items-center 
                  w-full py-2 px-3 text-cyan-300 underline underline-offset-4 
                  hover:bg-white/80 hover:text-black
                  transition rounded-lg
                  hover:shadow-md hover:shadow-cyan-200
                  hover:ring-2 hover:ring-white/70
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300
                "
              >
                {label}
              </a>
            ) : null
          )}
        </div>
      </article>
    </div>
  );
}
