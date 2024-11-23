import React from 'react';

const page = () => {
    // const handleRegister = async (event) => {
    //     event.preventDefault();
    // }
    return (
        <div className=' flex flex-col justify-center items-center min-h-screen'>
            <h1 className=' p-5 text-4xl font-bold text-slate-700'>Sign Up with Email and Password.</h1>
            <div>
                <form onSubmit={''} action="" className=' bg-orange-100 space-y-3 p-4'>
                    <div>
                        <label>Name</label>
                        <input type="text" name='name' placeholder='Your Name' className=' outline-none text-slate-700 p-2' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" name='email' placeholder='Enter Your Email' className=' outline-none text-slate-700 p-2' />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name='password' placeholder='Enter Your Password' className=' outline-none text-slate-700 p-2' />
                    </div>

                    <div className=' text-center items-center'>
                        <button className=' px-4 py-2 bg-orange-600 text-white '>Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;