"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./data");
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/highlight-data', (_req, res) => {
    res.json(data_1.highlightData);
});
app.get('/slider-data', (_req, res) => {
    res.json(data_1.sliderData);
});
app.get('/home-action-data', (_req, res) => {
    res.json(data_1.homeAction);
});
app.get('/free-item-data', (_req, res) => {
    res.json(data_1.freeItemData);
});
app.get('/fortnite-data', (_req, res) => {
    res.json(data_1.fortniteData);
});
app.get('/new-release-data', (_req, res) => {
    res.json(data_1.newReleaseGameData);
});
app.get('/top-player-data', (_req, res) => {
    res.json(data_1.topPlayedRatedGameData);
});
app.get('/coming-soon-data', (_req, res) => {
    res.json(data_1.comingSoonGameData);
});
app.get('/trending-items-data', (_req, res) => {
    res.json(data_1.trendingItems);
});
app.get('/most-popular-items-data', (_req, res) => {
    res.json(data_1.mostPopularItems);
});
app.get('/recently-uploaded-items-data', (_req, res) => {
    res.json(data_1.recentlyUploadedItems);
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
