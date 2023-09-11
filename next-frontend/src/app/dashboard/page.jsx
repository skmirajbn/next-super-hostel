function DashboardSummary() {
  return (
    <section id="web-job-category" className="">
      <div className="space-y-4 bg-white my-6 py-6 rounded-md shadow-lg">
        <div className="space-y-4 shadow-lg px-12 pb-12">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold text-blue-950">
              <i className="fa-solid fa-chart-simple"></i> Admin Summary
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-3 text-gray-700 gap-y-3">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-12 px-5 rounded-md shadow-lg shadow-blue-700">
              <h5 className="text-2xl">Seats</h5>
              <span className="text-xl">
                <i className="fa-solid fa-briefcase"></i> 500
              </span>
            </div>
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-white text-center py-12 px-5 rounded-md shadow-lg shadow-cyan-500">
              <h5 className="text-2xl">Rooms</h5>
              <span className="text-xl">
                <i className="fa-solid fa-user-group"></i> 800
              </span>
            </div>
            <div className="bg-gradient-to-r from-amber-300 to-amber-400 text-white text-center py-12 px-5 rounded-md shadow-lg shadow-amber-500">
              <h5 className="text-2xl">Members</h5>
              <span className="text-xl">
                <i className="fa-solid fa-handshake-simple"></i> 1520
              </span>
            </div>
            <div className="bg-gradient-to-r from-pink-300 to-pink-400 text-white text-center py-12 px-5 rounded-md shadow-lg shadow-pink-500">
              <h5 className="text-2xl">Branches</h5>
              <span className="text-xl">
                <i className="fa-solid fa-folder-tree"></i> 11
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-5 px-12 py-6">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold text-blue-950">
              <i className="fa-solid fa-chart-simple"></i> Last member added
            </h2>
          </div>

          <div className="">
            <span className="inline-block pr-2">
              <span className="bg-blue-600 inline-block px-3 mr-2 rounded-md text-white">Name:</span> <span className="font-bold">Jamal Khan</span>
            </span>
            <span>
              <span className="text-white inline-block px-3 bg-green-600 rounded-md mr-2">Branch:</span> <span className="font-bold underline decoration-2 underline-offset-2 decoration-orange-600">Dhanmondi Branch</span>
            </span>
          </div>
          <div className="">
            <span className="inline-block pr-2">
              <span className="bg-blue-600 inline-block px-3 mr-2 rounded-md text-white">Name:</span> <span className="font-bold">Jamal Khan</span>
            </span>
            <span>
              <span className="text-white inline-block px-3 bg-green-600 rounded-md mr-2">Branch:</span> <span className="font-bold underline decoration-2 underline-offset-2 decoration-orange-600">Dhanmondi Branch</span>
            </span>
          </div>
          <div className="">
            <span className="inline-block pr-2">
              <span className="bg-blue-600 inline-block px-3 mr-2 rounded-md text-white">Name:</span> <span className="font-bold">Jamal Khan</span>
            </span>
            <span>
              <span className="text-white inline-block px-3 bg-green-600 rounded-md mr-2">Branch:</span> <span className="font-bold underline decoration-2 underline-offset-2 decoration-orange-600">Dhanmondi Branch</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardSummary;
