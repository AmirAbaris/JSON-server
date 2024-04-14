import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Sample JSON data
const jsonData = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' }
];

// Endpoint to serve JSON data
app.get('/data', (req: Request, res: Response) => {
    res.json(jsonData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
