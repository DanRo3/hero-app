import { useContext } from "react"
import { AuthContext } from "../auth/authContext"
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {
    
    const {user} = useContext(AuthContext);
    const { pathname, search } = useLocation();
    
    localStorage.setItem('lastPath', pathname + search );

    return user.logged
        ?children
        :<Navigate to='/login'/>
}

export default PrivateRoute
