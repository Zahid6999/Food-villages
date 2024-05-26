import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Services/Services/Services";
import About from "../../Pages/About/About/About";
import AllServices from "../../Pages/Services/AllServices";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/all-services",
        element: <AllServices />,
      },
    ],
  },
]);
