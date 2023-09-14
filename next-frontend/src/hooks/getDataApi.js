import axios from "axios";

const getDataApi = async (url, formData) => {
  let token = null;
  if (localStorage.getItem("token") != "" && localStorage.getItem("token") != null) {
    token = localStorage.getItem("token");
  }
  let headers = {
    token: token,
  };
  console.log("api is calling");
  return await axios.post(url, formData, { headers }).then((response) => {
    console.log(response.data);
    return response.data;
  });
};
export default getDataApi;
