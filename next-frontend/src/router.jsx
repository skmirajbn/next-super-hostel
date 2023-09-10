import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import BookBranch from "./pages/Bookings/BookBranch";
import BookSeatForm from "./pages/Bookings/BookSeatForm";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardSummary from "./pages/Dashboard/DashboardSummary/DashboardSummary";
import MemberAdd from "./pages/Dashboard/Members/MemberAdd";
import MemberView from "./pages/Dashboard/Members/MemberView";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Page404 from "./pages/Page404";
import CreateAccount from "./pages/create-account/CreateAccount";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "create-account",
        element: <CreateAccount />,
      },
      {
        path: "branch",
        element: <BookBranch />,
      },
      {
        path: "book-seat",
        children: [
          {
            path: ":id",
            element: <BookSeatForm />,
          },
        ],
      },

      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <DashboardSummary />,
          },
          {
            path: "member-add",
            element: <MemberAdd />,
          },
          {
            path: "member-view",
            element: <MemberView />,
          },
        ],
      },
    ],
  },
]);

export default router;
