import { useState } from "react";
import { personal, socialLinks } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal<HTMLElement>();
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        <div className="relative inline-block mb-16 reveal" style={{ transitionDelay: "150ms" }}>
          <a
            href={`mailto:${personal.email}`}
            onClick={handleEmailClick}
            className="inline-block text-lg text-stone-400 hover:text-amber-400 border-b border-stone-600 hover:border-amber-400 pb-0.5 transition-colors duration-200"
          >
            {personal.email}
          </a>
          {copied && (
            <span className="animate-fade-in absolute -top-10 left-1/2 whitespace-nowrap rounded-md border border-stone-700 bg-stone-800/90 px-3 py-1.5 text-[11px] font-medium text-amber-400 shadow-lg backdrop-blur-sm"
              style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.45)" }}
            >
              Copied
              <span
                className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent"
                style={{ borderTopColor: "#44403c" }}
              />
            </span>
          )}
        </div>
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