import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the Guild document
export interface IGuild extends Document {
  discordId: string;
  username: string;
  email: string;
  accessToken: string;
  guilds: Array<{
    id: string;
    name: string;
    icon?: string;
    banner?: string;
    hasAdmin: boolean;
  }>;
}

// Create the Guild schema
const GuildSchema: Schema = new Schema({
  discordId: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  accessToken: { type: String, required: true },
  guilds: [{
    id: { type: String, required: true },
    name: { type: String, required: true },
    icon: { type: String },
    banner: { type: String },
    hasAdmin: { type: Boolean, required: true }
  }]
}, { timestamps: true });

// Export the Guild model
const Guild = mongoose.models.Guild || mongoose.model<IGuild>('Guild', GuildSchema);
export default Guild;
