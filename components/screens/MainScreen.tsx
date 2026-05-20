import SectionLayout from "../blocks/SectionLayout";
import IconMouseWheel from "../common/IconMouseWheel";

const MainScreen = () => {
  return (
    <SectionLayout id="home" center className="animate-bg-gradient">
      <div className="space-y-1.5 lg:space-y-2">
        <p className="text-xs sm:text-sm tracking-widest text-zinc-400 uppercase">
          Web Publisher
        </p>
        <p className="text-xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.4] transition-all">
          디자인과 코드 사이,
          <br />
          구조와 완성도를 함께 고민하며 웹을 만드는
        </p>
        <p className="text-lg sm:text-3xl lg:text-4xl transition-all">
          웹 퍼블리셔 <span className="font-semibold">이지원</span>입니다.
        </p>
      </div>
      <IconMouseWheel />
    </SectionLayout>
  );
};

export default MainScreen;
