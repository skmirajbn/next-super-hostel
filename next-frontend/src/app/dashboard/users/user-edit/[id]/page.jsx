/* eslint-disable @next/next/no-img-element */
"use client";

import environment from "@/environment/environment";
import getDataApi from "@/hooks/getDataApi";
import useApiCall from "@/hooks/useApiCall";
import usePhotoRender from "@/hooks/usePhotoRender";
import userAddSchema from "@/schemas/userAddSchema";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import MemberEditLoading from "./loading";

function MemberEdit({ params }) {
  const router = useRouter();
  const formData = new FormData();
  formData.append("id", params.id);
  const {
    data: data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["userEdit", params.id],
    queryFn: () => getDataApi(environment.apiUrl + "users/getSingleUser.php", formData),
  });
  const photoInputRef = useRef();
  const { resData, apiCall } = useApiCall();
  const [photoUrl, setPhotoUrl, handlePhotoRender] = usePhotoRender();

  useEffect(() => {
    console.log("loading is " + isLoading);
    console.log(data);
  }, [isLoading, data]);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      name: data?.user_name,
      email: data?.user_email,
      username: data?.user_username,
      phone: data?.user_phone,
      nid: data?.user_nid,
      password: data?.user_password,
      confirmPassword: data?.user_password,
      role: data?.role_id,
      image: "",
      id: params.id,
    },
    enableReinitialize: true,
    validationSchema: userAddSchema,
    onSubmit: async (values, action) => {
      let url = environment.apiUrl + "users/updateUsers.php";
      console.log(values);
      let data = new FormData();
      Object.keys(values).forEach((key) => {
        data.append(key, values[key]);
      });
      if (photoInputRef != undefined) {
        let file = photoInputRef.current.files[0];
        data.delete("image");
        data.append("image", file);
      }
      await apiCall(url, data);
      setTimeout(() => {
        router.push("/dashboard/user-view");
      }, 1000);
      console.log(data);
      console.log(resData);
    },
  });

  return !isLoading ? (
    <div className="text-gray-700 space-y-6 lg:px-20">
      <h3 className="text-2xl font-medium">
        User Edit <i className="fa-solid fa-user-plus"></i>
      </h3>
      {data && (
        <form className="space-y-10" onSubmit={handleSubmit}>
          <div className="flex space-x-6">
            <div className="w-1/2 space-y-4">
              <div className="flex flex-col space-y-2">
                <label className="text-lg">Name :</label>
                {touched.name && <div className="text-red-600 italic">{errors.name}</div>}
                <input className="border-2 border-blue-200 px-2 rounded-md py-2" style={errors.name && touched.name && { border: "1px solid red" }} type="text" placeholder="Enter Your Name" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-lg">Email :</label>
                {touched.email && <div className="text-red-600 italic">{errors.email}</div>}
                <input className="border-2 border-blue-200 px-2 rounded-md py-2" type="text" style={errors.email && touched.email && { border: "1px solid red" }} placeholder="Enter Your Email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-lg">Username :</label>
                {touched.username && <div className="text-red-600 italic">{errors.username}</div>}
                <input className="border-2 border-blue-200 px-2 rounded-md py-2" style={errors.username && touched.username && { border: "1px solid red" }} type="text" placeholder="Enter Username" name="username" onChange={handleChange} onBlur={handleBlur} value={values.username} />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-lg">Phone :</label>
                {touched.phone && <div className="text-red-600 italic">{errors.phone}</div>}
                <input className="border-2 border-blue-200 px-2 rounded-md py-2" style={errors.phone && touched.phone && { border: "1px solid red" }} type="text" placeholder="Enter Phone" name="phone" onChange={handleChange} onBlur={handleBlur} value={values.phone} />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-lg">Nid :</label>
                {touched.nid && <div className="text-red-600 italic">{errors.nid}</div>}
                <input className="border-2 border-blue-200 px-2 rounded-md py-2" style={errors.nid && touched.nid && { border: "1px solid red" }} type="text" placeholder="Enter nid number" name="nid" onChange={handleChange} onBlur={handleBlur} value={values.nid} />
              </div>
            </div>
            <div className="w-1/2 space-y-4">
              <div className="flex flex-col space-y-2">
                <label className="text-lg">Password :</label>
                {touched.password && <div className="text-red-600 italic">{errors.password}</div>}
                <input className="border-2 border-blue-200 px-2 rounded-md py-2" style={errors.password && touched.password && { border: "1px solid red" }} type="password" placeholder="Enter Password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-lg">Password :</label>
                {touched.confirmPassword && <div className="text-red-600 italic">{errors.confirmPassword}</div>}
                <input className="border-2 border-blue-200 px-2 rounded-md py-2" style={errors.confirmPassword && touched.confirmPassword && { border: "1px solid red" }} type="password" placeholder="Enter Password" name="confirmPassword" onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-lg">Role :</label>
                {touched.role && <div className="text-red-600 italic">{errors.role}</div>}
                <select className="text-lg" name="role" onChange={handleChange} onBlur={handleBlur} value={values.role}>
                  <option value="">Select Role</option>
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
                  />
                  <br />
                  {photoUrl && <img className="w-96 rounded-md mt-6" src={photoUrl} alt="" />}
                  {!photoUrl && <img className="w-96 rounded-md mt-6" src={environment.imageUrl + data.user_photo} alt="" />}
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-center text-2xl text-green-700"> </h2>
          <h2 className="text-center text-2xl text-green-700"></h2>
          <button type="submit" className="block mx-auto bg-blue-500 text-white py-2 px-4 rounded-md">
            <i className="fa-solid fa-plus"></i> Update User
          </button>
          {isSubmitting && <h3 className="text-green-600 text-center">Submitting...</h3>}
          <h3 className="text-green-600 text-center">{resData}</h3>
        </form>
      )}
    </div>
  ) : (
    <MemberEditLoading />
  );
}

export default MemberEdit;
