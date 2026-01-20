import { PERSONAL_INFO } from "@/constants/personalInfo";
import SectionLayout from "../blocks/SectionLayout";
import { IconMail } from "../common/icons";
import { SNS_LINK } from "@/constants/snsLink";

const ContactScreen = () => {
  return (
    <SectionLayout id="contact" title="Contact" bgColor="bg-blue-50" className="relative">
      <div>
        <p className="mb-7 text-2xl">궁금한 점이 있으시면 언제든 연락주세요</p>
        <p className="mb-7 font-semibold text-6xl">{PERSONAL_INFO.email}</p>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-1.5 px-8 py-4 bg-white rounded-full text-zinc-600 hover:text-black"
        >
          <IconMail />
          <span className="text-xl">메일 보내기</span>
        </a>
        <div className="mt-12 space-x-4.5">
          <BtnSnsLink iconSrc="/icons/ic_notion.png" label="Notion" href={SNS_LINK.notion} />
          <BtnSnsLink iconSrc="/icons/ic_github.png" label="Github" href={SNS_LINK.github} />
          <BtnSnsLink iconSrc="/icons/ic_note.png" label="Dev Note" href={SNS_LINK.dev_note} />
        </div>
        <p className="absolute bottom-10 left-1/2 -translate-x-1/2 font-light text-xs text-zinc-400">Last updated January 2026</p>
      </div>
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
      className="inline-flex items-center justify-center gap-x-2.5 px-3 py-2 border-2 border-white rounded-full hover:bg-white"
    >
      {iconSrc && (
        <img src={iconSrc} alt={label || ""} className="w-5 h-5" />
      )}
      <span className="font-medium">{label}</span>
    </a>
  );
};
