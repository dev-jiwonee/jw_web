const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70 z-10 flex items-center justify-between h-25 px-12 ">
      <h1 className="text-2xl font-bold">
        <a href="#home">JIWON's Portfolio</a>
      </h1>
      <nav className="flex items-center gap-x-10 text-xl">
        <a href="#about" className="inline-block px-2 hover:bg-amber-50">
          ABOUT
        </a>
        <a href="#portfolio" className="inline-block px-2 hover:bg-amber-50">
          PORTFOLIO
        </a>
        <a href="#exp" className="inline-block px-2 hover:bg-amber-50">
          EXPERIENCE
        </a>
        <a href="#contact" className="inline-block px-2 hover:bg-amber-50">
          CONTACT
        </a>
      </nav>
    </header>
  );
};

export default Header;
