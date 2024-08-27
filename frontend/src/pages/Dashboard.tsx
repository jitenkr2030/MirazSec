import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Guards: 30, Clients: 20 },
  { name: 'Feb', Guards: 20, Clients: 25 },
  { name: 'Mar', Guards: 50, Clients: 30 },
  { name: 'Apr', Guards: 40, Clients: 35 },
  { name: 'May', Guards: 35, Clients: 40 },
  { name: 'Jun', Guards: 50, Clients: 45 },
];

const Dashboard: React.FC = () => {
  return (
    <Container maxWidth="lg" className="dashboard-container">
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper className="dashboard-card">
            <Typography variant="h6">Guard Management</Typography>
            <Typography variant="body2">Manage your security guards efficiently.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className="dashboard-card">
            <Typography variant="h6">Client Management</Typography>
            <Typography variant="body2">Manage client details and contracts.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className="dashboard-card">
            <Typography variant="h6">Reports</Typography>
            <Typography variant="body2">Generate and view security reports.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className="dashboard-card">
            <Typography variant="h6" gutterBottom>Monthly Overview</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Guards" fill="#8884d8" />
                <Bar dataKey="Clients" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
