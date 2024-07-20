const API_URL = 'https://api.example.com';

export const fetchGuards = async () => {
  const response = await fetch(`${API_URL}/guards`);
  const data = await response.json();
  return data;
};

export const fetchClients = async () => {
  const response = await fetch(`${API_URL}/clients`);
  const data = await response.json();
  return data;
};

export const fetchFieldOfficers = async () => {
  const response = await fetch(`${API_URL}/fieldOfficers`);
  const data = await response.json();
  return data;
};

export default {
  fetchGuards,
  fetchClients,
  fetchFieldOfficers,
};
