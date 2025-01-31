import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js"

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: recieverId } = req.params;
        const senderId = req.user._id; //ID OF THE LOGGED IN USER VERIFIED IN PROTECT ROUTE

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, recieverId] },
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, recieverId],
            })
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            message,
        }) //MESSAGE MODEL

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        await Promise.all([conversation.save(), newMessage.save()]); //SAVING BOTH IN PARALELL

        const receiverSocketId = getReceiverSocketId(recieverId)
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage)//IO.TO IS USED TO SEND EVENTS TO A SPECIFIC CLIENT
        }

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller", error.message);
        res.status(666).json({ error: "Internal server error" });
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatWith } = req.params; //ID PROVIDED
        const senderId = req.user._id; //ID OF THE LOGGED IN USER VERIFIED IN PROTECT ROUTE

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatWith] }
        }).populate("messages"); //TO AVOID GETTING THE MESSAGES IN A ARRAY, INSTEAD AS DIFFERENT OBJECTS

        if (!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation.messages;
        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessages controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}