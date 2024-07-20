import { ITask } from '../models/task';

const taskResolver = {
  Query: {
    tasks: async () => {
      // Logic to get all tasks
    },
    task: async (_: any, { id }: { id: string }) => {
      // Logic to get a task by ID
    },
  },
  Mutation: {
    createTask: async (_: any, { input }: { input: ITask }) => {
      // Logic to create a new task
    },
    updateTask: async (_: any, { id, input }: { id: string, input: ITask }) => {
      // Logic to update a task
    },
    deleteTask: async (_: any, { id }: { id: string }) => {
      // Logic to delete a task
    },
  },
};

export default taskResolver;
