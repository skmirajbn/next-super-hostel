/* eslint-disable react/no-unescaped-entities */
"use client";

import environment from "@/environment/environment";
import getDataApi from "@/hooks/getDataApi";
import useApiCall from "@/hooks/useApiCall";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";

function AddBed({ params }) {
  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["viewRoom"],
    queryFn: () => getDataApi(environment.apiUrl + "rooms/getAllRooms.php", {}),
  });

  const {
    data: dataBedType,
    isLoading: isBedTypeLoading,
    error: bedTypeError,
  } = useQuery({
    queryKey: ["bedType"],
    queryFn: () => getDataApi(environment.apiUrl + "bedType/getAllBedType.php", {}),
  });

  let id = params.id;
  let fromIdData = new FormData();
  fromIdData.append("id", id);
  const { data: dataSingleBed, isSingleBedLoading } = useQuery({
    queryKey: ["singleBed", params.id],
    queryFn: () => getDataApi(environment.apiUrl + "beds/getSingleBed.php", fromIdData),
  });
  const { resData, apiCall } = useApiCall();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      roomId: dataSingleBed?.room_id,
      bedTypeId: dataSingleBed?.bed_type_id,
      bedCode: dataSingleBed?.bed_code,
    },
    enableReinitialize: true,
    onSubmit: async (values, action) => {
      let url = environment.apiUrl + "beds/updateBed.php";
      console.log(values);
      let data = new FormData();
      Object.keys(values).forEach((key) => {
        data.append(key, values[key]);
      });
      data.append("id", params.id);
      await apiCall(url, data);
      console.log(data);
      console.log(resData);
      action.resetForm();
    },
  });

  return (
    <div className="text-gray-700 space-y-6 lg:px-20">
      <h3 className="text-2xl font-medium">
        Update Bed <i className="fa-solid fa-person-shelter"></i>
      </h3>
      <form className="space-y-10" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <label className="text-lg">Room:</label>
            {touched.roomId && <div className="text-red-600 italic">{errors.roomId}</div>}
            <select className="text-lg border-2 border-blue-200 py-2 rounded-md px-2" name="roomId" onChange={handleChange} onBlur={handleBlur} value={values.roomId}>
              <option value="">Select Room</option>
              {data?.map((room) => (
                <option value={room.room_id} key={room.room_id}>
                  {room.room_code}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg">Bed Type:</label>
            {touched.bedTypeId && <div className="text-red-600 italic">{errors.bedTypeId}</div>}
            <select className="text-lg border-2 border-blue-200 py-2 rounded-md px-2" name="bedTypeId" onChange={handleChange} onBlur={handleBlur} value={values.bedTypeId}>
              <option value="">Select Bed Type</option>
              {dataBedType &&
                dataBedType.map((type) => (
                  <option key={type.bed_type_id} value={type.bed_type_id}>
                    {type.bed_type_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg">Bed Code (ID) :</label>
            {touched.bedCode && <div className="text-red-600 italic">{errors.bedCode}</div>}
            <input className="border-2 border-blue-200 px-2 rounded-md py-2" style={errors.bedCode && touched.bedCode && { border: "1px solid red" }} type="text" placeholder="Enter Bed Code" name="bedCode" onChange={handleChange} onBlur={handleBlur} value={values.bedCode} />
          </div>
        </div>
        <h2 className="text-center text-2xl text-green-700"> </h2>
        <h2 className="text-center text-2xl text-green-700"></h2>
        <button type="submit" className="block mx-auto bg-blue-500 text-white py-2 px-4 rounded-md">
          <i class="fa-solid fa-pen-to-square"></i> Update Room
        </button>
        {isSubmitting && <h3 className="text-green-600 text-center">Submitting...</h3>}
        <h3 className="text-green-600 text-center">{resData}</h3>
      </form>
    </div>
  );
}

export default AddBed;
