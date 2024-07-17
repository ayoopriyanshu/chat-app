import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

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

        res.status(400).json(newMessage);

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
            res.status(666).json([]);
        }

        res.status(400).json(conversation.messages);

    } catch (error) {
        console.log("Error in getMessages controller", error.message);
        res.status(666).json({ error: "Internal server error" });
    }
}