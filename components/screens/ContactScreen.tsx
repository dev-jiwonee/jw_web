import { PERSONAL_INFO } from "@/constants/personalInfo";
import SectionLayout from "../blocks/SectionLayout";
import { IconMail } from "../common/icons";
import { SNS_LINK } from "@/constants/snsLink";

const ContactScreen = () => {
  return (
    <SectionLayout id="contact" title="Contact" bgColor="bg-blue-50">
      <div className="flex-1 flex flex-col justify-center items-center gap-12 pb-8">
        <div className="flex flex-col w-full max-w-90 sm:max-w-160 lg:max-w-210">
          <p className="mb-2.5 sm:mb-4 lg:mb-6 text-sm sm:text-xl lg:text-2xl">
            궁금한 점이 있으시면 언제든 연락주세요 !
          </p>
          <p className="mb-5 sm:mb-8 lg:mb-10 font-semibold text-2xl sm:text-8xl lg:text-9xl">{PERSONAL_INFO.email}</p>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-1.5 sm:gap-2 ml-auto px-5 sm:px-8 lg:px-9 py-3 sm:py-4 lg:py-5 bg-white/80 rounded-full hover:bg-white"
          >
            <IconMail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            <span className="font-medium text-sm sm:text-lg lg:text-xl">메일 보내기</span>
          </a>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4">
          <BtnSnsLink
            iconSrc="/icons/ic_notion.png"
            label="Notion"
            href={SNS_LINK.notion}
          />
          <BtnSnsLink
            iconSrc="/icons/ic_github.png"
            label="Github"
            href={SNS_LINK.github}
          />
          {/* <BtnSnsLink
            iconSrc="/icons/ic_note.png"
            label="Dev Note"
            href={SNS_LINK.dev_note}
          /> */}
        </div>
      </div>
      <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-light text-xxs xl:text-xs text-zinc-400">
        Last updated January 2026
      </p>
    </SectionLayout>
  );
};

export default ContactScreen;

interface BtnSnsLinkProps {
  label: string;
  iconSrc?: string;
  href: string;
}
const BtnSnsLink = ({ label, iconSrc, href }: BtnSnsLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-1 px-4 py-2 border border-white/90 rounded-full hover:bg-white transition-colors"
    >
      {iconSrc && (
        <img src={iconSrc} alt={label || ""} className="w-4 h-4 opacity-90" />
      )}
      <span className="font-medium text-xs text-zinc-600">{label}</span>
    </a>
  );
};
