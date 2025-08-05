import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    paymentId: string;
    userId: string;
    username: string;
    redeemCodes: string[]; 
    hasRedeemedCode: boolean;
    date: Date;
    expiryDate: Date;
}

const UserSchema: Schema = new Schema({
    paymentId: { type: String, required: true },
    userId: { type: String, required: true },
    username: { type: String, required: true },
    redeemCodes: { type: [String], default: [] },
    hasRedeemedCode: { type: Boolean, default: false },
    date: { type: Date, required: true },
    expiryDate: { type: Date, required: true }
}, {
    timestamps: false,
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
