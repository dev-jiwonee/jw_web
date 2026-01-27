import IconMouseWheel from "../common/IconMouseWheel";

const MainScreen = () => {
  return (
    <section id="home" className="relative min-h-dvh flex items-center justify-center px-4 xl:px-15 animate-bg-gradient">
      <div className="mb-10">
        <p className="mb-1 text-base md:text-lg">안녕하세요 :)</p>
        <p className="md:mb-2 text-2xl md:text-[44px] xl:text-5xl/15">웹 퍼블리셔로 시작해,<br/>사용자 경험을 중심으로 웹을 만들어가는</p>
        <p className="text-lg md:text-3xl">프론트엔드 개발자 <span className="font-medium">이지원</span> 입니다.</p>
      </div>
      <IconMouseWheel />
    </section>
  );
};

export default MainScreen;
