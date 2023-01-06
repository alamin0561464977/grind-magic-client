import React, { useState } from 'react';

const Login = () => {
    const [err, setErr] = useState(null);
    const handelLoginForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className=' lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 my-8'>
            <div>
                <img className=' rounded-xl shadow-xl mx-auto h-[520px]' src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif" alt="" />
            </div>
            <form onSubmit={handelLoginForm} className=' shadow-xl p-4 text-center'>
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
                <h5 className="label-text text-left text-blue-500 font-bold hover:cursor-pointer">SingUp</h5>
                {err && <h5 className="label-text text-left text-red-500 ">Forget Password?</h5>}
                <div className="divider">OR</div>
                <button type='submit' className=' btn btn-wide mx-auto my-5 font-bold '>Google</button>
            </form>
        </div>
    );
};

export default Login;