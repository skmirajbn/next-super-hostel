"use client";
import logOut from "@/hooks/logout";
import useIsLoggedIn from "@/hooks/useIsLoggedIn";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MotionWrapScale from "./../../components/motionWrap/motionWrapScale";
import Sidebar from "./sidebar";

export default function Dashboard({ children }) {
  const router = useRouter();
  const { isLoggedIn } = useIsLoggedIn();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
  });
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
  }, [isLoggedIn, router]);
  return (
    <div>
      <div className="mx-6 flex py-10 space-x-12">
        <div className="xl:w-1/5 w-1/3 ">
          <MotionWrapScale>
            <Sidebar />
          </MotionWrapScale>
        </div>
        <div className="xl:w-4/5 w-2/3">
          <MotionWrapScale>{children}</MotionWrapScale>
        </div>
      </div>
    </div>
  );
}
