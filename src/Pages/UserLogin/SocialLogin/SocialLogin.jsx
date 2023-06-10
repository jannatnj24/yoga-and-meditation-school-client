import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Components/Providers/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result=>{
            const user=result.user;
            Swal.fire('Hey', 'Login successful', 'success');
             navigate(from,{replace :true});
            
          })
          .catch(error=>{
            console.log(error.message)
          })
        }
    
   
    return (
       
    );
};

export default SocialLogin;