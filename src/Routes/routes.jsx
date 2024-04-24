import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/HOme/Home";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
        },
  ]);



export default routes;