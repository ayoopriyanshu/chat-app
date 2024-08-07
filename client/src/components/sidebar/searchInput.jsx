import { IoSearchSharp } from "react-icons/io5"
import { useState } from "react";
import useConversation from "../../zustand/useConversation.js";
import Usegetconversations from "../../hooks/useGetConversations.js";
import toast from "react-hot-toast";

const Searchinput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = Usegetconversations();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast('Atleast type in 3 characters', {
                icon: '⚠️',
            });
        }

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else toast.error("No such user found!");
    }
    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 no-select">
            <input type="text" placeholder="Search..." className="input input-bordered rounded-full " value={search} onClick={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Search..."} onChange={(e) => setSearch(e.target.value)} />
            <button type="submit" className="btn btn-circle bg-sky-500 text-white"><IoSearchSharp className="w-6 h-6 outline-none" /></button>
        </form>
    )
}

export default Searchinput;