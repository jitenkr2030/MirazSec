import mongoose, { Schema, Document } from 'mongoose';

export interface IIncident extends Document {
  type: string;
  description: string;
  location: string;
  date: Date;
  // Add other incident-specific fields
}

const IncidentSchema: Schema = new Schema({
  type: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  // Add other incident-specific fields
});

export default mongoose.model<IIncident>('Incident', IncidentSchema);
