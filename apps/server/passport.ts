import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { prisma } from "@repo/database";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
const GOOGLE_CALLBACK_URL =
  process.env.GOOGLE_CALLBACK_URL || "http://localhost:3000/api/v1/auth/google/callback";

if (GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: GOOGLE_CALLBACK_URL,
      },
      async (_accessToken, _refreshToken, profile, done) => {
        try {
          const email = profile.emails?.[0]?.value;
          const userName =
            profile.displayName || profile.name?.givenName || "Google User";
          const googleId = profile.id;

          if (!email) {
            return done(new Error("No email found in Google profile"), undefined);
          }

          // 1. Check if user already exists by googleId
          let user = await prisma.user.findUnique({
            where: { googleId },
          });

          // 2. If not found by googleId, check by email
          if (!user) {
            user = await prisma.user.findUnique({
              where: { email },
            });

            if (user) {
              // Link googleId to existing user
              user = await prisma.user.update({
                where: { id: user.id },
                data: { googleId },
              });
            } else {
              // 3. Create a new user with Google profile info
              user = await prisma.user.create({
                data: {
                  userName,
                  email,
                  googleId,
                },
              });
            }
          }

          return done(null, user);
        } catch (error) {
          return done(error as Error, undefined);
        }
      }
    )
  );
} else {
  console.warn(
    "⚠️ Google OAuth credentials (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET) are not set in .env"
  );
}

export default passport;
