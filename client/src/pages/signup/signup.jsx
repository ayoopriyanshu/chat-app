

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50'>
                <h1 className='text-3xl font-semibold text-center text-black-100 font-mono no-select'>SignUp
                    <span className="login-header">CHATRR</span>
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text font-mono pt-5'>Your name</span>
                        </label>
                        <input type="text" placeholder='' className='w-full input input-bordered h-10 font-mono' />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text font-mono'>Create a username</span>
                        </label>
                        <input type="text" placeholder='' className='w-full input input-bordered h-10 font-mono' />
                    </div>


                    <div>
                        <label className='label'>
                            <span className='text-base label-text font-mono'>Create a password</span>
                        </label>
                        <input type="password" placeholder='' className='w-full input input-bordered h-10 font-mono' />
                    </div>

                    <div className="flex">
                        <div className="form-control">
                            <label className={"label gap-2 cursor-pointer mt-2 mb-3"}>
                                <span className="label-text font-mono">Male</span>
                                <input type="radio" name="gender" className="radio border-slate-900" value="male" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className={"label gap-2 cursor-pointer mt-2 mb-3"}>
                                <span className="label-text font-mono">Female</span>
                                <input type="radio" name="gender" className="radio border-slate-900" value="female" />
                            </label>
                        </div>
                    </div>


                    <a href="#" className="text-sm hover:underline hover:text-blue-600 inline-block font-mono">
                        Already a user?
                    </a>

                    <div className="pt-8">
                        <button className="btn btn-block btn-sm font-mono">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp