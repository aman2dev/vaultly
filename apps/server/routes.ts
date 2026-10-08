import { Router } from "express";
import { authRouter } from "./api/v1/auth/controller";
import { vaultRouter } from "./api/v1/vault";


const router = Router();


router.use("/auth", authRouter);
router.use("/", vaultRouter);



export { router }