import mongoose from 'mongoose';

const RedeemCodeSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  Expire: { type: Number, required: true },
});

const RedeemCode = mongoose.models.RedeemCode || mongoose.model('RedeemCode', RedeemCodeSchema);

export default RedeemCode;
