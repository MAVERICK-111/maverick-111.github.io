import { about } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="about" className="py-28 md:py-36 bg-stone-100 dark:bg-stone-900 transition-colors duration-400" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="reveal-left text-xs font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] mb-14">
          About
        </p>
        <div className="grid md:grid-cols-3 gap-16">
          {/* Main text */}
          <div className="md:col-span-2">
            {about.paragraphs.map((text, i) => (
              <p
                key={i}
                className="reveal text-lg text-stone-600 dark:text-stone-400 leading-relaxed mb-6 last:mb-0"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Sidebar details */}
          <div className="space-y-8">
            {about.details.map(({ label, value }, i) => (
              <div
                key={label}
                className="reveal-right"
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                <p className="text-xs font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-1">
                  {label}
                </p>
                <p className="text-base text-stone-800 dark:text-stone-200 font-medium">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}