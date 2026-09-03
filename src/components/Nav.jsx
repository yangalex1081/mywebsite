const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0e0e10]/70 border-b border-white/10">
      <nav
        aria-label="Main"
        className="px-6 py-4 mx-auto max-w-6xl flex items-center justify-between gap-6"
      >
        <a
          href="#home"
          className="font-semibold tracking-tight hover:text-cyan-300 transition rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          Alex Yang
        </a>

        <ul className="flex items-center gap-5 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/75 hover:text-cyan-300 transition rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
