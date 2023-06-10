import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { AuthContext } from '../../../Components/Providers/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [error ,setError]=useState('');
    const{SignIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
  
  
    const from =location.state?.from?.pathname || '/';
  
    const HandelLogin=event=>{
      event.preventDefault();
      const form =event.target;
      const email=form.email.value;
      const password=form.password.value;
      console.log(email,password);
      Swal.fire('Hurrah', ' Login successfully', 'success');
      setError('')
      
  
      
    //   SignIn(email,password)
    //   .then(result => {
      
    //       const LoggedUser = result.user;
    //       console.log(LoggedUser);
    //       form.reset();
    //       navigate(from,{replace :true});
         
    //     })
        .catch(error => {
          console.log(error);
          setError('wrong input please input valid data');
          
        });
    
    }
    
    
    return (
        <div>
            {/* <Helmet>
                <title>Disney-World | login</title>
            </Helmet> */}
            <div className="hero min-h-screen bg--100">
            <div className="hero-content ">
               
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-200">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login Please</h1>
                        <form onSubmit={HandelLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder=" Enter email" className="input input-bordered"  required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-blue-400 hover:bg-rose-200 text-black" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Don't have an account<Link className='text-fuchsia-600  font-bold' to="/signUp">Sign Up</Link> </p>
                        <div>
                        <p className=' text-black  fw-bold'> <small>{error}</small></p>
                        </div>
                        <div>
                            
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;