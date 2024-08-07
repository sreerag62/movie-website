import routes from "../routes/adminRoutes.js"
import admin from "../models/adminModel.js"
import bcrypt from "bcrypt"
import  generateToken  from "../utlis/jwt.js"


export const signup = async (req, res) => {
    try {
        const { email, password, firstName, lastName, } = req.body

        if (!email || !password || !firstName || !lastName) {
            return res.status(400).json({ msg: "pls enter the data" })
        }

        const adminexist = await admin.findOne({ email })
        if (adminexist) {
            return res.status(400).json({ message: "admin already exist" })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        console.log(hashPassword);
        

        const adminResponse = await admin.create({ email, password:hashPassword, firstName, lastName })
        return res.status(200).json({ message: "admin entered successfully", admin: adminResponse })

    } catch (error) {
        console.log(error)

    }
}




export const signin = async (req, res) => {
    try {

        const { email, password } = req.body
        const admin = await admin.findOne({ email });

        if (!admin) {
            return res.send("admin not found");
        }

        const matchPassword = await bcrypt.compare(password, admin.password);

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





