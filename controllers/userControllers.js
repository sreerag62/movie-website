import routes from "../routes/userRoutes.js"
import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import  generateToken  from "../utlis/jwt.js"


export const signup = async (req, res) => {
    try {
        const { email, password, firstName, lastName } = req.body

        if (!email || !password || !firstName || !lastName) {
            return res.status(400).json({ msg: "pls enter the data" })
        }

        const userexist = await User.findOne({ email })
        if (userexist) {
            return res.status(400).json({ message: "user already exist" })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        console.log(hashPassword);
        

        const userResponse = await User.create({ email, password:hashPassword, firstName, lastName })
        return res.status(200).json({ message: "user created successfully", user: userResponse })

    } catch (error) {
        console.log(error)

    }
}




export const signin = async (req, res) => {
    try {

        const { email, password } = req.body
        const user = await User.findOne({ email });

        if (!user) {
            return res.send("User not found");
        }

        const matchPassword = await bcrypt.compare(password, user.password);

        if (!matchPassword) {
            return res.send("Password is not correct");
        }

        const token = generateToken(email);
        console.log(token,'======token')
        res.cookie("token", token);
        res.send("Logged in!");
    }
    catch (error) {
        console.log(error, "Something wrong");
        res.status(500).send("Internal Server Error");
    }
};





