const WorkListSkeleton = () => {
  return Array.from({ length: 4 }).map((_, i) => (
    <div
      key={i}
      className="flex items-start justify-between gap-4 lg:gap-5 p-5 lg:p-6 rounded-2xl shadow-block bg-white"
    >
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-zinc-200 rounded w-3/4" />
        <div className="h-3 bg-zinc-200 rounded w-1/3" />
        {/* 설명 */}
        <div className="h-3 bg-zinc-200 rounded w-full mt-3" />
        <div className="h-3 bg-zinc-200 rounded w-5/6" />
        {/* 스킬 태그 */}
        <div className="flex gap-2 mt-3">
          <div className="h-5 w-12 bg-zinc-200 rounded-full" />
          <div className="h-5 w-16 bg-zinc-200 rounded-full" />
          <div className="h-5 w-10 bg-zinc-200 rounded-full" />
        </div>
      </div>
    </div>
  ));
};

export default WorkListSkeleton;
