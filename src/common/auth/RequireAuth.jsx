import { Navigate } from "react-router-dom";

const RequireAuth = ({children}) => {

    if(!localStorage.getItem("token")){
        return <Navigate to={"/login"}/>
    }else{
        return children; 
    }
}

export default RequireAuth