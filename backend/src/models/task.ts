import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description: string;
  assignedTo: mongoose.Types.ObjectId;
  dueDate: Date;
  // Add other task-specific fields
}

const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assignedTo: { type: mongoose.Types.ObjectId, ref: 'Guard', required: true },
  dueDate: { type: Date, required: true },
  // Add other task-specific fields
});

export default mongoose.model<ITask>('Task', TaskSchema);
