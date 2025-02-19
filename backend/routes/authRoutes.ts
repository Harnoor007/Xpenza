import express from "express";
import passport from "../config/passport";

const router = express.Router();

// Route to start Google login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google callback route
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: false }),
  (req, res) => {
    res.json({ message: "Logged in successfully", user: req.user });
  }
);

export default router;
