import { SKILLS } from "@/constants/skills";
import SectionLayout from "../blocks/SectionLayout";
import SkillBlock from "../blocks/SkillBlock";

const SkillsScreen = () => {
  const { dev, design, tools } = SKILLS;

  return (
    <SectionLayout id="skills" title="Skills" bgColor="bg-green-50/50">
      <div className="space-y-10 sm:space-y-12 lg:space-y-14 xl:space-y-16">
        <SkillBlock title="개발" items={dev} />
        <SkillBlock title="디자인 / UI" items={design} />
        <SkillBlock title="개발환경 / 협업 툴" items={tools} />
      </div>
    </SectionLayout>
  );
};

export default SkillsScreen;
