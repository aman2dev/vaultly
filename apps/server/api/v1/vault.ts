import { Router } from "express";
import { authMiddleware } from "../../auth-middelware";
import { prisma } from "@repo/database";




const router: Router = Router();


router.post("/createvault", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const userData = req.body;

    if (!userId) {
        return res.status(401).json({ error: "unauthorized" });
    }

    if (!userData) {
        return res.status(400).json({ error: "no user data found" });
    }

    try {
        const vaultCreated = await prisma.userData.create({
            data: {
                authorId: userId,
                siteName: userData.siteName,
                email: userData.email,
                password: userData.password,
            },
        });

        if (!vaultCreated) {
            return res.status(400).json({ error: "new user vault not created" });
        }

        return res.status(201).json({ message: "new vault created", vault: vaultCreated });
    } catch (error) {
        console.error("createvault error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/vaults", authMiddleware, async (req, res) => {
    const userId = req.userId;

    if (!userId) {
        return res.status(401).json({ error: "unauthorized" });
    }

    try {
        const getVaults = await prisma.userData.findMany({
            where: {
                authorId: userId,
            },
        });

        return res.status(200).json({
            vaults: getVaults,
        });
    } catch (error) {
        console.error("get vaults error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});



export { router as vaultRouter }