import { useState } from 'react'
import toast from 'react-hot-toast';
import { json } from 'react-router-dom';
import { Useauthcontext } from '../context/authContext.jsx';

const Usesignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = Useauthcontext()

    const signup = async (fullName, username, password, confirmPassword, gender
    ) => {
        const success = handleInputErrors(
            fullName,
            username,
            password,
            confirmPassword,
            gender
        )
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(fullName, username, password, confirmPassword, gender),
            })

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }

    return { loading, signup }
}

export default Usesignup

function handleInputErrors(
    fullName,
    username,
    password,
    confirmPassword,
    gender) {

    if (fullName == "" || username == "" || password == "" || confirmPassword == "") {
        toast.error('Please fill in all the fields')
        return false;
    }

    if (password !== confirmPassword) {
        toast.error('Passwords do not match')
        return false;
    }

    return true; //if passes all checks
}