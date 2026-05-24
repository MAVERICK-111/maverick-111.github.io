import { useState } from "react";
import { personal } from "../data/content";
import portraitSrc from "../data/PSP_PORTFOLIO.png";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 bg-stone-50 dark:bg-stone-950 overflow-hidden transition-colors duration-400"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-center gap-10 md:gap-16 lg:gap-20">
          {/* Text column */}
          <div className="flex-1 text-center md:text-left">
            <p className="hero-role text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] mb-8">
              {personal.role}
            </p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-stone-800 dark:text-stone-100 tracking-tight leading-[0.95] mb-10">
              {personal.name.split(" ").map((word, i) => (
                <span key={i} className="hero-name-line block">
                  {word}
                </span>
              ))}
            </h1>
            <p className="hero-tagline text-lg md:text-xl text-stone-500 dark:text-stone-400 max-w-xl leading-relaxed mb-12 mx-auto md:mx-0">
              {personal.tagline}
            </p>
            <div className="hero-cta flex items-center justify-center md:justify-start gap-6">
              <div className="relative">
                <a
                  href={`mailto:${personal.email}`}
                  onClick={handleEmailClick}
                  className="text-sm font-medium text-stone-800 dark:text-stone-100 border-b border-stone-800 dark:border-stone-300 pb-0.5 hover:text-amber-700 dark:hover:text-amber-400 hover:border-amber-700 dark:hover:border-amber-400 transition-colors duration-200"
                >
                  Contact me ↗
                </a>
                {copied && (
                  <span
                    className="animate-fade-in absolute -top-10 left-1/2 whitespace-nowrap rounded-md border border-stone-200 bg-white/90 px-3 py-1.5 text-[11px] font-medium text-stone-700 shadow-lg backdrop-blur-sm dark:border-stone-700 dark:bg-stone-800/90 dark:text-amber-400"
                    style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.12)" }}
                  >
                    Copied
                    <span
                      className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent"
                      style={{ borderTopColor: "currentColor", opacity: 0.25 }}
                    />
                  </span>
                )}
              </div>
              {personal.resumeUrl && personal.resumeUrl !== "#" && (
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-100 transition-colors duration-200"
                >
                  Resume ↗
                </a>
              )}
            </div>
          </div>
          {/* Portrait column */}
          <div className="hero-portrait flex-shrink-0">
            <div className="portrait-wrapper w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden">
              <img
                src={portraitSrc}
                alt={personal.name}
                className="hero-portrait-img w-full h-full object-cover rounded-2xl transition-all duration-500 hover:scale-105 hover:grayscale-0 grayscale-[0.15]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}