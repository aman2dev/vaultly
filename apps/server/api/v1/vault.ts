import { Router } from "express";
import { authMiddleware } from "../../auth-middelware";
import { prisma } from "@repo/database";




const router: Router = Router();


router.post("/createvault", authMiddleware, (req, res) => {
    const userId = req.userId
    const userData = req.body;

    if (!userId) {
        return res.status(402).json({ error: "unauthorized" });
    }

    if (!userData) {
        return res.status(402).json({ error: "no user data found" });
    }

    try {

        const vaultCreated = prisma.userData.create({
            data: {
                authorId: userId,
                siteName: userData.siteName,
                email: userData.email,
                password: userData.password
            }
        })

        if (!vaultCreated) {
            return res.json({ error: "new user vault not created" })
        }

        return res.send("new vault created")

    } catch (error) {
        console.log(error)
    }

});