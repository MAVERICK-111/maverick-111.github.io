import { skills } from "../data/content";
import useReveal from "../hooks/useReveal";

const categories = Object.keys(skills);

export default function Skills() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="skills" className="py-28 md:py-36 bg-stone-100 dark:bg-stone-900 transition-colors duration-400" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="reveal-left text-xs font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] mb-14">
          Skills &amp; Tools
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {categories.map((category, ci) => (
            <div
              key={category}
              className="reveal-scale"
              style={{ transitionDelay: `${ci * 120}ms` }}
            >
              <h3 className="text-xs font-semibold text-stone-700 dark:text-stone-200 uppercase tracking-wider mb-5 pb-3 border-b border-stone-200 dark:border-stone-700">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {skills[category].map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-stone-500 dark:text-stone-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}