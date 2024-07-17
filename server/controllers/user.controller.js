import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {

        const loggedInUserId = req.user._id; //WE GET THIS BECAUSE OF THE PROTECT ROUTE MIDDLEWARE

        const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password"); //TO AVOID GETTING THE LOGGED IN USER ID [NE- NOT EQUAL] AND AVOID GETTING PASSWORDS

        res.status(400).json(allUsers);

    } catch (error) {
        console.log("Error in getUsersForSidebar controller", error.message);
        res.status(666).json({ error: "Internal server error" });
    }
}