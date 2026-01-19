import { PERSONAL_INFO } from "@/constants/personalInfo";
import SectionLayout from "../blocks/SectionLayout";
import { IconHome, IconMail } from "../common/icons";
import Image from "next/image";

//  About Me Screen
export default function AboutMeScreen() {
  const { career, education, awards, training, experience, certificates } =
    PERSONAL_INFO;

  return (
    <SectionLayout id="aboutMe" title="About Me" bgColor="bg-pink-50/50">
      <div className="flex gap-x-11">
        <div className="flex-1/4">
          <div className="relative w-full mb-6 aspect-3/4 bg-zinc-500 rounded-3xl overflow-hidden">
            <Image
              src="/images/profile_photo.png"
              alt="profile photo"
              width={346}
              height={460}
            />
          </div>
          <div className="px-5 space-y-4">
            <div className="flex items-center gap-x-2.5">
              <i>
                <IconMail />
              </i>
              {PERSONAL_INFO.email}
            </div>
            <div className="flex items-center gap-x-2.5">
              <i>
                <IconHome />
              </i>
              {PERSONAL_INFO.address}
            </div>
          </div>
        </div>
        <div className="flex-3/4">
          <div className="mb-6 p-9 rounded-3xl bg-white/50">
            <div className="flex items-center gap-x-2.5 mb-2.5 pb-2.5 border-b">
              <span className="font-medium text-4xl">{PERSONAL_INFO.name}</span>
              <span>경력 {PERSONAL_INFO.career_period}</span>
            </div>
            <p className="min-h-20 mb-2.5 text-sm leading-normal">
              {PERSONAL_INFO.desc}
            </p>
            <div className="flex gap-x-2.5 font-medium text-zinc-600">
              {PERSONAL_INFO.keywords.map((word, i) => (
                <span key={i}>#{word}</span>
              ))}
            </div>
          </div>
          <div className="w-full lg:flex gap-x-14 px-9">
            <div className="md:flex-1 space-y-4">
              <InfoBlock title="경력" items={career} />
              <InfoBlock title="학력" items={education} />
              <InfoBlock title="수상" items={awards} />
            </div>
            <div className="md:flex-1  space-y-4">
              <InfoBlock title="교육" items={training} />
              <InfoBlock title="경험" items={experience} />
              <InfoBlock title="자격" items={certificates} />
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

// Info block
interface InfoItem {
  title: string;
  subtitle?: string;
  desc?: string;
  period?: string;
}
interface InfoBlockProps {
  title?: string;
  items: InfoItem[];
}

const InfoBlock = ({ title, items }: InfoBlockProps) => {
  return (
    <div>
      <div className="mb-3 pb-2 font-medium text-xl border-b">{title}</div>
      {items?.map((item, idx) => (
        <div key={idx} className="pb-2.5 last:pb-0 min-h-16">
          <div className="flex items-center justify-between gap-x-2 mb-1">
            <div className="flex items-center gap-x-2.5">
              <span>{item.title}</span>
              {item.subtitle && (
                <span className="font-light">{item.subtitle}</span>
              )}
            </div>
            {item.desc && (
              <span className="font-light text-blue-500">{item.desc}</span>
            )}
          </div>
          <div className="font-light text-xs text-zinc-500">{item.period}</div>
        </div>
      ))}
    </div>
  );
};
