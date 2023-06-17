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
            const storeUser = { name: user.displayName, email: user.email }
                        fetch('https://yoga-and-meditation-school-server-tau.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(storeUser)
                        })
                            .then(res => res.json())
                            .then(() => {
                                navigate(from, { replace: true });
                            })
                      })
                    }
   
    return (
        <div className='mb-4'>  
               <button onClick={handleGoogleSignIn} className="btn gap-2 bg-purple-400 text-black w-full mb-4"  ><FaGoogle></FaGoogle>Google</button>
                
   </div>
    );
};

export default SocialLogin;