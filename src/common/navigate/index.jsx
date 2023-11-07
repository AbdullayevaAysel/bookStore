import { useRoutes } from "react-router-dom"
import Home from "../../pages/Home"
import SignUp from "../../pages/SignUp"
import RequireAuth from "../auth/RequireAuth"
import Layout from "../../components/Layout/Layout"
import PersonalFiles from "../../pages/PersonalFiles"

function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: <RequireAuth><Layout/></RequireAuth>,
      children: [
        { path: '/personal-files', element: <Home /> },
      ]
    },
    {
      path: "/login",
      element: <SignUp />,  
    },
  ])

  return element
}

export default Routes
