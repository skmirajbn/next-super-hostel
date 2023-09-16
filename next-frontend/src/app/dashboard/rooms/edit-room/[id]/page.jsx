"use client";

import environment from "@/environment/environment";
import getDataApi from "@/hooks/getDataApi";
import useApiCall from "@/hooks/useApiCall";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import EditRoomLoading from "./editRoomLoading";

function EditRoom({ params }) {
  const router = useRouter();
  const { resData, apiCall } = useApiCall();
  let formData = new FormData();
  formData.append("id", params.id);
  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["EditRoom"],
    queryFn: () => getDataApi(environment.apiUrl + "rooms/getSingleRoom.php", formData),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      roomCode: data?.room_code,
      branchId: data?.branch_id,
      id: params.id,
    },
    enableReinitialize: true,
    onSubmit: async (values, action) => {
      let url = environment.apiUrl + "rooms/updateRoom.php";
      console.log(values);
      let data = new FormData();
      Object.keys(values).forEach((key) => {
        data.append(key, values[key]);
      });
      await apiCall(url, data);
      console.log(data);
      console.log(resData);
      action.resetForm();
      setTimeout(() => {
        router.push("/dashboard/rooms/view-rooms");
      }, 2000);
    },
  });

  return isLoading || isFetching ? (
    <EditRoomLoading />
  ) : (
    <div className="text-gray-700 space-y-6 lg:px-20">
      <h3 className="text-2xl font-medium">
        Update Room <i className="fa-solid fa-person-shelter"></i>
      </h3>
      <form className="space-y-10" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <label className="text-lg">Select Branch</label>
            {touched.branchId && <div className="text-red-600 italic">{errors.branchId}</div>}
            <select className="text-lg" name="branchId" onChange={handleChange} onBlur={handleBlur} value={values.branchId}>
              <option value="">Select Role</option>
              <option value="1">Dhanmondi</option>
              <option value="2">Mohammadpur</option>
              <option value="3">Motijheel</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg">Room Code (ID) :</label>
            {touched.roomCode && <div className="text-red-600 italic">{errors.roomCode}</div>}
            <input className="border-2 border-blue-200 px-2 rounded-md py-2" style={errors.roomCode && touched.roomCode && { border: "1px solid red" }} type="text" placeholder="Enter Your Name" name="roomCode" onChange={handleChange} onBlur={handleBlur} value={values.roomCode} />
          </div>
        </div>
        <h2 className="text-center text-2xl text-green-700"> </h2>
        <h2 className="text-center text-2xl text-green-700"></h2>
        <button type="submit" className="block mx-auto bg-blue-500 text-white py-2 px-4 rounded-md">
          <i className="fa-solid fa-plus"></i> Update Room
        </button>
        {isSubmitting && <h3 className="text-green-600 text-center">Submitting...</h3>}
        <h3 className="text-green-600 text-center">{resData}</h3>
      </form>
    </div>
  );
}

export default EditRoom;
