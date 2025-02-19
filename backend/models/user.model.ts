import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      sparse: true, // Allows null values
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      sparse: true,
    },
    password: {
      type: String,
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
    googleRefreshToken: { 
      type: String 
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
