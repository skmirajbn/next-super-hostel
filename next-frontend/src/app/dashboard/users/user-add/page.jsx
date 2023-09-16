"use client";

import environment from "@/environment/environment";
import useApiCall from "@/hooks/useApiCall";
import usePhotoRender from "@/hooks/usePhotoRender";
import userAddSchema from "@/schemas/userAddSchema";
import { useFormik } from "formik";
import Image from "next/image";
import { useRef } from "react";

function MemberAdd() {
  const photoInputRef = useRef();
  const { resData, apiCall } = useApiCall();
  const [photoUrl,setPhotoUrl, handlePhotoRender] = usePhotoRender();
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
      image: ""
    },
    validationSchema: userAddSchema,
    onSubmit: async (values, action) => {
      let url = environment.apiUrl + "users/createUser.php";
      console.log(values)
      let data = new FormData();
      Object.keys(values).forEach((key) => {
        data.append(key, values[key]);
      });
      if(photoInputRef!=undefined){
        let file = photoInputRef.current.files[0];
        data.delete("image")
        data.append("image", file)
      }
      await apiCall(url, data);
      console.log(data)
      console.log(resData);
      // action.resetForm();
      // setPhotoUrl('')
    },
  });
 
  return (
    <div className="text-gray-700 space-y-6 lg:px-20">
      <h3 className="text-2xl font-medium">
        User Add <i className="fa-solid fa-user-plus"></i>
      </h3>
      <form className="space-y-10" onSubmit={handleSubmit}>
        <div className="flex space-x-6">
          <div className="w-1/2 space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Name :</label>
             {touched.name  && <div className="text-red-600 italic">{errors.name}</div>}
              <input className="border-2 border-blue-200 px-2 rounded-md py-2" style={(errors.name && touched.name) && {border: "1px solid red"}} type="text" placeholder="Enter Your Name" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Email :</label>
            {touched.email && <div className="text-red-600 italic">{errors.email}</div>}
              <input className="border-2 border-blue-200 px-2 rounded-md py-2" type="text" style={(errors.email && touched.email) && {border: "1px solid red"}} placeholder="Enter Your Email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Username :</label>
            {touched.username && <div className="text-red-600 italic">{errors.username}</div>}
              <input className="border-2 border-blue-200 px-2 rounded-md py-2" style={(errors.username && touched.username) && {border: "1px solid red"}} type="text" placeholder="Enter Username" name="username" onChange={handleChange} onBlur={handleBlur} value={values.username} />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Phone :</label>
            {touched.phone && <div className="text-red-600 italic">{errors.phone}</div>}
              <input className="border-2 border-blue-200 px-2 rounded-md py-2" style={(errors.phone && touched.phone) && {border: "1px solid red"}} type="text" placeholder="Enter Phone" name="phone" onChange={handleChange} onBlur={handleBlur} value={values.phone} />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Nid :</label>
            {touched.nid && <div className="text-red-600 italic">{errors.nid}</div>}
              <input className="border-2 border-blue-200 px-2 rounded-md py-2" style={(errors.nid && touched.nid) && {border: "1px solid red"}} type="text" placeholder="Enter nid number" name="nid" onChange={handleChange} onBlur={handleBlur} value={values.nid} />
            </div>
          </div>
          <div className="w-1/2 space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Password :</label>
            {touched.password && <div className="text-red-600 italic">{errors.password}</div>}
              <input className="border-2 border-blue-200 px-2 rounded-md py-2" style={(errors.password && touched.password) && {border: "1px solid red"}} type="password" placeholder="Enter Password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Password :</label>
            {touched.confirmPassword && <div className="text-red-600 italic">{errors.confirmPassword}</div>}
              <input className="border-2 border-blue-200 px-2 rounded-md py-2" style={(errors.confirmPassword && touched.confirmPassword) && {border: "1px solid red"}} type="password" placeholder="Enter Password" name="confirmPassword" onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Role :</label>
            {touched.role && <div className="text-red-600 italic">{errors.role}</div>}
              <select className="text-lg" name="role" onChange={handleChange} onBlur={handleBlur} value={values.role} >
                <option selected value="">
                  Select Role
                </option>
                <option value="1">Admin</option>
                <option value="2">Member</option>
                <option value="2">Auditor</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Image :</label>
              <div className="text-red-600 italic">{errors.image}</div>
              <div className="">
                <input
                ref={photoInputRef}
                  className="py-1 px-2 rounded-md"
                  type="file"
                  name="image"
                  onChange={(e) => {
                    handlePhotoRender(e);
                    handleChange(e);
                  }}
                  value={values.image}
                /><br/>
                {photoUrl && <img className="w-96 rounded-md mt-6" src={photoUrl} alt="" />}
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-center text-2xl text-green-700"> </h2>
        <h2 className="text-center text-2xl text-green-700"></h2>
        <button type="submit" className="block mx-auto bg-blue-500 text-white py-2 px-4 rounded-md">
          <i className="fa-solid fa-plus"></i> Add User
        </button>
        {isSubmitting && <h3 className="text-green-600 text-center">Submitting...</h3>}
        <h3 className="text-green-600 text-center">{resData}</h3>
      </form>
    </div>
  );
}

export default MemberAdd;
