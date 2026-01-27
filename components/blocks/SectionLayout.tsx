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
    <section id={id} className={`${bgColor} min-h-dvh py-12 md:py-16 lg:py-18 xl:py-20 px-4 md:px-5 lg:px-8 xl:px-15 ${className}`}>
      <div className="w-full max-w-[1400] mx-auto py-5 lg:py-8 xl:py-10 ">
        <h2 className="mb-10 font-bold text-xl lg:text-[28px] xl:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
