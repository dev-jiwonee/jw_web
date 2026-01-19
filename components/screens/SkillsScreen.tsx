import { SKILLS } from "@/constants/skills";
import SectionLayout from "../blocks/SectionLayout";
import Image from "next/image";

const SkillsScreen = () => {
  const { dev, design, tools } = SKILLS;

  return (
    <SectionLayout id="skills" title="Skills" bgColor="bg-green-50/50">
      <div className="space-y-18">
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
    <div className="flex gap-x-11">
      <div className="w-80 flex-none font-semibold text-2xl">{title}</div>
      <div className="w-full grid grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-x-1.5">
            <div className="w-6 h-6 bg-zinc-100">
              {item.icon && (
                <Image
                  src={`/images/${item.icon}`}
                  width={24}
                  height={24}
                  alt={item.name}
                />
              )}
            </div>
            <div>
              <p className="font-semibold text-lg leading-[1.4]">{item.name}</p>
              {item.desc && (
                <p className="text-xs text-zinc-500">{item.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
