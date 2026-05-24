import { personal } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-stone-900 dark:bg-stone-950 border-t border-stone-800 dark:border-stone-800 py-8 transition-colors duration-400">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-stone-600 dark:text-stone-500">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <a
          href="/"
          className="text-xs text-stone-600 dark:text-stone-500 hover:text-stone-400 dark:hover:text-stone-300 transition-colors duration-200"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
