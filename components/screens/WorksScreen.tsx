import { WORKS } from "@/constants/works";
import SectionLayout from "../blocks/SectionLayout";
import { IconArrowR } from "../common/icons";
import { queryDatabases } from "@/utils/notion";

const WorksScreen = async () => {
  const data = await queryDatabases();
  
  return (
    <SectionLayout id="works" title="Works" bgColor="bg-orange-50/50">
      <div className="grid md:grid-cols-2 gap-x-0 md:gap-x-6 xl:gap-x-9 gap-y-5 md:gap-y-6 xl:gap-y-7">
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
    <div className="flex items-center gap-x-3.5 lg:gap-x-3 p-5 lg:p-6 bg-white/60 rounded-[20px] lg:rounded-3xl shadow border-4 border-white hover:border-orange-300 transition group">
      {/* <Link> */}
      <div className="w-full">
        <p className="mb-2 font-semibold">{title}</p>
        <p className="mb-3 lg:mb-3.5 text-xs text-zinc-500">{period}</p>
        <p className="min-h-8 text-xs text-zinc-600">{desc}</p>
        {labels && (
          <div className="w-full flex flex-wrap mt-3 gap-2">
            {labels.map((lb, i) => (
              <span
                key={i}
                className="px-2 py-0.5 border border-zinc-500 rounded-full text-xxs text-zinc-500"
              >
                {lb}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="group-hover:text-orange-300 transition">
        <IconArrowR className="w-5 lg:w-6 h-5 lg:h-6" />
      </div>
    </div>
  );
};
