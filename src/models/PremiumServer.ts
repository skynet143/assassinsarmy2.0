// models/PremiumServer.ts
import mongoose, { Document, Schema } from 'mongoose';

interface IPremiumServer extends Document {
    guildId: string;
    expireOn: number; // Using UNIX timestamp for expiry date
}

const PremiumServerSchema: Schema = new Schema({
    guildId: { type: String, required: true, unique: true },
    expireOn: { type: Number, required: true }, // Changed to 'expireOn' for clarity
});

const PremiumServer = mongoose.models.PremiumServer || mongoose.model<IPremiumServer>('PremiumServer', PremiumServerSchema);

export default PremiumServer;
