import { useQuery } from '@tanstack/react-query';
import { updateCurrentUser, updateProfile } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contextAPI/userAPI/UserContext';
import auth from '../firebase/firebase.init';

const SingUp = () => {
    const [err, setErr] = useState(null);
    const { singUp } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handelLoginForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = { name, email, photoURL, admin: false }


        singUp(email, password)
            .then(({ user }) => {
                updateProfile(auth.currentUser, {
                    displayName: `${name}`, photoURL: `${photoURL}`
                }).then(() => {
                    navigate(from, { replace: true });
                    fetch('https://grind-magic-server-alamin0561464977.vercel.app/user', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        })

                }).catch((error) => {
                    setErr(error.message)
                });

            })
            .catch(error => setErr(error.message));
    }
    return (
        <div className=' lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 my-8'>
            <div>
                <img className=' rounded-xl shadow-xl mx-auto h-full' src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif" alt="" />
            </div>
            <form onSubmit={handelLoginForm} className=' shadow-xl p-4 text-center'>
                <div>
                    <h1 className=' font-bold text-3xl'>Sing Up</h1>
                </div>
                <div className="form-control w-full mt-5 mb-2 px-5">
                    <label className="label">
                        <span className="label-text font-bold">Your Name</span>
                    </label>
                    <input name='name' required type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mt-5 mb-2 px-5">
                    <label className="label">
                        <span className="label-text font-bold">Your Photo URL</span>
                    </label>
                    <input name='photoURL' required type="url" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mt-5 mb-2 px-5">
                    <label className="label">
                        <span className="label-text font-bold">Email</span>
                    </label>
                    <input name='email' required type="email" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full my-2 px-5">
                    <label className="label">
                        <span className="label-text font-bold">Password</span>
                    </label>
                    <input name='password' required type='password' placeholder="Type here" className="input input-bordered w-full" />
                </div>
                {err && <h5 className="label-text text-left text-red-500 ">{err}</h5>}
                <div className="form-control w-full my-2 px-5">
                    <button className=' btn w-full my-5 font-bold btn-outline btn-info'>Sing Up</button>
                </div>
                <Link to='/login'><h5 className="label-text text-left text-blue-500 font-bold hover:cursor-pointer">Login</h5></Link>
            </form>
        </div>
    );
};

export default SingUp;