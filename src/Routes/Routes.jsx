import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PublicDashboard from "../Pages/PublicDashboard";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "register",
      element: <SignUp></SignUp>,
    },
    {
      path: "/dashboard",
      element: <PublicDashboard></PublicDashboard>,
    },
  ]);

  export default router