import axios from "axios";
import { useState } from "react";
const useApiCall = () => {
  const [resData, setResData] = useState(null);
  const apiCall = (url, formData) => {
    axios.post(url, formData).then((response) => {
      console.log(response.data);
      setResData(response.data);
    });
  };
  return { resData, apiCall };
};
export default useApiCall;
