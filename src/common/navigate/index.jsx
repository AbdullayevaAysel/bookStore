import { useRoutes } from "react-router-dom"
import Home from "../../pages/Home"
import SignUp from "../../pages/SignUp"

function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <SignUp />,  
    },
  ])

  return element
}

export default Routes
