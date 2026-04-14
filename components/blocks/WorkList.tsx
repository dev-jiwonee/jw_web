import { getNotionData } from "@/utils/notion";
import { IconArrowR } from "../common/icons";
import Link from "next/link";

const WorkList = async () => {
  let data = [];
  try {
    data = await getNotionData();
  } catch (error) {
    console.error("❌ WorkList 데이터 로드 실패:", error);
    return (
      <p className="text-sm text-red-400">데이터를 불러오지 못했습니다.</p>
    );
  }

  return data.map(({ id, title, desc, period, skill, url }: any) => (
    <Link
      key={id}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start justify-between gap-4 lg:gap-5 p-5 lg:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border-2 border-white/80 hover:border-orange-300 hover:bg-white active:border-orange-300 active:bg-white transition-all duration-200"
    >
      {/* <Link> */}
      <div className="flex-1">
        <div className="mb-2 lg:mb-3 space-y-2">
          <p className="font-semibold text-base lg:text-lg break-keep leading-tight">
            {title}
          </p>
          <p className="text-xs text-zinc-500 font-light">{period}</p>
        </div>
        <p className="sm:min-h-10 font-light text-xxs lg:text-xs text-zinc-600 leading-normal">
          {desc}
        </p>
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
      <div className="self-center text-zinc-300 group-hover:text-orange-300 transition-colors duration-200">
        <IconArrowR className="w-5 h-5 lg:w-6 lg:h-6" />
      </div>
    </Link>
  ));
};

export default WorkList;
