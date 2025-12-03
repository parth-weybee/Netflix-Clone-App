import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Home from "./Home";
import Auth from "./Auth";

const Body = () => {
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/browse",
        element: <Browse/>
    },
    {
      path: "/auth",
      element: <Auth/>
    }
])

export default Body;