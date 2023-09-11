function HeaderLoading() {
  return (
    <div className="bg-[#279EFF] text-white py-4">
      <div className="container flex justify-between items-center space-x-12">
        <div className="flex items-center w-32">
          <div className="w-full h-8 bg-slate-300 rounded-full"></div>
        </div>
        <div className="space-x-4 w-full">
          <div className="w-full h-8 bg-slate-300 rounded-full"></div>
        </div>
        <div className="space-x-4 flex justify-center items-center">
          {/* Search */}
          <div className="w-32 h-8 bg-slate-300 rounded-full"></div>
          <div className="w-32 h-8 bg-slate-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default HeaderLoading;
