import { SNS_LINK } from "@/constants/snsLink";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between h-11 lg:h-14 px-4 sm:px-8 lg:px-11 xl:px-15 bg-white font-light text-xxs lg:text-sm text-zinc-600">
      <p className="">© 2026 Jiwon Lee. All rights reserved.</p>
      <div className="hidden md:flex items-center gap-5 xl:gap-6">
        <a href={SNS_LINK.notion} target="_blank" rel="noreferrer" className="inline-block">
          Notion
        </a>
        <a href={SNS_LINK.github} target="_blank" rel="noreferrer" className="inline-block">
          Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
