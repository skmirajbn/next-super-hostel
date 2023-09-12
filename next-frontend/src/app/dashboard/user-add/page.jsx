"use client";

import environment from "@/environment/environment";
import useApiCall from "@/hooks/useApiCall";
import usePhotoRender from "@/hooks/usePhotoRender";
import userAddSchema from "@/schemas/userAddSchema";
import { useFormik } from "formik";
import Image from "next/image";

function MemberAdd() {
  const { resData, apiCall } = useApiCall();
  const [photoUrl, handlePhotoRender] = usePhotoRender();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      phone: "",
      nid: "",
      password: "",
      confirmPassword: "", 
      role: "", 
      iamge: ""
    },
    validationSchema: userAddSchema,
    onSubmit: async (values, action) => {
      let url = environment.apiUrl + "login.php";
      console.log(values)
      let data = new FormData();
      Object.keys(values).forEach((key) => {
        data.append(key, values[key]);
      });
      await apiCall(url, data);
      action.resetForm();
    },
  });
  return (
    <div className="text-gray-700 space-y-6 lg:px-20">
      <h3 className="text-2xl font-medium">
        User Add <i className="fa-solid fa-user-plus"></i>
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
         {touched.name  && <div className="text-red-600 italic">{errors.name}</div>}
          <label className="text-lg">Name :</label>
          <input className="border-2 border-blue-200 px-2 rounded-md py-2" type="text" placeholder="Enter Your Name" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
        </div>
        <div className="flex flex-col space-y-2">
        {touched.email && <div className="text-red-600 italic">{errors.email}</div>}
          <label className="text-lg">Email :</label>
          <input className="border-2 border-blue-200 px-2 rounded-md py-2" type="text" placeholder="Enter Your Email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
        </div>
        <div className="flex flex-col space-y-2">
        {touched.username && <div className="text-red-600 italic">{errors.username}</div>}
          <label className="text-lg">Username :</label>
          <input className="border-2 border-blue-200 px-2 rounded-md py-2" type="text" placeholder="Enter Username" name="username" onChange={handleChange} onBlur={handleBlur} value={values.username} />
        </div>
        <div className="flex flex-col space-y-2">
        {touched.phone && <div className="text-red-600 italic">{errors.phone}</div>}
          <label className="text-lg">Phone :</label>
          <input className="border-2 border-blue-200 px-2 rounded-md py-2" type="text" placeholder="Enter Phone" name="phone" onChange={handleChange} onBlur={handleBlur} value={values.phone} />
        </div>
        <div className="flex flex-col space-y-2">
        {touched.nid && <div className="text-red-600 italic">{errors.nid}</div>}
          <label className="text-lg">Nid :</label>
          <input className="border-2 border-blue-200 px-2 rounded-md py-2" type="text" placeholder="Enter nid number" name="nid" onChange={handleChange} onBlur={handleBlur} value={values.nid} />
        </div>
        <div className="flex flex-col space-y-2">
        {touched.password && <div className="text-red-600 italic">{errors.password}</div>}
          <label className="text-lg">Password :</label>
          <input className="border-2 border-blue-200 px-2 rounded-md py-2" type="password" placeholder="Enter Password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
        </div>
        <div className="flex flex-col space-y-2">
        {touched.confirmPassword && <div className="text-red-600 italic">{errors.confirmPassword}</div>}
          <label className="text-lg">Password :</label>
          <input className="border-2 border-blue-200 px-2 rounded-md py-2" type="password" placeholder="Enter Password" name="confirmPassword" onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} />
        </div>
        <div className="flex flex-col space-y-2">
        {touched.role && <div className="text-red-600 italic">{errors.role}</div>}
          <label className="text-lg">Role :</label>
          <select className="text-lg" name="role" onChange={handleChange} onBlur={handleBlur} value={values.role} >
            <option disabled selected value="0">
              Select Role
            </option>
            <option value="1">Admin</option>
            <option value="2">Member</option>
            <option value="2">Auditor</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="text-red-600 italic">{errors.image}</div>
          <label className="text-lg">Image :</label>
          <div className="flex">
            <input
              className="py-1 px-2 rounded-md"
              type="file"
              name="image"
              onChange={(e) => {
                handlePhotoRender(e);
                handleChange(e);
              }}
              value={values.image}
            />
            {photoUrl && <img className="w-96 rounded-md mb-6" src={photoUrl} alt="" />}
          </div>
        </div>
        <h2 className="text-center text-2xl text-green-700"> </h2>
        <h2 className="text-center text-2xl text-green-700"></h2>
        <button className="block mx-auto bg-blue-500 text-white py-2 px-4 rounded-md">
          <i className="fa-solid fa-plus"></i> Add User
        </button>
        {isSubmitting && <h3 className="text-green-600 text-center">Submitting...</h3>}
      </form>
    </div>
  );
}

export default MemberAdd;
