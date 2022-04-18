import React from 'react'
import { Navigate } from "react-router-dom"
import { ACCOUNT_DATA } from "../env/dev";

export const PublicRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem(ACCOUNT_DATA));
    
    if(!user) return children;

    return user.accessToken
                ? <Navigate to='/home' />
                : children
}
