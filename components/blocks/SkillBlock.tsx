"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface SkillItem {
  icon?: string;
  name: string;
  desc?: string;
}
interface SkillBlockProps {
  title?: string;
  items: SkillItem[];
}
const SkillBlock = ({ title, items }: SkillBlockProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // 한 번만 실행
        }
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row gap-4 sm:gap-5 transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div className="flex-1/4 font-semibold text-lg sm:text-xl">{title}</div>
      <div className="flex-3/4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-x-7 lg:gap-y-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-x-1.5 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: `${idx * 50}ms` }}
          >
            <div className="shrink-0 w-5 h-5 xl:w-6 xl:h-6">
              {item.icon && (
                <Image
                  src={`/icons/${item.icon}`}
                  width={24}
                  height={24}
                  alt={item.name}
                />
              )}
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-base xl:text-lg leading-5 xl:leading-6">
                {item.name}
              </p>
              {item.desc && (
                <p className="text-xs text-zinc-500 leading-4">{item.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBlock;
