import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contextAPI/userAPI/UserContext';

const Login = () => {
    const [err, setErr] = useState(null);
    const { login, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handelLoginForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(({ user }) => {
                setErr(null);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => setErr(error.message));
    };

    const googleSingIn = () => {
        setErr(null);
        googleLogin()
            .then(({ user }) => {
                const { displayName, email, photoURL } = user;
                const userInfo = { name: displayName, email, photoURL, admin: false };
                console.log(userInfo);
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
            })
            .catch(error => {
                setErr(error.message);
            })
    }
    return (
        <div className=' lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 my-8'>
            <div>
                <img className=' rounded-xl shadow-xl mx-auto h-[520px]' src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif" alt="" />
            </div>
            <div className=' shadow-xl p-4 text-center'>
                <form onSubmit={handelLoginForm}>
                    <div>
                        <h1 className=' font-bold text-3xl'>Login</h1>
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
                    <h5 className="label-text text-left text-blue-400 hover:cursor-pointer">Forget Password?</h5>
                    <div className="form-control w-full my-2 px-5">
                        <button className=' btn w-full my-5 font-bold btn-outline btn-info'>Login</button>
                    </div>
                    <Link to='/sing-up'><h5 className="label-text text-left text-blue-500 font-bold hover:cursor-pointer">SingUp</h5></Link>
                    {err && <h5 className="label-text text-left text-red-500 ">{err}</h5>}
                </form>
                <div className="divider">OR</div>
                <button onClick={googleSingIn} type='submit' className=' btn btn-wide mx-auto my-5 font-bold '>Google</button>
            </div>
        </div>
    );
};

export default Login;