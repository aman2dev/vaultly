import "dotenv/config"
import { Router } from "express";
import { prisma } from "@repo/database"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router: Router = Router()

router.post("/signup", async (req, res) => {
    const data = req.body;
    console.log(data)
    if (!data) {
        return res.status(404).json({ message: "error while getting data in signup" })
    }

    const exitingUser = await prisma.user.findUnique({
        where: {
            email: data.email
        }
    })

    if (exitingUser) {
        return res.status(401).json({ message: "user already exists with this email" })
    }

    const encryptedPasswod = await bcrypt.hash(data.password, 10)

    try {
        const createdUser = await prisma.user.create({
            data: {
                userName: data.name,
                email: data.email,
                password: encryptedPasswod
            }
        })
        if (createdUser) {
            return res.status(200).json({ message: "user created " })
        }



    } catch (error) {
        return res.send(error)
    }



})


router.post("/signin", async (req, res) => {
    try {
        const data = req.body;

        if (!data) {
            return res.status(404).send("error while signin")

        };


        const exitingUser = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        })

        if (!exitingUser) {
            return res.status(404).json({ message: "user dont exitis.." })
        }

        const isPasswordVaild = await bcrypt.compare(data.password, exitingUser.password)

        if (!isPasswordVaild) {
            return res.status(404).json({ message: "password is incorrect" })
        }

        const userId = exitingUser.id

        const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
            expiresIn: "2d"
        })

        res.cookie("token", token)
        return res.status(200).json({ message: "Login successful" });

    } catch (error) {
        console.error("sigin error ")
        return res.status(500).json({ message: "Internal server error" });
    }

})

export { router as authRouter }