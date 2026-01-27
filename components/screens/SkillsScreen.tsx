import { SKILLS } from "@/constants/skills";
import SectionLayout from "../blocks/SectionLayout";
import Image from "next/image";

const SkillsScreen = () => {
  const { dev, design, tools } = SKILLS;

  return (
    <SectionLayout id="skills" title="Skills" bgColor="bg-green-50/50">
      <div className="space-y-10 md:space-y-12 lg:space-y-18">
        <SkillBlock title="개발" items={dev} />
        <SkillBlock title="디자인 / UI" items={design} />
        <SkillBlock title="개발환경 / 협업 툴" items={tools} />
      </div>
    </SectionLayout>
  );
};

export default SkillsScreen;

//  skill block
interface SkillItem {
  icon?: string;
  name: string;
  desc?: string;
}
interface SkillBlockProps {
  title?: string;
  items: SkillItem[];
}
const SkillBlock = ({ title, items }: SkillBlockProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-x-0 lg:gap-x-11 gap-y-5 lg:gap-y-0">
      <div className="flex-1/4 font-semibold text-lg md:text-xl lg:text-2xl">{title}</div>
      <div className="flex-3/4 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-x-1.5">
            <div className="shrink-0 w-5 lg:w-6 h-5 lg:h-6">
              {item.icon && (
                <Image
                  src={`/icons/${item.icon}`}
                  width={24}
                  height={24}
                  alt={item.name}
                />
              )}
            </div>
            <div>
              <p className="font-semibold text-base lg:text-lg leading-[1.4]">{item.name}</p>
              {item.desc && (
                <p className="text-xxs lg:text-xs text-zinc-500">{item.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
