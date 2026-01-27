"use client";

import { useEffect, useState } from "react";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const menuItems = [
    { id: "aboutMe", label: "About me", color: "text-pink-500" },
    { id: "skills", label: "Skills", color: "text-green-500" },
    { id: "works", label: "Works", color: "text-orange-500" },
    { id: "contact", label: "Contact", color: "text-blue-500" },
  ];

  // 스크롤 이벤트 - 헤더 스타일 변경
  const handleScroll = () => {
    setIsScroll(window.scrollY > 50);
  };

  // 메뉴 클릭시 스크롤 이동 - url 변경 안함
  const handleScrollSection = (e: any, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // 새로고침 시 반영

    // IntersectionObserver - 섹션 별 메뉴 스타일 변경
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            // 현재 화면에 들어온 섹션의 id 저장
            setActiveId(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // 화면에 절반 이상 보이면 active
      },
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 flex items-center justify-between px-4 md:px-5 lg:px-8 xl:px-15 border-b font-pcp font-bold z-10 transition-all duration-200 " +
        (isScroll
          ? "h-12 md:h-16 lg:h-18 xl:h-20 border-white/30 shadow bg-white/30 backdrop-blur-sm"
          : "h-12 md:h-16 lg:h-18 xl:h-25 border-transparent shadow-transparent bg-white/0")
      }
    >
      <h1 className="text-sm md:text-lg lg:text-xl xl:text-2xl tracking-wide">
        <a href="#home" onClick={(e) => handleScrollSection(e, "home")}>
          JIWON's Portfolio
        </a>
      </h1>
      <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-12 xl:gap-x-15 text-base lg:text-lg xl:text-xl">
        {menuItems.map(({ id, label, color }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleScrollSection(e, id)}
            className={`px-2 hover:opacity-100 transition ${activeId === id ? `${color} opacity-100` : `hover:${color} opacity-80`}`}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
