import axios from "axios";
import { useState } from "react";
const useApiCall = () => {
  const [resData, setResData] = useState(null);
  const apiCall = async (url, formData) => {
    await axios.post(url, formData).then((response) => {
      setResData(response.data);
    });
  };
  return { resData, apiCall };
};
export default useApiCall;
