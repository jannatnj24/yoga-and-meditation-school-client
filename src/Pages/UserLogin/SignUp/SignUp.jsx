import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { AuthContext } from '../../../Components/Providers/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const [error, setError] = useState('');

    const { createUser,profileUpdate } = useContext(AuthContext);
    const HandelSignUP = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        const image = event.target.image.files[0]
        const formData = new FormData()
        formData.append('image', image)
    
        const url = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMG_KEY
        }`
        fetch(url, {
          method: 'POST',
          body: formData,
        })
          .then(res => res.json())
          .then(imageData => {
            const imageUrl = imageData.data.display_url
    
            
        createUser(email, password)
            .then(result => {


                const createdUser = result.user;
                console.log(createdUser);
                profileUpdate(name, imageUrl)
                .then(() => {
                    const saveUser = { name: name, email:email }
                    fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                form.reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'User created successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/');
                            }
                    })
                    
                    .catch(error => console.log(error))
            })
            })
        })
    }

    return (
        <div>
            {/* <Helmet>
                <title>Disney-World | signUp</title>
            </Helmet> */}
            <div className="hero min-h-screen  bg-slate-100">
                <div className="hero-content ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-200">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold"> Please Sign Up</h1>
                            <form onSubmit={HandelSignUP}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                </div>
                                <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder=" Enter email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-blue-400 hover:bg-rose-200 text-black" type="submit" value="Create Account" />
                                </div>
                            </form>
                            <p className='my-4 text-center'> Already Have an Account? <Link className='text-fuchsia-600 font-bold' to="/login">Login</Link> </p>
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

export default SignUp;