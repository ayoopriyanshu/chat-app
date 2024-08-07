import { useEffect } from 'react'
import { Usesocketcontext } from "../context/socketContext.jsx"
import useConversation from '../zustand/useConversation.js'
import tri_tone from '../assets/sounds/tri_tone.mp3'

const Uselistenmessages = () => {
    const { socket } = Usesocketcontext()
    const { messages, setMessages } = useConversation()

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shake = true;
            const sound = new Audio(tri_tone)
            sound.play()
            setMessages([...messages, newMessage]);
        });

        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages]);
}

export default Uselistenmessages