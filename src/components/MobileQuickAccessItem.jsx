const MobileQuickAccessItem = ({ text, bg, icon, count }) => (
  <div className="w-full px-3 py-4 rounded-2xl flex items-center gap-2 bg-gray-400/10 justify-between">
    <div className="flex gap-2 items-center">
      {icon}
      <p className="text-sm text-gray-500">{text}</p>
    </div>

    <div
      className="size-8 rounded-2xl text-white flex items-center justify-center"
      style={{ background: bg }}
    >
      {count}
    </div>
  </div>
);

export default MobileQuickAccessItem;
