import { createContext, useState, useEffect, useContext } from "react"
import { Useauthcontext } from "./authContext.jsx"
import io from "socket.io-client";

const Socketcontext = createContext();

export const Usesocketcontext = () => {
    return useContext(Socketcontext);
}

export const Socketcontextprovider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = Useauthcontext();

    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:5000", {
                query: {
                    userId: authUser._id,
                },
            });

            setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            })

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return <Socketcontext.Provider value={{ socket, onlineUsers }}>{children}</Socketcontext.Provider>
}
