"use client";
import { useEffect, useState } from "react";

const TopButton = () => {
  const [isScroll, setIsScroll] = useState(false);

  const handleFollow = () => {
    setIsScroll(window.pageYOffset > 100);
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleFollow);
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  }, []);

  return (
    <button
      onClick={handleScrollTop}
      className={
        "absolute right-11 bottom-11 flex items-center justify-center w-10 h-10 rounded-full bg-white/50 shadow " +
        (isScroll
          ? "opacity-100 cursor-pointer"
          : "opacity-0 pointer-events-none")
      }
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 15.75L12 8.25L19.5 15.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default TopButton;
