"use client"
import axios from "axios";
import { useEffect, useState } from "react";
const useIsLoggedIn = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);

  useEffect(()=>{
    if (localStorage.getItem("token") !=null && localStorage.getItem("token")!='') {
      let token = localStorage.getItem("token");
      let data = new FormData();
      data.append("token", token);
      axios.post("http://localhost/Nextjs%20Projects/next-project-idb/server/api/tokenValidation.php", data).then((response) => {
        if (response.data === "invalid") {
          setisLoggedIn(false);
        } else {
          setisLoggedIn(true);
        }
      });
    } else {
      setisLoggedIn(false);
    }
  },[])

  return { isLoggedIn };
};
export default useIsLoggedIn;
