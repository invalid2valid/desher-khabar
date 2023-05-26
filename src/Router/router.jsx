import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Layout/Home/Home";
import RecipesMain from "../Layout/Home/RecipeSection/RecipesMain";
import Blog from "../Layout/Home/Blogs/Blog";
import Error from "../Layout/Home/Error";
import Login from "../Layout/Home/Login/Login";
import Registation from "../Layout/Home/Login/Registation";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <RecipesMain></RecipesMain>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registation></Registation>,
      },
    ],
  },
]);

export default router;
