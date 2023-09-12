import * as Yup from "yup";
const phoneRegex = /^(?:\+?8801|01)[3456789]\d{8}$/;
const nidRegex = /^[0-9]{13}$|^[0-9]{17}$/;
const userAddSchema = Yup.object({
  name: Yup.string().min(2, "name must me 2 letters").max(30, "name must max 30 letters").required("Please enter your name"),
  username: Yup.string().min(2).max(12).required("Please enter your username"),
  email: Yup.string().email("Invalid Email Address").required("Please enter your username"),
  phone: Yup.string().matches(phoneRegex, "Phone number Invalid").required("Please Enter phone number"),
  password: Yup.string().min(6, "Password must at least 6 characters").required("Password is Required"),
  nid: Yup.string().matches(nidRegex, "NID must be 13 Digits or 17 Digits").required("Please Enter you nid"),
  role: Yup.string().required("Please Select role"),
  image: Yup.mixed()
    .required("Please Select an image")
    .test("isImage", "File must be jpg or png or webp", (filePath) => {
      if (!filePath) return true; // If no file is selected, don't check type
      const acceptedImageTypes = ["jpg", "png", "webp"]; // Add more image types as needed
      console.log("the image type is " + filePath);
      // Split the file path by the backslash and get the last part
      const parts = filePath.split("\\");
      const fileName = parts[parts.length - 1];

      // Split the file name by the dot and get the last part as the extension
      const fileNameParts = fileName.split(".");
      const fileExtension = fileNameParts[fileNameParts.length - 1];
      return acceptedImageTypes.includes(fileExtension);
    }),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});
export default userAddSchema;
