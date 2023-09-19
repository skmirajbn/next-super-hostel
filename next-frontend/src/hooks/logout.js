const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("roleId");
};

export default logOut;
