import MemberViewSkeleton from "./MemberViewSkeleton";

function MemberView() {
  let isLoading = false;
  return (
    <div className="space-y-4 bg-white my-6 py-6 px-12 rounded-md shadow-lg">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold text-blue-950">
          <i className="fa-solid fa-users"></i> All Users
        </h2>
      </div>

      <div className="text-gray-800 gap-y-3 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-4 px-3">ID</th>
              <th className="py-4">Name</th>
              <th className="py-4">Username</th>
              <th className="py-4">Email</th>
              <th className="py-4">Role</th>
              <th className="py-4">Image</th>
              <th className="py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <MemberViewSkeleton count={10} />}
            <tr>
              <td className="text-center py-4">46</td>
              <td className="text-center py-4">Rakibul Islam</td>
              <td className="text-center py-4">rakib</td>
              <td className="text-center py-4">rakib@gmail.com</td>
              <td className="text-center py-4">Admin</td>
              <td className="text-center py-4">
                <img className="w-12 h-12 object-cover rounded-full mx-auto" src="\img\avatar-1.jpg" alt="" />
              </td>
              <td className="text-center py-4">
                <a>
                  <i className="fa-solid fa-pen-to-square pr-2 text-green-600"></i>
                </a>{" "}
                | <i className="fa-solid fa-trash pl-2 text-red-600"></i>
              </td>
            </tr>
            <tr>
              <td className="text-center py-4">46</td>
              <td className="text-center py-4">Rakibul Islam</td>
              <td className="text-center py-4">rakib</td>
              <td className="text-center py-4">rakib@gmail.com</td>
              <td className="text-center py-4">Admin</td>
              <td className="text-center py-4">
                <img className="w-12 h-12 object-cover rounded-full mx-auto" src="\img\avatar-1.jpg" alt="" />
              </td>
              <td className="text-center py-4">
                <a>
                  <i className="fa-solid fa-pen-to-square pr-2 text-green-600"></i>
                </a>{" "}
                | <i className="fa-solid fa-trash pl-2 text-red-600"></i>
              </td>
            </tr>
            <tr>
              <td className="text-center py-4">46</td>
              <td className="text-center py-4">Rakibul Islam</td>
              <td className="text-center py-4">rakib</td>
              <td className="text-center py-4">rakib@gmail.com</td>
              <td className="text-center py-4">Admin</td>
              <td className="text-center py-4">
                <img className="w-12 h-12 object-cover rounded-full mx-auto" src="\img\avatar-1.jpg" alt="" />
              </td>
              <td className="text-center py-4">
                <a>
                  <i className="fa-solid fa-pen-to-square pr-2 text-green-600"></i>
                </a>{" "}
                | <i className="fa-solid fa-trash pl-2 text-red-600"></i>
              </td>
            </tr>
            <tr>
              <td className="text-center py-4">46</td>
              <td className="text-center py-4">Rakibul Islam</td>
              <td className="text-center py-4">rakib</td>
              <td className="text-center py-4">rakib@gmail.com</td>
              <td className="text-center py-4">Admin</td>
              <td className="text-center py-4">
                <img className="w-12 h-12 object-cover rounded-full mx-auto" src="\img\avatar-1.jpg" alt="" />
              </td>
              <td className="text-center py-4">
                <a>
                  <i className="fa-solid fa-pen-to-square pr-2 text-green-600"></i>
                </a>{" "}
                | <i className="fa-solid fa-trash pl-2 text-red-600"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MemberView;
