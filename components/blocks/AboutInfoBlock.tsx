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

const AboutInfoBlock = ({ title, items }: InfoBlockProps) => {
  return (
    <div className="lg:min-h-20">
      <div className="mb-2.5 xl:mb-3 pb-2 border-b font-medium text-lg xl:text-xl">
        {title}
      </div>
      <div className="space-y-3">
        {items?.map((item, idx) => (
          <div key={idx}>
            <div className="flex items-start justify-between gap-x-4 mb-1 text-sm lg:text-base">
              <div className="flex flex-wrap gap-x-1.5 xl:gap-x-2.5 gap-y-1">
                <span>{item.title}</span>
                {item.subtitle && (
                  <span className="font-light">{item.subtitle}</span>
                )}
              </div>
              {item.desc && (
                <span className="font-light text-blue-500 shrink-0">
                  {item.desc}
                </span>
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

export default AboutInfoBlock;
