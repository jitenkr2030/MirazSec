import Guard, { IGuard } from '../models/guard';

export const getAllGuards = async () => {
  return await Guard.find();
};

export const createGuard = async (guardData: Partial<IGuard>) => {
  const guard = new Guard(guardData);
  return await guard.save();
};

// Add other CRUD operations
export default { getAllGuards, createGuard };
