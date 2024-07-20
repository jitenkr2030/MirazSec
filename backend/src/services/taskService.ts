import Task, { ITask } from '../models/task';

export const getAllTasks = async () => {
  return await Task.find();
};

export const createTask = async (taskData: Partial<ITask>) => {
  const task = new Task(taskData);
  return await task.save();
};

// Add other CRUD operations
export default { getAllTasks, createTask };
