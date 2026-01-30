import { getNotionData } from "@/utils/notion";
import { IconArrowR } from "../common/icons";

const WorkList = async () => {
  const data = await getNotionData();

  return data.map(({ id, title, desc, period, skill }: any) => (
    <div
      key={id}
      className="flex items-start justify-between gap-4 lg:gap-5 p-5 lg:p-6 rounded-2xl shadow-block bg-white hover:cursor-pointer"
    >
      {/* <Link> */}
      <div className="flex-1">
        <div className="mb-2 lg:mb-3 space-y-2">
          <p className="font-semibold text-base lg:text-lg break-keep leading-tight">
            {title}
          </p>
          <p className="text-xs text-zinc-500 font-light">{period}</p>
        </div>
        <p className="sm:min-h-10 font-light text-xxs lg:text-xs text-zinc-600 leading-normal">{desc}</p>
        {skill.length > 0 && (
          <div className="flex flex-wrap gap-x-2 gap-y-1 mt-4">
            {skill.map((sk: string, i: number) => (
              <span
                key={i}
                className="px-2 py-1 border border-zinc-500 rounded-full text-xxs text-zinc-500"
              >
                {sk}
              </span>
            ))}
          </div>
        )}
      </div>
      {/* <div className="self-center group-hover:text-orange-300 transition">
        <IconArrowR className="w-5 h-5 lg:w-6 lg:h-6" />
      </div> */}
    </div>
  ));
};

export default WorkList;
