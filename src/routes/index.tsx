import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import App from "../App";
import Login from "../page/Login";
import NotFound from "../page/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },

  // not found page
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default routes;
