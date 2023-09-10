/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import useApiCall from "../../hooks/useApiCall";
import Button from "./../../components/Button";
import MotionWrapScale from "./../../components/motionWrap/MotionWrapScale";
import environment from "./../../environment/environment";
import loginSchema from "./../../schemas/loginSchema";

export default function Login() {
  const { resData, apiCall } = useApiCall();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, action) => {
      let url = environment.apiUrl + "login.php";
      let data = new FormData();
      Object.keys(values).forEach((key) => {
        data.append(key, values[key]);
      });
      apiCall(url, data);
      console.log(resData);
      action.resetForm();
    },
  });

  return (
    <div className="bg-blue-300">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <section id="web-job-category" className="">
            <MotionWrapScale>
              <div className=" py-20 px-12 rounded-md  flex justify-center items-center text-gray-800">
                <div className=" w-96 bg-blue-100 rounded-lg py-10 px-10 space-y-6 shadow-xl">
                  <h3 className="text-2xl text-center font-bold ">Sign In</h3>

                  <div className="space-y-2">
                    <h4 className="text-md">Username</h4>
                    <div className="text-red-600 italic">{touched.username && errors?.username}</div>
                    <input className="w-full h-10 rounded-md px-4 border border-green-900 bg-white" type="text" placeholder="Enter Your Username" name="username" onChange={handleChange} onBlur={handleBlur} value={values.username} />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-md">Password</h4>
                    <div className="text-red-600 italic">{touched.password && errors?.password}</div>
                    <input className="w-full h-10 rounded-md px-4 border border-green-900 bg-white" type="password" placeholder="Enter Your Password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                  </div>

                  <div className="">
                    <Button type="submit" className="mx-auto block bg-blue-500 px-6 py-1 rounded-full text-white">
                      Login
                    </Button>
                  </div>

                  <div className="flex justify-between items-center">
                    <h3 className="text-gray-600">Forgot Password?</h3>

                    <Link to="/create-account" className="bg-orange-600 text-white px-4 py-1 rounded-full">
                      Create Account
                    </Link>
                  </div>
                </div>
              </div>
            </MotionWrapScale>
          </section>
        </form>
      </div>
    </div>
  );
}
