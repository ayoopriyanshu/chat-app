import { useState } from "react"
import { Useauthcontext } from "../context/authContext.jsx"
import toast from "react-hot-toast"


const Uselogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = Useauthcontext()

    const login = async (username, password) => {
        const success = handleInputErrors(
            username,
            password
        )
        if (!success) return;
        setLoading(true)
        console.log("Attempting to login with:", { username, password });
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })

            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return { loading, login }
}

export default Uselogin

function handleInputErrors(
    username,
    password) {

    if (!username || !password) {
        toast.error('Please fill in all the fields')
        return false;
    }

    return true; //if passes all checks
}