/* eslint-disable @next/next/no-img-element */
"use client";
import environment from "@/environment/environment";
import getDataApi from "@/hooks/getDataApi";
import useApiCall from "@/hooks/useApiCall";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
function ViewBranch() {
  // const { data, isLoading } = useQuery("userView", () => getDataApi(environment.apiUrl + "users/getUsers.php", {}));
  const { resData, apiCall } = useApiCall();
  const [isFetching, setIsFetching] = useState(false);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["userView"],
    queryFn: () => getDataApi(environment.apiUrl + "branches/getAllBranches.php", {}),
  });
  useEffect(() => {
    console.log("loading is " + isLoading);
    // apiCall(environment.apiUrl + "users/getUsers.php", {});
  }, [data, isLoading]);
  const handleDelete = async (id) => {
    setIsFetching(true);
    let formData = new FormData();
    formData.append("id", id);
    await apiCall(environment.apiUrl + "branches/deleteBranch.php", formData);
    await refetch();
    setIsFetching(false);
  };
  return (
    <div className="space-y-4 bg-white my-6 py-6 px-12 rounded-md shadow-lg">
      {isFetching && <div>Loading....</div>}
      <div className="flex justify-between">
        <h2 className="text-lg font-bold text-blue-950">
          <i class="fa-solid fa-code-branch"></i> All Branches
        </h2>
      </div>

      <div className="text-gray-800 gap-y-3 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-4 px-3">Branch ID</th>
              <th className="py-4">Branch Name</th>
              <th className="py-4">Branch Address</th>
              <th className="py-4">Branch Image</th>
              <th className="py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading}
            {data &&
              data.map((branch) => (
                <tr key="">
                  <td className="text-center py-4">{branch.branch_id}</td>
                  <td className="text-center py-4">{branch.branch_name}</td>
                  <td className="text-center py-4">{branch.branch_address}</td>
                  <td className="text-center py-4">
                    {branch.branch_image && <img className="w-12 h-12 object-cover rounded-full mx-auto" src={environment.imageUrl + branch.branch_image} alt="Branch Image" />}
                    {!branch.branch_image && <i className="fa-solid fa-tree-city"></i>}
                  </td>

                  <td className="text-center py-4">
                    <Link href={"/dashboard/rooms/edit-room/" + branch.branch_id}>
                      <i className="fa-solid fa-pen-to-square pr-2 text-green-600"></i>
                    </Link>
                    | <i className="fa-solid fa-trash pl-2 text-red-600" onClick={() => handleDelete(branch.branch_id)}></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewBranch;
