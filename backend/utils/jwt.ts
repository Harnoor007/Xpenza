import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET!;
const ACCESS_EXPIRY = process.env.JWT_ACCESS_EXPIRY!;
const REFRESH_EXPIRY = process.env.JWT_REFRESH_EXPIRY as string;

const expires : Record<string, string> = {
  expiresIn: ACCESS_EXPIRY
}

// Generate Access Token
export const generateAccessToken = (userId: string) => {
  return jwt.sign({ userId }, JWT_SECRET, expires);
};

const options : Record<string, string> = {
  expiresIn: REFRESH_EXPIRY
}

// Generate Refresh Token
export const generateRefreshToken = (userId: string) => {
  return jwt.sign({ userId }, JWT_SECRET, options);
};

// Verify Token
export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
