import FieldOfficer, { IFieldOfficer } from '../models/fieldOfficer';

export const getAllFieldOfficers = async () => {
  return await FieldOfficer.find();
};

export const createFieldOfficer = async (officerData: Partial<IFieldOfficer>) => {
  const officer = new FieldOfficer(officerData);
  return await officer.save();
};

// Add other CRUD operations
export default { getAllFieldOfficers, createFieldOfficer };
