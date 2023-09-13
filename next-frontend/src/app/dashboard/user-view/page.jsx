"use client";
import { isLoggedIn } from "@/hooks/logout";
import MemberViewSkeleton from "./memberViewSkeleton";
import useIsLoggedIn from "@/hooks/useIsLoggedIn";
import useApiCall from "@/hooks/useApiCall";
import { Suspense, useEffect } from "react";
import environment from "@/environment/environment";
import axios from "axios";

async function MemberView() {
  const { resData, apiCall } = useApiCall();
  useEffect(() => {
    apiCall(environment.apiUrl + "users/getUsers.php", {});
  }, []);
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
              <th className="py-4">Phone</th>
              <th className="py-4">Image</th>
              <th className="py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {resData === null ? (
              <MemberViewSkeleton count={10} />
            ) : (
              resData &&
              resData.map((user) => (
                <tr id={user.user_id}>
                  <td className="text-center py-4">{user.user_id}</td>
                  <td className="text-center py-4">{user.user_name}</td>
                  <td className="text-center py-4">{user.user_username}</td>
                  <td className="text-center py-4">{user.user_email}</td>
                  <td className="text-center py-4">{user.user_role}</td>
                  <td className="text-center py-4">{user.user_phone}</td>
                  <td className="text-center py-4">
                    <img className="w-12 h-12 object-cover rounded-full mx-auto" src={environment.imageUrl + user.user_photo} alt="" />
                  </td>
                  <td className="text-center py-4">
                    <a>
                      <i className="fa-solid fa-pen-to-square pr-2 text-green-600"></i>
                    </a>{" "}
                    | <i className="fa-solid fa-trash pl-2 text-red-600"></i>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MemberView;
