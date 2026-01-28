const IconMouseWheel = () => {
  return (
    <div className="absolute left-1/2 bottom-15 -translate-x-1/2 w-6 h-11 rounded-full border border-zinc-400">
      <span className="absolute top-3 left-1/2 inline-block w-1 h-1 rounded-full bg-zinc-400 transform -translate-x-1/2 animate-mouse-scroll"></span>
    </div>
  );
};

export default IconMouseWheel;
