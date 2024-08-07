import Messages from "./messages";
import Messageinput from "./messageInput";
import { useEffect } from "react";
import useConversation from "../../zustand/useConversation.js";
import { Useauthcontext } from "../../context/authContext.jsx";
import { crossUrl, nodejsUrl, reactUrl, routerUrl, jsUrl, mongoUrl, jwtUrl, daisyUrl, viteUrl, tailwindUrl, socketUrl } from "../../assets/icons/linedin.jsx";

const Messagecontainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation()

    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]); //TO DESELECT THE SELECTED CONVERSATION WHEN YOU LOGOUT

    return (
        <div className='md:min-w-[450px] flex flex-col no-select'>
            {!selectedConversation ? (
                <Defaultscreen />
            ) : (
                <>
                    <div className='flex bg-slate-500 px-4 py-2 mb-2 justify-between items-center'>
                        <div className="flex">
                            <span className='label-text'></span>{" "}
                            <span><img src={selectedConversation.profilePic} alt="pfp" className="w-7 h-7 rounded-full mr-2" /></span>
                            <span className='text-gray-900 font-bold font-mono'>{selectedConversation.fullName}</span>
                        </div>
                        <div>
                            <span><img src={crossUrl} alt="" className="w-5 h-5 cursor-pointer" onClick={() => setSelectedConversation(null)} /></span>
                        </div>
                    </div><Messages /><Messageinput />
                </>)}
        </div>
    )
}

export default Messagecontainer;

const Defaultscreen = () => {
    const { authUser } = Useauthcontext();
    const text = "CHATRR"
    return (
        <div className="flex justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2 font-mono">
                <div className="word-container">
                    {text.split('').map((letter, index) => (
                        <span
                            key={index}
                            className="letter"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {letter}
                        </span>
                    ))}
                </div>
                <div className="flex" >
                    <p className="font-mono text-lg pr-3" >Welcomes you </p>
                    <p className="bg-purple-800 pr-1 pl-1 rounded-md">{authUser.fullName}</p>
                </div>

                <div className="flex w-60 h-70" >
                    <p className="font-mono text-sm">CHATRR is a simple and easy-to-use chat application. Stay connected with friends and colleagues through real-time messaging. With an intuitive design, CHATRR makes it easy to start conversations and keep in touch with just a few clicks. Select a conversation to get started.</p>
                </div>

                <div className="absolute bottom-3">
                    <span className="font-mono text-xs">Technologies used to create this:</span>
                    <span className="flex">
                        <a href="https://nodejs.org/en" target="_blank"><img src={nodejsUrl} alt="" className="w-10 h-10 pr-2" /></a>
                        <a href="https://react.dev/" target="_blank"><img src={reactUrl} alt="" className="w-10 h-10 pr-2" /></a>
                        <a href="https://jwt.io/" target="_blank"><img src={jwtUrl} alt="" className="w-10 h-10 pr-2" /></a>
                        <a href="https://www.mongodb.com/" target="_blank"><img src={mongoUrl} alt="" className="w-10 h-10 pr-2" /></a>
                        <a href="https://socket.io/" target="_blank"><img src={socketUrl} alt="" className="w-10 h-10 pr-2" /></a>
                        <a href="https://tailwindcss.com/" target="_blank"><img src={tailwindUrl} alt="" className="w-10 h-10 pr-2" /></a>
                        <a href="https://daisyui.com/" target="_blank"><img src={daisyUrl} alt="" className="w-10 h-10 pr-2" /></a>
                        <a href="https://reactrouter.com/en/main" target="_blank"><img src={routerUrl} alt="" className="w-10 h-10 pr-2" /></a>
                        <a href="https://vitejs.dev/guide/" target="_blank"><img src={viteUrl} alt="" className="w-10 h-10 pr-2" /></a>
                        <a href="https://www.w3schools.com/js/" target="_blank"><img src={jsUrl} alt="" className="w-10 h-10 pr-2" /></a>
                    </span>
                </div>
                {/* <p>Welcome 👋 {authUser.fullName} 🎉</p>
                <p>Select a chat to start messaging</p>
                <TbMessages className="text-3xl md:text-6xl text-center" /> */}
            </div>
        </div>
    )
}