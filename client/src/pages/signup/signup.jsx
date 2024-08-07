import { useState } from "react";
import { Link } from "react-router-dom";
import Gendercheckbox from "./genderCheckBox.jsx";
import Usesignup from "../../hooks/useSignup.js";
import { linkedinUrl, githubUrl, gmailUrl } from "../../assets/icons/linedin.jsx";
import Themeselector from "../../components/themes/themeSelector.jsx";

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    })

    const { loading, signup } = Usesignup();

    const handleCheckBox = (gender) => {
        setInputs({ ...inputs, gender })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs);
        await signup(inputs);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
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
                <h1 className='text-3xl font-semibold text-center text-gray-300 font-mono no-select'>SignUp</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text font-mono pt-5 text-gray-300'>Your name</span>
                        </label>
                        <input type="text" placeholder='' className='w-full input input-bordered h-10 font-mono' value={inputs.fullName} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text font-mono text-gray-300'>Create a username</span>
                        </label>
                        <input type="text" placeholder='' className='w-full input input-bordered h-10 font-mono' value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                    </div>


                    <div>
                        <label className='label'>
                            <span className='text-base label-text font-mono text-gray-300'>Create a password</span>
                        </label>
                        <input type="password" placeholder='' className='w-full input input-bordered h-10 font-mono' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text font-mono text-gray-300'>Confirm password</span>
                        </label>
                        <input type="password" placeholder='' className='w-full input input-bordered h-10 font-mono' value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                    </div>

                    <Gendercheckbox onCheckBoxChange={handleCheckBox} selectedGender={inputs.gender} />


                    <Link to='/login' className="text-sm hover:underline hover:text-blue-600 inline-block font-mono text-gray-300">
                        Already a user?
                    </Link>

                    <div className="pt-8">
                        <button className="btn btn-block btn-sm font-mono" disabled={loading}>{loading ? <span className="loading loading-spinner"></span> : "SignUp"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp