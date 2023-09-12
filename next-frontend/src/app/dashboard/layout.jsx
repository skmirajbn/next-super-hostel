"use client";
import useIsLoggedIn from "@/hooks/useIsLoggedIn";
import Sidebar from "./sidebar";
import { useEffect } from "react";
import logOut from "@/hooks/logout";
import { useRouter } from "next/navigation";

export default function Dashboard({ children }) {
  const router = useRouter();
  const { isLoggedIn } = useIsLoggedIn();
  useEffect(() => {
    if (isLoggedIn == false) {
      router.push("/login");
      logOut();
    }
    const handleStorageChange = (event) => {
      if (event.key === "token") {
        router.push("/login");
        logOut();
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [isLoggedIn]);
  return (
    <div>
      <div className="mx-6 flex py-10 space-x-12">
        <div className="xl:w-1/5 w-1/3 ">
          <Sidebar />
        </div>
        <div className="xl:w-4/5 w-2/3">{children}</div>
      </div>
    </div>
  );
}
