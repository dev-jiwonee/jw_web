import SectionLayout from "../blocks/SectionLayout";
import IconMouseWheel from "../common/IconMouseWheel";

const MainScreen = () => {
  return (
    <SectionLayout id="home" center className="animate-bg-gradient">
      <div className="space-y-1.5 lg:space-y-2">
        <p className="text-sm sm:text-xl lg:text-2xl transition-all">안녕하세요 :)</p>
        <p className="text-xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.4] transition-all">
          웹 퍼블리셔로 시작해,
          <br />
          사용자 경험을 중심으로 웹을 만들어가는
        </p>
        <p className="text-lg sm:text-3xl lg:text-4xl transition-all">
          프론트엔드 개발자 <span className="font-semibold">이지원</span> 입니다.
        </p>
      </div>
      <IconMouseWheel />
    </SectionLayout>
  );
};

export default MainScreen;
