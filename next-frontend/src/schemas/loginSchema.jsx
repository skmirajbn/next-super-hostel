import * as Yup from "yup";
const loginSchema = Yup.object({
  username: Yup.string().min(2).max(25).required("Please enter your username"),
  password: Yup.string().min(6).required("Please enter your password"),
});
export default loginSchema;
