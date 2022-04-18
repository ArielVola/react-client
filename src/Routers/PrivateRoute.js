import { Navigate } from "react-router-dom"
import { ACCOUNT_DATA } from "../env/dev";


export const PrivateRoute = ({ children }) => {

    const user = JSON.parse(localStorage.getItem(ACCOUNT_DATA));
    
    if(!user) return <Navigate to='/auth/login' />

    return user.accessToken
                ? children
                : <Navigate to='/auth/login' />
}