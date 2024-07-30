import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.json({ error: "Unauthorized- No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_KEY) //VERIFY THE TOKEN USING THE ENV VARIABLE WHICH WE USED TO CREATE THE TOKEN IN THE GENERATE TOKEN JS FILE

        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized- Invalid token" });
        }

        const user = await User.findById(decoded.userId).select("-password"); //TO EXCLUDE THE 'PASSWORD' FIELD FROM THE RESULTS

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user;
        next(); //TO CALL THE NEXT FUNCTION IN THE CONTROLLER THAT IS SENDMESSAGE

    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};