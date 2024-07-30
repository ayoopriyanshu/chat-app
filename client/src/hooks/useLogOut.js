import { useState } from "react"
import { Useauthcontext } from "../context/authContext"
import toast from "react-hot-toast"

const Uselogout = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = Useauthcontext()

    const logOut = async () => {
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            })

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.removeItem("chat-user")
            setAuthUser(null);

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return { loading, logOut };
}

export default Uselogout