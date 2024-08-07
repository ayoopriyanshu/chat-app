import { useState } from "react";
import { Link } from "react-router-dom";
import Uselogin from "../../hooks/useLogin.js";
import { linkedinUrl, githubUrl, gmailUrl } from "../../assets/icons/linedin.jsx";
import Themeselector from "../../components/themes/themeSelector.jsx";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = Uselogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password)
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
            <h1 className="absolute top-10 left-10 text-4xl bg-gray-300 p-3 rounded-2xl font-semibold login-header no-select">CHATRR</h1>
            <div className="absolute top-10 right-10 no-select"><Themeselector /></div>
            <div className="absolute bottom-5 right-10 text-right no-select">
                <p className=" text-sm font-semibold font-mono text-gray-300 ">CREATED BY</p> <p className="text-lg font-semibold font-mono text-gray-300 "> PRIYANSHU SHARMA</p>
                <p className=" flex text-lg font-semibold font-mono text-gray-300">CONNECT WITH ME:
                    <a href="https://www.linkedin.com/in/ayoopriyanshu/" target="_blank" rel="noopener noreferrer"><img src={linkedinUrl} alt="linkedin/ayoopriyanshu" className="icon" title="Linkedin Profile" /></a>
                    |
                    <a href="https://github.com/ayoopriyanshu" target="_blank" rel="noopener noreferrer"><img src={githubUrl} alt="github/ayoopriyanshu" className="icon" title="Github Profile" /></a>
                    |
                    <a href="mailto:priyanshusharma3377@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmailUrl} alt="Gmail" className="icon" title="My Gmail" /></a>
                </p>
            </div>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300 font-mono no-select'>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300 font-mono pt-5 no-select'>Username</span>
                        </label>
                        <input type="text" className='w-full input input-bordered h-10 font-mono' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text font-mono text-gray-300 no-select'>Password</span>
                        </label>
                        <input type="password" className='w-full input input-bordered h-10 font-mono' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <Link to='/signup' className="text-sm text-gray-300 hover:underline hover:text-blue-600 mt-2 inline-block font-mono no-select">
                        New user?
                    </Link>

                    <div className="pt-8">
                        <button className="btn btn-block btn-sm mt-2 font-mono" disabled={loading}>{loading ? <span className="loading loading-spinner"></span> : "Login"} </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;