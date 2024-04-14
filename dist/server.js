"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
// Sample JSON data
const jsonData = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' }
];
// Endpoint to serve JSON data
app.get('/data', (req, res) => {
    res.json(jsonData);
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
