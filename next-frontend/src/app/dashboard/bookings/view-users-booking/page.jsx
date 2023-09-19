/* eslint-disable @next/next/no-img-element */
"use client";
import environment from "@/environment/environment";
import getDataApi from "@/hooks/getDataApi";
import useApiCall from "@/hooks/useApiCall";
import Link from "next/link";
import { useEffect, useState } from "react";
function ViewRooms() {
  const [data, setData] = useState();
  const [userIdData, setUserIdData] = useState();
  useEffect(() => {
    let userId = localStorage.getItem("userId");
    let formData = new FormData();
    formData.append("userId", userId);
    let getResData = async () => {
      let resData = await getDataApi(environment.apiUrl + "bookings/getSingleUserBookings.php", formData);
      setData(resData);
    };
    getResData();
  }, []);
  console.log(data);
  // const { data, isLoading } = useQuery("userView", () => getDataApi(environment.apiUrl + "users/getUsers.php", {}));
  const { resData, apiCall } = useApiCall();
  const [isFetching, setIsFetching] = useState(false);
  // const { data, isLoading, refetch } = useQuery({
  //   queryKey: ["userBookings"],
  //   queryFn: () => getDataApi(environment.apiUrl + "bookings/getSingleUserBookings.php", userIdData),
  // });
  const handleDelete = async (id) => {
    setIsFetching(true);
    let formData = new FormData();
    formData.append("id", id);
    await apiCall(environment.apiUrl + "rooms/deleteRoom.php", formData);
    setIsFetching(false);
  };
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
              <th className="py-4 px-3">Booking ID</th>
              <th className="py-4">Branch Name</th>
              <th className="py-4">Room Code</th>
              <th className="py-4">Bed Code</th>
              <th className="py-4">Package</th>
              <th className="py-4">Bed Type</th>
              <th className="py-4">Status</th>
              <th className="py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              !isFetching &&
              data.map((bookings) => (
                <tr key="">
                  <td className="text-center py-4">{bookings.booking_id}</td>
                  <td className="text-center py-4">{bookings.branch_name}</td>
                  <td className="text-center py-4">{bookings.room_code}</td>
                  <td className="text-center py-4">{bookings.bed_code}</td>
                  <td className="text-center py-4">{bookings.package_name}</td>
                  <td className="text-center py-4">{bookings.bed_type_name}</td>
                  <td className="text-center py-4">{bookings.status == 0 ? "Pending" : "Approved"}</td>

                  <td className="text-center py-4">
                    <Link href={"/dashboard/rooms/edit-room/" + bookings.booking_id}>
                      <i className="fa-solid fa-pen-to-square pr-2 text-green-600"></i>
                    </Link>
                    | <i className="fa-solid fa-trash pl-2 text-red-600" onClick={() => handleDelete(bookings.booking_id)}></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewRooms;
