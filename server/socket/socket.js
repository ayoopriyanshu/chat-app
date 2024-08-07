import { Server } from "socket.io"
import http from "http"
import express from "express"
import cors from "cors"

const app = express()

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
    },
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {} //USER ID AND SOCKET ID AS KEY VALUE PAIR

io.on("connection", (socket) => {
    console.log("a user connected", socket.id)

    const userId = socket.handshake.query.userId
    if (userId != "undefined") userSocketMap[userId] = socket.id

    io.emit("getOnlineUsers", Object.keys(userSocketMap))//USED TO SEND EVENT TO ALL CONNECTED CLIENTS

    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    }) //IT IS USED TO LISTEN TO THE EVENTS FROM BOTH SERVER AND CLIENT SIDE
})

export { app, io, server };