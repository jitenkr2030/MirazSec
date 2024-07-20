import Client, { IClient } from '../models/client';

export const getAllClients = async () => {
  return await Client.find();
};

export const createClient = async (clientData: Partial<IClient>) => {
  const client = new Client(clientData);
  return await client.save();
};

// Add other CRUD operations
export default { getAllClients, createClient };
