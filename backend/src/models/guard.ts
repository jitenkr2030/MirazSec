import mongoose, { Schema, Document } from 'mongoose';

export interface IGuard extends Document {
  name: string;
  email: string;
  phone: string;
  location: string;
  // Add other guard-specific fields
}

const GuardSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  // Add other guard-specific fields
});

export default mongoose.model<IGuard>('Guard', GuardSchema);
