// src/pages/FieldOfficerDashboard.js
import React from 'react';
import { Container, Typography, Grid, Box, Card, CardContent, Button } from '@mui/material';

const FieldOfficerDashboard = () => {
    return (
        <Container>
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    Field Officer Dashboard
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">AI-powered Client Visit Scheduling & Optimization</Typography>
                                <Typography variant="body1">
                                    Receive optimized schedules for client visits, considering factors like location, urgency, and availability.
                                </Typography>
                                <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
                                    View Schedule
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Guard Performance Monitoring & Feedback</Typography>
                                <Typography variant="body1">
                                    Monitor guard performance in real-time and provide feedback, supported by machine learning-driven coaching tools.
                                </Typography>
                                <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
                                    Monitor Guards
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Issue Resolution between Guards and Clients</Typography>
                                <Typography variant="body1">
                                    Automated tools to help resolve conflicts between guards and clients quickly and fairly.
                                </Typography>
                                <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
                                    Resolve Issues
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Live Location Tracking (Guards, with advanced privacy controls)</Typography>
                                <Typography variant="body1">
                                    Track the live location of guards, with privacy controls to ensure data is used responsibly.
                                </Typography>
                                <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
                                    Track Location
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Incident Collaboration with Guards</Typography>
                                <Typography variant="body1">
                                    Collaborate with guards on incident resolution, including augmented reality support for on-site guidance.
                                </Typography>
                                <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
                                    Collaborate on Incidents
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default FieldOfficerDashboard;
