// src/pages/Tasks.js

import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Tasks = () => {
  const tasks = [
    { id: 1, description: 'Patrol area A' },
    { id: 2, description: 'Check security cameras' },
    // Add more tasks as needed
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Tasks
      </Typography>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemText primary={task.description} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Tasks;