const MainScreen = () => {
  return (
    <section id="home" className="min-h-dvh flex items-center justify-center px-15 animate-bg-gradient">
      {/* <div className="relative z-1 flex items-center justify-center h-full">
        <div className="backdrop-blur-xl bg-white/40 border border-white/60 shadow-lg rounded-3xl p-10 text-gray-800 text-center">
          <h1 className="text-4xl font-bold">지원's 포트폴리오</h1>
        </div>
      </div> */}
      <div className="flex flex-col gap-4">
        <p className="text-lg">안녕하세요:)</p>
        <p className="text-5xl">웹 퍼블리셔로 시작해,<br/>사용자 경험을 중심으로 웹을 만들어가는</p>
        <p className="text-3xl">프론트엔드 개발자 <span className="font-medium">이지원</span> 입니다.</p>
      </div>
    </section>
  );
};

export default MainScreen;
