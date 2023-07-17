import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import App from "../App";
import Login from "../page/Login";
import NotFound from "../page/NotFound";
import SignUp from "../page/Signup";
import AllBooks from "../page/AllBooks";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/allbooks",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/signin",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
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
