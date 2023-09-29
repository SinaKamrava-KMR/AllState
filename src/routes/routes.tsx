import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../pages/AppLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element:<Login/>
      },
      {
        path: "/signup",
        element:<Signup/>
      },
    ],
  },
]);

export default routes;
