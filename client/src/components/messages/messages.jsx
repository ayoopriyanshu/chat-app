import { useEffect, useRef } from "react"
import useGetMessages from "../../hooks/useGetMessages.js"
import Singlemessage from "./singleMessage.jsx"
import Messageskeleton from "../../skeletons/messageSkeleton.jsx"
import { TbMessages } from "react-icons/tb"

const Messages = () => {
    const { messages, loading } = useGetMessages();
    const lastMessageRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }, [messages]);
    return (
        <div className="px-4 flex-1 overflow-auto no-select">
            {!loading &&
                messages.length > 0 &&
                messages.map((message) => (
                    <div key={message._id} ref={lastMessageRef}>
                        <Singlemessage message={message} />
                    </div>
                ))}

            {loading && [...Array(3)].map((_, idx) => <Messageskeleton key={idx} />)}
            {!loading && messages.length === 0 && (
                <div className="flex items-center justify-center w-full h-full">
                    <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 flex flex-col items-center gap-2">
                        <p>Umm... looks like nothing here😴, </p>
                        <p>Start a chat now! 🌟💌🚀</p>
                        <TbMessages className="text-3xl md:text-6xl text-center" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Messages