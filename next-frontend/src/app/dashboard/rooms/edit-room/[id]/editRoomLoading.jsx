function EditRoomLoading() {
  return (
    <div className="text-gray-700 space-y-6 lg:px-20">
      <h3 className="text-2xl font-medium">
        <div className="h-6 w-36 bg-slate-300 rounded-full animate-pulse"></div>
      </h3>
      <form className="space-y-10">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <label className="text-lg">
              {" "}
              <div className="h-6 w-36 bg-slate-300 rounded-full animate-pulse"></div>
            </label>

            <div className="h-6 w-36 bg-slate-300 rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="h-8 w-36 bg-slate-300 rounded-full animate-pulse"></div>

            <div className="h-8 w-full bg-slate-300 rounded-full animate-pulse"></div>
          </div>
        </div>
        <h2 className="text-center text-2xl text-green-700"> </h2>
        <h2 className="text-center text-2xl text-green-700"></h2>
        <div className="h-8 w-36 bg-slate-300 rounded-full animate-pulse mx-auto"></div>

        <h3 className="text-green-600 text-center"></h3>
      </form>
    </div>
  );
}

export default EditRoomLoading;
