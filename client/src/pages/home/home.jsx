import Sidebar from "../../components/sidebar/sideBar.jsx"
import Messagecontainer from "../../components/messages/messageContainer.jsx"
import { linkedinUrl, githubUrl, gmailUrl } from "../../assets/icons/linedin.jsx";
import Themeselector from "../../components/themes/themeSelector.jsx";

const Home = () => {
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
            <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <Sidebar />
                <Messagecontainer />
            </div>
        </div>
    )
}

export default Home