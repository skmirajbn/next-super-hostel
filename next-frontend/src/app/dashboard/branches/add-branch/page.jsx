"use client";

import environment from "@/environment/environment";
import useApiCall from "@/hooks/useApiCall";
import { useFormik } from "formik";
import { useRef, useState } from "react";

function AddBranch() {
  const [imgUrl, setImgUrl] = useState(null);
  const imageInput = useRef();
  const { resData, apiCall } = useApiCall();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      roomCode: "",
      branchId: "",
    },
    onSubmit: async (values, action) => {
      let url = environment.apiUrl + "branches/createBranch.php";
      let data = new FormData();
      Object.keys(values).forEach((key) => {
        data.append(key, values[key]);
      });
      if (imageInput.current.files[0]) {
        data.append("image", imageInput.current.files[0]);
      }
      console.log(data);
      await apiCall(url, data);
      console.log(data);
      console.log(resData);
      action.resetForm();
      // action.resetForm();
      // setPhotoUrl('')
    },
  });
  const handlePhotoChange = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      setImgUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="text-gray-700 space-y-6 lg:px-20">
      <h3 className="text-2xl font-medium">
        Branch Add <i className="fa-solid fa-code-branch"></i>
      </h3>
      <form className="space-y-10" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <label className="text-lg">Branch Name :</label>
            {touched.branchName && <div className="text-red-600 italic">{errors.branchName}</div>}
            <input className="border-2 border-blue-200 px-2 rounded-md py-2" style={errors.branchName && touched.branchName && { border: "1px solid red" }} type="text" placeholder="Enter Branch Name" name="branchName" onChange={handleChange} onBlur={handleBlur} value={values.branchName} />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg">Branch Address:</label>
            {touched.branchAddress && <div className="text-red-600 italic">{errors.branchAddress}</div>}
            <input className="border-2 border-blue-200 px-2 rounded-md py-2" style={errors.branchAddress && touched.branchAddress && { border: "1px solid red" }} type="text" placeholder="Enter Branch Address" name="branchAddress" onChange={handleChange} onBlur={handleBlur} value={values.branchAddress} />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg">Branch Image:</label>
            <input className="border-2 border-blue-200 px-2 rounded-md py-2" type="file" placeholder="Enter Branch Address" name="roomCode" onChange={handlePhotoChange} ref={imageInput} />
            <img className="w-40 rounded-md" src={imgUrl} alt="" />
          </div>
        </div>
        <h2 className="text-center text-2xl text-green-700"> </h2>
        <h2 className="text-center text-2xl text-green-700"></h2>
        <button type="submit" className="block mx-auto bg-blue-500 text-white py-2 px-4 rounded-md">
          <i className="fa-solid fa-plus"></i> Add Branch
        </button>
        {isSubmitting && <h3 className="text-green-600 text-center">Submitting...</h3>}
        <h3 className="text-green-600 text-center">{resData}</h3>
      </form>
    </div>
  );
}

export default AddBranch;
