import React from 'react';
import { Route, Navigate } from 'react-router-dom'

const PrivateRoute = ({component: Component, isAuthentecated, loading, ...rest}) => {
    return (
        <Route {...rest} render={(props)=> (
            isAuthentecated && !loading ? <Component {...props}/> : <Navigate to='/login'/>
        )} />
    );
};

export default PrivateRoute;
