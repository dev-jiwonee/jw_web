import { SNS_LINK } from "@/constants/snsLink";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between h-11 sm:h-14 px-4 md:px-5 lg:px-8 xl:px-15 bg-white font-light text-xxs sm:text-sm text-zinc-600">
      <p className="">© 2026 Jiwon Lee. All rights reserved.</p>
      <div className="hidden md:flex items-center gap-6">
        <a href={SNS_LINK.notion} target="_blank" rel="noreferrer">
          Notion
        </a>
        <a href={SNS_LINK.github} target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
