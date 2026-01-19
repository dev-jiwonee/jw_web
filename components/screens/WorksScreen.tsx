import { WORKS } from "@/constants/works";
import SectionLayout from "../blocks/SectionLayout";
import { IconArrowR } from "../common/icons";

const WorksScreen = () => {
  return (
    <SectionLayout id="works" title="Works" bgColor="bg-orange-50/50">
      <div className="grid grid-cols-2 gap-x-9 gap-y-7">
        {WORKS.map((wk, i) => (
          <WorkBlock key={i} {...wk} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default WorksScreen;

// works block
interface WorkItem {
  title: string;
  period?: string;
  desc?: string;
  labels?: string[];
  url?: string;
}

const WorkBlock = ({ title, period, desc, labels, url }: WorkItem) => {
  return (
    <div className="flex items-center gap-x-2 p-6 bg-white/60 rounded-3xl shadow border-4 border-white hover:border-orange-300 transition group">
      {/* <Link> */}
      <div className="w-full">
        <p className="mb-2 font-semibold">{title}</p>
        <p className="mb-3.5 text-xs text-zinc-500">{period}</p>
        <p className="min-h-8 text-xs text-zinc-600">{desc}</p>
        {labels && (
          <div className="space-x-2">
            {labels.map((lb, i) => (
              <span key={i} className="px-2 py-1 border border-zinc-500 rounded-full text-xxs text-zinc-500">
                {lb}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="group-hover:text-orange-300 transition">
        <IconArrowR />
      </div>
    </div>
  );
};
