import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Services/Services/Services";
import About from "../../Pages/About/About/About";
import AllServices from "../../Pages/Services/AllServices";
import SingleService from "../../Pages/Services/Services/SingleService";
import Edit from "../../Pages/Services/Services/Edit";

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
      {
        path: "/service/:id",
        element: <SingleService />,
        loader: async ({ params }) =>
          fetch(`http://localhost:3000/recipes/${params.id}`),
      },
      {
        path: "/service-edit/:id",
        element: <Edit />,
        loader: async ({ params }) =>
          fetch(`http://localhost:3000/recipes/${params.id}`),
      },
    ],
  },
]);
