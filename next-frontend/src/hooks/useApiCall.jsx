import axios from "axios";
import { useState } from "react";
const useApiCall = () => {
  const [resData, setResData] = useState(null);
  const apiCall = async (url, formData) => {
    let token = null;
    if (localStorage.getItem("token") != "" && localStorage.getItem("token") != null) {
      token = localStorage.getItem("token");
    }
    await axios.post(url, formData, { token: token }).then((response) => {
      setResData(response.data);
    });
  };
  return { resData, apiCall };
};
export default useApiCall;
