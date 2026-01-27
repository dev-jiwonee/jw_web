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
      <div className="flex flex-col md:flex-row gap-x-6 lg:gap-x-8 xl:gap-x-11 gap-y-4 lg:gap-y-0">
        <div className="w-55 lg:w-74 mx-auto shrink-0">
          <div className="relative w-full mb-3 md:mb-4 xl:mb-6 aspect-3/4 bg-zinc-500 rounded-2xl lg:rounded-3xl overflow-hidden">
            <Image
              src="/images/profile_photo.png"
              alt="profile photo"
              width={346}
              height={460}
            />
          </div>
          <div className="px-4 md:px-0 lg:px-4 xl:px-5 space-y-2 md:space-y-3 lg:space-y-4 text-xs md:text-sm lg:text-base">
            <div className="flex items-center gap-x-2 md:gap-x-2.5">
              <i>
                <IconMail className="w-4 md:w-4.5 lg:w-6 h-4 md:h-4.5 lg:h-6" />
              </i>
              {PERSONAL_INFO.email}
            </div>
            <div className="flex items-center gap-x-2 md:gap-x-2.5">
              <i>
                <IconHome className="w-4 md:w-4.5 lg:w-6 h-4 md:h-4.5 lg:h-6" />
              </i>
              {PERSONAL_INFO.address}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-6 p-4 md:p-6 xl:p-9 rounded-2xl lg:rounded-3xl bg-white">
            <div className="flex items-center gap-x-2.5 mb-2 xl:mb-2.5 pb-2 xl:pb-2.5 border-b">
              <span className="font-medium text-2xl lg:text-[32px] xl:text-4xl">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs lg:text-sm xl:text-base">
                경력 {PERSONAL_INFO.career_period}
              </span>
            </div>
            <p className="xl:min-h-20 mb-2 xl:mb-2.5 text-xs xl:text-sm leading-normal">
              {PERSONAL_INFO.desc}
            </p>
            <div className="flex gap-x-2.5 font-medium text-xs lg:text-sm text-zinc-600">
              {PERSONAL_INFO.keywords.map((word, i) => (
                <span key={i}>#{word}</span>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-x-0 lg:gap-x-11 xl:gap-x-14 gap-y-6 md:gap-y-4 lg:gap-y-0 px-4 md:px-6 xl:px-9">
            <div className="md:flex-1 space-y-4 lg:space-y-5 xl:space-y-6">
              <InfoBlock title="경력" items={career} />
              <InfoBlock title="학력" items={education} />
              <InfoBlock title="수상" items={awards} />
            </div>
            <div className="md:flex-1 space-y-4 lg:space-y-5 xl:space-y-6">
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
    <div className="lg:min-h-20">
      <div className="mb-2.5 lg:mb-3 pb-2 font-medium text-lg lg:text-xl border-b">
        {title}
      </div>
      <div className="space-y-3">
        {items?.map((item, idx) => (
          <div key={idx}>
            <div className="flex items-start justify-between gap-x-2 mb-1 text-sm lg:text-base">
              <div className="flex items-center gap-x-1.5 md:gap-x-2.5 flex-wrap">
                <span>{item.title}</span>
                {item.subtitle && (
                  <span className="font-light">{item.subtitle}</span>
                )}
              </div>
              {item.desc && (
                <span className="font-light text-blue-500 shrink-0">{item.desc}</span>
              )}
            </div>
            <div className="font-light text-xs text-zinc-500">
              {item.period}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
