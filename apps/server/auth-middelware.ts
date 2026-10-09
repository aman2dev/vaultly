import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";

export function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const token =
        req.cookies?.token ||
        (req.headers.authorization?.startsWith("Bearer ")
            ? req.headers.authorization.split(" ")[1]
            : undefined);

    if (!token) {
        return res.status(401).json({ error: "Unauthorized form authMiddleware" });
    }

    try {
        const decodedToken = jwt.verify(token as string, process.env.JWT_SECRET!);

        req.userId = (decodedToken as unknown as JwtPayload)
            .userId as unknown as string;

        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }
}