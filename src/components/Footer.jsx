export default function Footer() {
  return (
    <footer className="px-6 py-10 mx-auto max-w-6xl border-t border-white/10 text-sm text-white/60 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Alex Yang</p>
      <p>
        Built with React, Vite and Tailwind ·{" "}
        <a
          href="https://github.com/yangalex1081/mywebsite"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200 transition rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          source
        </a>
      </p>
    </footer>
  );
}
