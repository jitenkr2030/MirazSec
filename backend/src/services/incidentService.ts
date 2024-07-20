import Incident, { IIncident } from '../models/incident';

export const getAllIncidents = async () => {
  return await Incident.find();
};

export const createIncident = async (incidentData: Partial<IIncident>) => {
  const incident = new Incident(incidentData);
  return await incident.save();
};

// Add other CRUD operations
export default { getAllIncidents, createIncident };
