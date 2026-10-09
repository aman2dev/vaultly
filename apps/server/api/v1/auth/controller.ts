import "dotenv/config"
import { Router } from "express";
import { prisma } from "@repo/database"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import passport from "../../../passport";

const router: Router = Router()

// Google OAuth Login
router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
        session: false,
    })
);

// Google OAuth Callback
router.get(
    "/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect: "/api/v1/auth/signin",
    }),
    (req, res) => {
        try {
            const user = req.user as { id: string; email: string; userName: string };

            if (!user) {
                return res.status(401).json({ message: "Google authentication failed" });
            }

            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
                expiresIn: "2d",
            });

            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
            });

            const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
            return res.redirect(`${frontendUrl}`);
        } catch (error) {
            console.error("Google callback error:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
);

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

        if (!exitingUser.password) {
            return res.status(400).json({ message: "Please sign in using Google" })
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