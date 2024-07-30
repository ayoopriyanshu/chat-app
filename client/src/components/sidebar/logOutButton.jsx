import { BiLogOut } from "react-icons/bi";
import Uselogout from "../../hooks/useLogOut.js";

const Logoutbutton = () => {

    const { loading, logOut } = Uselogout();

    return (
        <div className='mt-auto'>
            {!loading ? (
                <BiLogOut className="w-6 h-6 text-white cursor-pointer" onClick={logOut} />
            ) : (
                <span className="loading loading-spinner"></span>
            )}
        </div>
    )
}
export default Logoutbutton