import useConversation from "../../zustand/useConversation.js";
import { Usesocketcontext } from "../../context/socketContext.jsx"

const Singleconversation = ({ conversation, lastIdx }) => {
    const { selectedConversation, setSelectedConversation } = useConversation()

    const isSelected = selectedConversation?._id === conversation._id;
    const { onlineUsers } = Usesocketcontext()
    const isOnline = onlineUsers.includes(conversation._id)
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`} onClick={() => setSelectedConversation(conversation)}>
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-12 rounded-full no-select">
                        <img src={conversation.profilePic} alt="user avatar" />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-200 no-select font-mono">{conversation.fullName}</p>
                        {isOnline && <span className="text-sm font-mono text-green-400 no-select">online</span>}
                    </div>
                </div>
            </div>

            {!lastIdx && <div className="divider my-0 py-0 h-1" />}

        </>
    )
}

export default Singleconversation;