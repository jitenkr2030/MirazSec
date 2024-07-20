import { IIncident } from '../models/incident';

const incidentResolver = {
  Query: {
    incidents: async () => {
      // Logic to get all incidents
    },
    incident: async (_: any, { id }: { id: string }) => {
      // Logic to get an incident by ID
    },
  },
  Mutation: {
    createIncident: async (_: any, { input }: { input: IIncident }) => {
      // Logic to create a new incident
    },
    updateIncident: async (_: any, { id, input }: { id: string, input: IIncident }) => {
      // Logic to update an incident
    },
    deleteIncident: async (_: any, { id }: { id: string }) => {
      // Logic to delete an incident
    },
  },
};

export default incidentResolver;
