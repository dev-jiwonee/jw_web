const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between h-25 px-15 border-b border-white/30 shadow bg-white/50 backdrop-blur-sm font-pcp font-bold z-10">
      <h1 className="text-2xl tracking-wide">
        <a href="#home">JIWON's Portfolio</a>
      </h1>
      <nav className="flex items-center gap-x-15 text-xl">
        <a href="#aboutMe" className="px-2 opacity-80 hover:opacity-100 hover:text-pink-500 transition">
          About Me
        </a>
        <a href="#skills" className="px-2 opacity-80 hover:opacity-100 hover:text-green-500 transition">
          Skills
        </a>
        <a href="#works" className="px-2 opacity-80 hover:opacity-100 hover:text-orange-500 transition">
          Works
        </a>
        <a href="#contact" className="px-2 opacity-80 hover:opacity-100 hover:text-blue-500 transition">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
