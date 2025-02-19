import mongoose, { Schema } from "mongoose";

const expenseSchema = new mongoose.Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        billImageUrl: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            enum: ["Food & Drinks", "Clothing", "Grocery", "Electronics", "Travel & Automotive", "Health & Medicine", "Housing & Rent", "Shopping", "Other"],
            required: true
        },
        merchant: {
            type: String,
            required: true,
            default: ""
        },
        paymentMethod: {
            type: String,
            required: true,
            enum: ["Cash", "Card", "UPI", "Other"]
        }
    }, 
    {timestamps: true}
)