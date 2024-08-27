import bcrypt from 'bcrypt';

const users = [
    {
        id: 1,
        email: 'admin@example.com',
        password: bcrypt.hashSync('password', 10), // Storing hashed passwords
        role: 'admin'
    },
    {
        id: 2,
        email: 'guard@example.com',
        password: bcrypt.hashSync('password123', 10), // Storing hashed passwords
        role: 'guard'
    },
    {
        id: 3,
        email: 'fieldofficer@example.com',
        password: bcrypt.hashSync('fieldpassword', 10), // Storing hashed passwords
        role: 'field-officer'
    },
    {
        id: 4,
        email: 'client@example.com',
        password: bcrypt.hashSync('clientpassword', 10), // Storing hashed passwords
        role: 'client'
    }
    // Add more users as needed
];

export { users };
