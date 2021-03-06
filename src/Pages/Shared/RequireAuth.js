import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();

    //loading use na korle abr signIn oagge e firiye dibe
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/signIn" state={{ from: location }} replace ></Navigate>
    }
    console.log(user);
    return children;
};

export default RequireAuth;