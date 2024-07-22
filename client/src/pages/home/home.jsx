import Sidebar from "../../components/sidebar/sideBar.jsx"
import Messagecontainer from "../../components/messages/messageContainer.jsx"

const Home = () => {
    return (
        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <Sidebar />
            <Messagecontainer />
        </div>
    )
}

export default Home