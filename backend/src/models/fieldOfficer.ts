import mongoose, { Schema, Document } from 'mongoose';

export interface IFieldOfficer extends Document {
  name: string;
  email: string;
  phone: string;
  // Add other field officer-specific fields
}

const FieldOfficerSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  // Add other field officer-specific fields
});

export default mongoose.model<IFieldOfficer>('FieldOfficer', FieldOfficerSchema);
