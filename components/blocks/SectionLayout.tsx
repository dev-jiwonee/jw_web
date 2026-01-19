import { ReactNode } from "react";

interface SectionLayoutProps {
  id?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
  bgColor?: string;
}

const SectionLayout = ({
  id,
  title,
  children,
  className = "",
  bgColor = "bg-white",
}: SectionLayoutProps) => {
  return (
    <section id={id} className={`${bgColor} min-h-dvh pt-25 ${className}`}>
      <div className="w-full max-w-[1400] mx-auto pt-15">
        <h2 className="mb-10 font-bold text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
