import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import Header from "./Header"

const Body = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router}/>
    </>
  )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/browse",
        element: <Browse/>
    }
])

export default Body;