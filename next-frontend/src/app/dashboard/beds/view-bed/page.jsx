/* eslint-disable @next/next/no-img-element */
"use client";
import environment from "@/environment/environment";
import getDataApi from "@/hooks/getDataApi";
import useApiCall from "@/hooks/useApiCall";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
import RoomsLoading from "./bedLoading";
function ViewBed() {
  // const { data, isLoading } = useQuery("userView", () => getDataApi(environment.apiUrl + "users/getUsers.php", {}));
  const { resData, apiCall } = useApiCall();
  const [isFetching, setIsFetching] = useState(false);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["userView"],
    queryFn: () => getDataApi(environment.apiUrl + "beds/getAllBeds.php", {}),
  });
  useEffect(() => {
    console.log("loading is " + isLoading);
    // apiCall(environment.apiUrl + "users/getUsers.php", {});
  }, [data, isLoading]);
  const handleDelete = async (id) => {
    setIsFetching(true);
    let formData = new FormData();
    formData.append("id", id);
    await apiCall(environment.apiUrl + "rooms/deleteRoom.php", formData);
    await refetch();
    setIsFetching(false);
  };
  return (
    <div className="space-y-4 bg-white my-6 py-6 px-12 rounded-md shadow-lg">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold text-blue-950">
          <i class="fa-solid fa-bed"></i> All Beds
        </h2>
      </div>

      <div className="text-gray-800 gap-y-3 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-4 px-3">ID</th>
              <th className="py-4">Bed code</th>
              <th className="py-4">Bed Type</th>
              <th className="py-4">Branch Name</th>
              <th className="py-4">Room Code</th>
              <th className="py-4">Status</th>
              <th className="py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading || (isFetching && <RoomsLoading />)}
            {data &&
              !isFetching &&
              data.map((bed) => (
                <tr key="">
                  <td className="text-center py-4">{bed.bed_id}</td>
                  <td className="text-center py-4">{bed.bed_code}</td>
                  <td className="text-center py-4">{bed.bed_type_name}</td>
                  <td className="text-center py-4">{bed.branch_name}</td>
                  <td className="text-center py-4">{bed.room_code}</td>
                  <td className="text-center py-4 bg-green-500 text-white" style={bed.is_bed_booked == 1 ? { backgroundColor: "red" } : null}>
                    {bed.is_bed_booked == 0 ? "Available" : "Booked"}
                  </td>

                  <td className="text-center py-4">
                    <Link href={"/dashboard/beds/edit-bed/" + bed.bed_id}>
                      <i className="fa-solid fa-pen-to-square pr-2 text-green-600"></i>
                    </Link>
                    | <i className="fa-solid fa-trash pl-2 text-red-600" onClick={() => handleDelete(bed.bed_id)}></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewBed;
