import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div>
      <div className="mx-6 flex py-10 space-x-12">
        <div className="xl:w-1/5 w-1/3 ">
          <Sidebar />
        </div>
        <div className="xl:w-4/5 w-2/3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
