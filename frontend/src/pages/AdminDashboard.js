import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Paper, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const AdminDashboard = () => {
  const [guards, setGuards] = useState([]);
  const [clients, setClients] = useState([]);
  const [fieldOfficers, setFieldOfficers] = useState([]);
  const [openGuardDialog, setOpenGuardDialog] = useState(false);
  const [openClientDialog, setOpenClientDialog] = useState(false);
  const [newGuard, setNewGuard] = useState({ email: '', password: '', role: 'guard' });
  const [newClient, setNewClient] = useState({ email: '', password: '', role: 'client' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const guardsResponse = await axios.get('/api/guards');
        const clientsResponse = await axios.get('/api/clients');
        const fieldOfficersResponse = await axios.get('/api/field-officers');

        setGuards(guardsResponse.data);
        setClients(clientsResponse.data);
        setFieldOfficers(fieldOfficersResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'role', headerName: 'Role', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
  ];

  const handleAddGuard = async () => {
    try {
      const response = await axios.post('/api/guards', newGuard);
      setGuards([...guards, response.data]);
      setOpenGuardDialog(false);
      setNewGuard({ email: '', password: '', role: 'guard' });
    } catch (error) {
      console.error('Error adding guard:', error);
    }
  };

  const handleAddClient = async () => {
    try {
      const response = await axios.post('/api/clients', newClient);
      setClients([...clients, response.data]);
      setOpenClientDialog(false);
      setNewClient({ email: '', password: '', role: 'client' });
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box mt={4} mb={4}>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <Grid container spacing={3}>
          {/* Guards Management */}
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant="h6" gutterBottom>
                  Guards Management
                </Typography>
                <Button variant="contained" color="primary" style={{ marginBottom: '16px' }} onClick={() => setOpenGuardDialog(true)}>
                  Add Guard
                </Button>
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid rows={guards} columns={columns} pageSize={5} checkboxSelection />
                </div>
              </Box>
            </Paper>
          </Grid>

          {/* Clients Management */}
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant="h6" gutterBottom>
                  Clients Management
                </Typography>
                <Button variant="contained" color="primary" style={{ marginBottom: '16px' }} onClick={() => setOpenClientDialog(true)}>
                  Add Client
                </Button>
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid rows={clients} columns={columns} pageSize={5} checkboxSelection />
                </div>
              </Box>
            </Paper>
          </Grid>

          {/* Field Officers Management */}
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant="h6" gutterBottom>
                  Field Officers Management
                </Typography>
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid rows={fieldOfficers} columns={columns} pageSize={5} checkboxSelection />
                </div>
              </Box>
            </Paper>
          </Grid>

          {/* Reports and Analytics */}
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant="h6" gutterBottom>
                  Reports and Analytics
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Here you can view various reports and analytics.
                </Typography>
                <Button variant="contained" color="secondary" style={{ marginBottom: '16px' }}>
                  View Reports
                </Button>
                {/* Placeholder for charts and analytics */}
                <Box mt={2}>
                  <Typography variant="body1" gutterBottom>
                    Charts and analytics go here...
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Add Guard Dialog */}
      <Dialog open={openGuardDialog} onClose={() => setOpenGuardDialog(false)}>
        <DialogTitle>Add Guard</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={newGuard.email}
            onChange={(e) => setNewGuard({ ...newGuard, email: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={newGuard.password}
            onChange={(e) => setNewGuard({ ...newGuard, password: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenGuardDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddGuard} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Client Dialog */}
      <Dialog open={openClientDialog} onClose={() => setOpenClientDialog(false)}>
        <DialogTitle>Add Client</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={newClient.email}
            onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={newClient.password}
            onChange={(e) => setNewClient({ ...newClient, password: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenClientDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddClient} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminDashboard;
