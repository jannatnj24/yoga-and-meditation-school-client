import React, { useContext } from 'react';
import { AuthContext } from '../Components/Providers/AuthProvider';
import UseAdmin from '../Components/Hooks/UseAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = () => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress bg-green-400 w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;