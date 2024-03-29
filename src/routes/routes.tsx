import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../pages/AppLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Post from "../pages/Post";
import NewPost from "../pages/NewPost";
import PrivateRoute from "../components/protectedRoute/PrivateRoute";

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
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/newpost",
        element: (
          <PrivateRoute>
            <NewPost />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
