const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50'>
                <h1 className='text-3xl font-semibold text-center text-black-100 font-mono no-select'>Login
                    <span className="login-header">CHATRR</span>
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text font-mono pt-5'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10 font-mono' />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text font-mono'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10 font-mono' />
                    </div>

                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block font-mono">
                        Create an account
                    </a>

                    <div className="pt-8">
                        <button className="btn btn-block btn-sm mt-2 font-mono">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;