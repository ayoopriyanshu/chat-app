import { useState, useEffect } from 'react'
import { BiLogOut } from "react-icons/bi";
import Uselogout from "../../hooks/useLogOut.js";

const Logoutbutton = () => {

    const { loading, logOut } = Uselogout();
    const [currentTime, setCurrentTime] = useState('');

    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    useEffect(() => {
        setCurrentTime(getCurrentTime()); //SET INITIAL TIME
        const intervalId = setInterval(() => setCurrentTime(getCurrentTime()), 1000); //UPDATE EVERY SECOND

        return () => clearInterval(intervalId); //CLEANUP INTERVAL ON UNMOUNT
    }, []);

    return (
        <div className='flex mt-auto justify-between items-center'>
            {!loading ? (
                <><BiLogOut className="w-6 h-6 text-white cursor-pointer" onClick={logOut} /><span className='text-white font-mono'>{currentTime}</span></>
            ) : (
                <span className="loading loading-spinner"></span>
            )}
        </div>
    )
}
export default Logoutbutton