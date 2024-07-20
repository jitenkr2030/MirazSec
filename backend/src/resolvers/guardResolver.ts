import { IGuard } from '../models/guard';

const guardResolver = {
  Query: {
    guards: async () => {
      // Logic to get all guards
    },
    guard: async (_: any, { id }: { id: string }) => {
      // Logic to get a guard by ID
    },
  },
  Mutation: {
    createGuard: async (_: any, { input }: { input: IGuard }) => {
      // Logic to create a new guard
    },
    updateGuard: async (_: any, { id, input }: { id: string, input: IGuard }) => {
      // Logic to update a guard
    },
    deleteGuard: async (_: any, { id }: { id: string }) => {
      // Logic to delete a guard
    },
  },
};

export default guardResolver;
