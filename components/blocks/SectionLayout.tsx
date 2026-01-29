import { ReactNode } from "react";

interface SectionLayoutProps {
  id?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
  bgColor?: string;
  center?: boolean;
}

const SectionLayout = ({
  id,
  title,
  children,                                                
  className = "",
  bgColor = "bg-white",
  center = false,
}: SectionLayoutProps) => {
  return (
    <section
      id={id}
      className={`${bgColor} relative flex flex-col h-full min-h-dvh px-4 sm:px-8 lg:px-11 xl:px-15 py-12 sm:py-16 lg:py-18 xl:py-20 ${className}`}
    >
      <div
        className={`flex-1 flex flex-col w-full max-w-360 mx-auto ${center ? "justify-center items-center" : ""}`}
      >
        {title && (
          <div className="pt-4 sm:pt-6 lg:pt-9">
            <h2 className="mb-6 sm:mb-7 lg:mb-8 xl:mb-10 font-bold text-xl sm:text-3xl xl:text-5xl">
              {title}
            </h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
