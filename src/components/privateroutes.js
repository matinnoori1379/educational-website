import { Navigate } from "react-router-dom"
import { islogin } from "../utils"

function Privateroutes ({children}){


    return(
        <>
        {islogin() ? children : <Navigate to="/login"/>}
        </>
    )
}

export default Privateroutes