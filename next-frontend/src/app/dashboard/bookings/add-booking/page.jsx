/* eslint-disable react/no-unescaped-entities */
"use client";

import environment from "@/environment/environment";
import getDataApi from "@/hooks/getDataApi";
import useApiCall from "@/hooks/useApiCall";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

function AddBooking() {
  const [userId, setUserId] = useState();
  const [branchRooms, setBranchRooms] = useState();
  const [roomBeds, setRoomBeds] = useState();
  const { data: allPackages } = useQuery({
    queryKey: ["packages"],
    queryFn: () => getDataApi(environment.apiUrl + "packages/getAllPackages.php"),
  });
  const { data: allBranch } = useQuery({
    queryKey: ["branches"],
    queryFn: () => getDataApi(environment.apiUrl + "branches/getAllBranches.php", {}),
  });
  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  }, []);
  const {
    data: dataBedType,
    isLoading: isBedTypeLoading,
    error: bedTypeError,
  } = useQuery({
    queryKey: ["bedType"],
    queryFn: () => getDataApi(environment.apiUrl + "bedType/getAllBedType.php", {}),
  });
  const getDataRooms = async (e) => {
    let branchId = e.target.value;
    let branchIdData = new FormData();
    branchIdData.append("branchId", branchId);
    let rooms = await getDataApi(environment.apiUrl + "rooms/getBranchRooms.php", branchIdData);
    setBranchRooms(rooms);
  };
  const getDataBeds = async (e) => {
    let roomId = e.target.value;

    let roomIdData = new FormData();
    roomIdData.append("roomId", roomId);
    let beds = await getDataApi(environment.apiUrl + "beds/getRoomBeds.php", roomIdData);
    console.log(beds);
    setRoomBeds(beds);
  };

  const { resData, apiCall } = useApiCall();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      branchId: "",
      roomId: "",
      bedId: "",
      packageId: "",
      userId: userId,
    },
    enableReinitialize: true,
    onSubmit: async (values, action) => {
      let url = environment.apiUrl + "bookings/createBooking.php";
      console.log(values);
      let data = new FormData();
      Object.keys(values).forEach((key) => {
        data.append(key, values[key]);
      });
      await apiCall(url, data);
      console.log(data);
      console.log(resData);
      action.resetForm();
    },
  });

  return (
    <div className="text-gray-700 space-y-6 lg:px-20">
      <h3 className="text-2xl font-medium">
        Add Booking <i class="fa-solid fa-bed"></i>
      </h3>
      <form className="space-y-10" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <label className="text-lg">Branch:</label>
            {touched.branchId && <div className="text-red-600 italic">{errors.branchId}</div>}
            <select
              className="text-lg border-2 border-blue-200 py-2 rounded-md px-2"
              name="branchId"
              onChange={(e) => {
                handleChange(e);
                getDataRooms(e);
              }}
              onBlur={handleBlur}
              value={values.branchId}
            >
              <option value="">Select Branch</option>
              {allBranch?.map((branch) => (
                <option value={branch.branch_id} key={branch.branch_id}>
                  {branch.branch_name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg">Rooms:</label>
            {touched.bedTypeId && <div className="text-red-600 italic">{errors.bedTypeId}</div>}
            <select
              className="text-lg border-2 border-blue-200 py-2 rounded-md px-2"
              name="roomId"
              onChange={(e) => {
                handleChange(e);
                getDataBeds(e);
              }}
              onBlur={handleBlur}
              value={values.roomId}
            >
              <option value="">Select Room</option>
              {branchRooms &&
                branchRooms.map((room) => (
                  <option key={room.room_id} value={room.room_id}>
                    {room.room_code}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg">Bed:</label>
            <select className="text-lg border-2 border-blue-200 py-2 rounded-md px-2" name="bedId" onChange={handleChange} onBlur={handleBlur} value={values.bedId}>
              <option value="">Select Room</option>
              {roomBeds &&
                roomBeds.map((bed) => (
                  <option key={bed.bed_id} value={bed.bed_id}>
                    {bed.bed_code}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg">Package:</label>
            <select className="text-lg border-2 border-blue-200 py-2 rounded-md px-2" name="packageId" onChange={handleChange} onBlur={handleBlur} value={values.packageId}>
              <option value="">Select Package</option>
              {allPackages &&
                allPackages.map((spackage) => (
                  <option key={spackage.package_id} value={spackage.package_id}>
                    {spackage.package_name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <h2 className="text-center text-2xl text-green-700"> </h2>
        <h2 className="text-center text-2xl text-green-700"></h2>
        <button type="submit" className="block mx-auto bg-blue-500 text-white py-2 px-4 rounded-md">
          <i className="fa-solid fa-plus"></i> Book
        </button>
        {isSubmitting && <h3 className="text-green-600 text-center">Submitting...</h3>}
        <h3 className="text-green-600 text-center">{resData}</h3>
      </form>
    </div>
  );
}

export default AddBooking;
