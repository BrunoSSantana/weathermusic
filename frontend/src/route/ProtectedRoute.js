import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({
    isAuth,
    component: Component,
    ...rest
}) {

    useEffect(()=>{
        
    },[])

    return (
        <Route
            {...rest}
            render={() => {
                if (localStorage.getItem("isAuthenticated") === 'true') {
                    return <Component />;
                } else {
                    return (
                        <Redirect to="/login" />
                    );
                }
            }}
        />
    );
}