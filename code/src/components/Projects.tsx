import { projects } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function Projects() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="projects" className="py-28 md:py-36 bg-stone-50 dark:bg-stone-950 transition-colors duration-400" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="reveal-left text-xs font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] mb-14">
          Selected Work
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${i % 2 === 0 ? "reveal-left" : "reveal-right"} group block p-8 rounded-lg border border-stone-200 dark:border-stone-800 hover:border-amber-400/60 dark:hover:border-amber-500/40 hover:shadow-lg dark:hover:shadow-amber-900/10 transition-all duration-300`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <span className="text-stone-300 dark:text-stone-600 group-hover:text-amber-600 dark:group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ml-4 mt-0.5 shrink-0">
                  ↗
                </span>
              </div>

              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-stone-400 dark:text-stone-500 bg-stone-100 dark:bg-stone-800 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}