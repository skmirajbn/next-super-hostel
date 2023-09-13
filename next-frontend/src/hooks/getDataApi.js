import axios from "axios";

const getDataApi = (url, formData) => {
  let token = null;
  if (localStorage.getItem("token") != "" && localStorage.getItem("token") != null) {
    token = localStorage.getItem("token");
  }
  let headers = {
    token: token,
  };
  console.log("api is calling");
  return axios.post(url, formData, { headers }).then((response) => {
    return response.data;
  });
};
export default getDataApi;
