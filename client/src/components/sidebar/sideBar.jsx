import Searchinput from "./searchInput.jsx";
import Conversations from "./conversations.jsx";
import Logoutbutton from "./logOutButton.jsx";

const Sidebar = () => {
    return (
        <div className="border-r border-slate-500 p-4 flex flex-col">
            <Searchinput />
            <div className="divider px-3"></div>
            <Conversations />
            <Logoutbutton />
        </div>
    )
}

export default Sidebar;