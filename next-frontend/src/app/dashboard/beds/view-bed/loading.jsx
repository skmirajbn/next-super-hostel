/* eslint-disable @next/next/no-img-element */
"use client";
function BedLoading() {
  return (
    <div className="space-y-4 bg-white my-6 py-6 px-12 rounded-md shadow-lg">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold text-blue-950">
          <i class="fa-solid fa-people-roof"></i> All Rooms
        </h2>
      </div>

      <div className="text-gray-800 gap-y-3 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-4 px-3">ID</th>
              <th className="py-4">Room code</th>
              <th className="py-4">Branch Name</th>
              <th className="py-4">Branch Code</th>
              <th className="py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }, () => ({})).map((row, index) => (
              <tr key="">
                <td className="text-center py-4">
                  <div className="h-8 w-28 bg-slate-300 rounded-full animate-pulse mx-auto"></div>
                </td>
                <td className="text-center py-4">
                  <div className="h-8 w-28 bg-slate-300 rounded-full animate-pulse mx-auto"></div>
                </td>
                <td className="text-center py-4">
                  <div className="h-8 w-28 bg-slate-300 rounded-full animate-pulse mx-auto"></div>
                </td>
                <td className="text-center py-4">
                  <div className="h-8 w-28 bg-slate-300 rounded-full animate-pulse mx-auto"></div>
                </td>

                <td className="text-center py-4">
                  <div className="h-8 w-28 bg-slate-300 rounded-full animate-pulse mx-auto"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BedLoading;
