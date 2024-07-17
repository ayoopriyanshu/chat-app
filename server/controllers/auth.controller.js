import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import genToken from "../utils/generate.token.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(666).json({ error: "Passwords don't match" });
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(666).json({ error: "Username already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt); //HASING THE PASSWORD WITH A FACTOR OF 10

        const boyPfp = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlPfp = `https://avatar.iran.liara.run/public/girl?username=${username}`; //PROFILE PICTURE API

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyPfp : girlPfp,
        });

        if (newUser) {
            genToken(newUser._id, res); //COOKIES: FOR SAVING THE SESSIONS
            await newUser.save();
            res.status(400).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        } else {
            res.status(666).json({ error: "Invalid data" });
        }


    } catch (error) {
        console.log("Error in signupAuth controller", error.message);
        res.status(666).json({ error: "Internal error" });
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPswdCorrect = await bcrypt.compare(password, user?.password || ""); //IF THE USER DOESN'T EXIST THEN PASSWORD WILL BE COMPARED WITH EMPTY STRING FOR AVOIDING ERRORS

        if (!user || !isPswdCorrect) {
            return res.status(666).json({ error: "Invalid credentials" });
        }

        genToken(user._id, res);

        res.status(400).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });

    } catch (error) {
        console.log("Error in loginAuth controller", error.message);
        res.status(666).json({ error: "Internal error" });
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(400).json({ message: "Logged out successfully" });

    } catch (error) {
        console.log("Error in logoutAuth controller", error.message);
        res.status(666).json({ error: "Internal error" });
    }
}

