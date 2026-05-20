import { personal, socialLinks } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      id="contact"
      className="py-28 md:py-36 bg-stone-900 dark:bg-stone-950 transition-colors duration-400"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="reveal-fade text-xs font-semibold text-stone-500 uppercase tracking-[0.2em] mb-14">
          Contact
        </p>
        <h2 className="reveal text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
          Let's work together.
        </h2>
        <a
          href={`mailto:${personal.email}`}
          className="reveal inline-block text-lg text-stone-400 hover:text-amber-400 border-b border-stone-600 hover:border-amber-400 pb-0.5 transition-colors duration-200 mb-16"
          style={{ transitionDelay: "150ms" }}
        >
          {personal.email}
        </a>
        <div
          className="reveal-left flex flex-wrap gap-x-8 gap-y-3"
          style={{ transitionDelay: "250ms" }}
        >
          {socialLinks.map(({ name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-500 hover:text-white transition-colors duration-200"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}