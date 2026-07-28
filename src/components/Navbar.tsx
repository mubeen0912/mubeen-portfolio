const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
{ name: 'Achievements', href: '#achievements' },

  { name: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
        >
          Mohamed Mubeen<span className="text-blue-500"> H</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-lg border border-blue-500/40 px-4 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-500/10"
        >
          Let's Connect
        </a>

      </nav>
    </header>
  )
}

export default Navbar