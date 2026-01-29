import { PERSONAL_INFO } from "@/constants/personalInfo";
import SectionLayout from "../blocks/SectionLayout";
import { IconHome, IconMail } from "../common/icons";
import Image from "next/image";
import AboutInfoBlock from "../blocks/AboutInfoBlock";

//  About Me Screen
export default function AboutMeScreen() {
  const { career, education, awards, training, experience, certificates } =
    PERSONAL_INFO;

  return (
    <SectionLayout id="aboutMe" title="About Me" bgColor="bg-pink-50/50">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-7 lg:gap-10 xl:gap-12">
        <div className="w-full max-w-56 lg:max-w-74 xl:max-w-86 mx-auto shrink-0">
          <div className="relative w-full aspect-3/4 mb-2.5 sm:mb-3 lg:mb-4 xl:mb-5 rounded-xl lg:rounded-2xl xl:rounded-3xl overflow-hidden">
            <Image
              src="/images/profile_photo.png"
              alt="profile photo"
              width={346}
              height={460}
            />
          </div>
          <div className="mx-4 xl:mx-5 space-y-2 sm:space-y-3 text-xs lg:text-base xl:text-lg">
            <div className="flex items-center flex-wrap gap-x-2 lg:gap-x-2.5 xl:gap-x-3">
              <IconMail className="w-4 h-4 lg:w-5.5 lg:h-5.5" />
              {PERSONAL_INFO.email}
            </div>
            <div className="flex items-center flex-wrap gap-x-2 lg:gap-x-2.5 xl:gap-x-3">
              <IconHome className="w-4 h-4 lg:w-5.5 lg:h-5.5" />
              {PERSONAL_INFO.address}
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-6 lg:space-y-7">
          {/* 상단 소개 */}
          <div className="space-y-2 lg:space-y-3 xl:space-y-4 p-6 lg:p-8 xl:p-9 rounded-xl lg:rounded-2xl xl:rounded-3xl bg-white">
            <div className="flex items-center gap-2.5 lg:gap-3 xl:gap-4 pb-2 lg:pb-3 xl:pb-4 border-b border-zinc-400">
              <span className="font-medium text-2xl lg:text-4xl xl:text-5xl">{PERSONAL_INFO.name}</span>
              <span className="text-xs lg:text-base xl:text-lg">
                경력 {PERSONAL_INFO.career_period}
              </span>
            </div>
            <div className="space-y-2.5 lg:space-y-3 text-xs lg:text-sm xl:text-base">
              <p className="leading-normal">{PERSONAL_INFO.desc}</p>
              <div className="flex items-center flex-wrap gap-x-2 xl:gap-x-3 text-zinc-600">
                {PERSONAL_INFO.keywords.map((word, i) => (
                  <span key={i}>#{word}</span>
                ))}
              </div>
            </div>
          </div>
          {/* 리스트 */}
          <div className="flex flex-wrap flex-col lg:flex-row gap-5 lg:gap-10 xl:gap-x-12 px-6 lg:px-8 xl:px-9">
            <div className="flex-1 space-y-5 lg:space-y-8">
              <AboutInfoBlock title="경력" items={career} />
              <AboutInfoBlock title="학력" items={education} />
              <AboutInfoBlock title="수상" items={awards} />
            </div>
            <div className="flex-1 space-y-5 lg:space-y-8">
              <AboutInfoBlock title="교육" items={training} />
              <AboutInfoBlock title="경험" items={experience} />
              <AboutInfoBlock title="자격" items={certificates} />
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}