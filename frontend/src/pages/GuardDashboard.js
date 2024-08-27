import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GuardDashboard = () => {
  const navigate = useNavigate();

  const handleViewSchedule = () => {
    // Logic for viewing schedule
    navigate('/schedule'); // Example navigation
  };

  const handleReportIncident = () => {
    // Logic for reporting incident
    navigate('/report-incident'); // Example navigation
  };

  const handleViewTasks = () => {
    // Logic for viewing tasks
    navigate('/tasks'); // Example navigation
  };

  const handleActivatePanicButton = () => {
    // Logic for activating panic button
    console.log('Panic button activated');
  };

  const handleSubmitReport = () => {
    // Logic for submitting report
    navigate('/submit-report'); // Example navigation
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Guard Dashboard</Typography>
      <Grid container spacing={3}>
        {/* Intelligent Scheduling & Timesheets */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Intelligent Scheduling & Timesheets</Typography>
              <Typography>
                Automatically generate optimized schedules for guards based on their availability, skills, and past performance. Guards can view their schedules and submit timesheets digitally.
              </Typography>
              <Button variant="contained" color="primary" onClick={handleViewSchedule}>View Schedule</Button>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Advanced Incident Reporting */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Advanced Incident Reporting</Typography>
              <Typography>
                Guards can report incidents using photos, videos, and GPS location data. The system analyzes reports to provide insights and trends.
              </Typography>
              <Button variant="contained" color="primary" onClick={handleReportIncident}>Report Incident</Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Task Management & Communication */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Task Management & Communication</Typography>
              <Typography>
                Guards receive tasks through the app and can communicate via chat or walkie-talkie features. Automation tools help assign and manage tasks efficiently.
              </Typography>
              <Button variant="contained" color="primary" onClick={handleViewTasks}>View Tasks</Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Enhanced Panic Button & Real-time Location Tracking */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Enhanced Panic Button & Real-time Location Tracking</Typography>
              <Typography>
                Guards can use a panic button to send distress signals with their location. Real-time tracking ensures that their location is always known.
              </Typography>
              <Button variant="contained" color="primary" onClick={handleActivatePanicButton}>Activate Panic Button</Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Digital Reporting Forms with AI-driven Insights */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Digital Reporting Forms with AI-driven Insights</Typography>
              <Typography>
                Guards fill out digital forms for daily reports, with AI analyzing the data to provide actionable insights and recommendations.
              </Typography>
              <Button variant="contained" color="primary" onClick={handleSubmitReport}>Submit Report</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GuardDashboard;
