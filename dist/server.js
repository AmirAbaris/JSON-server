"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./data");
const app = (0, express_1.default)();
const PORT = 3000;
// Sample data for HighlightDTO, BannerDTO, and CardDTO
const highlightDataDto = data_1.highlightData;
const bannerDataDto = data_1.bannerData;
const cardDataDto = data_1.cardData;
// Endpoint to serve HighlightDTO data
app.get('/highlight-data', (_req, res) => {
    res.json(highlightDataDto);
});
// Endpoint to serve BannerDTO data
app.get('/banner-data', (_req, res) => {
    res.json(bannerDataDto);
});
// Endpoint to serve CardDTO data
app.get('/card-data', (_req, res) => {
    res.json(cardDataDto);
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
