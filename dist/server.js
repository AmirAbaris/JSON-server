"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./data");
const app = (0, express_1.default)();
const PORT = 3000;
// Endpoint to serve card list data
app.get('/card-list-data', (_req, res) => {
    res.send(data_1.cardListData);
});
// Endpoint to serve category item data
app.get('/category-item-data', (_req, res) => {
    res.send(data_1.categoryItemData);
});
// Endpoint to serve category list data
app.get('/category-list-data', (_req, res) => {
    res.send(data_1.categoryListData);
});
// Endpoint to serve category management data
app.get('/category-management-data', (_req, res) => {
    res.send(data_1.categoryManagementData);
});
// Endpoint to serve free game item data
app.get('/free-game-item-data', (_req, res) => {
    res.send(data_1.freeGameItemData);
});
// Endpoint to serve free game list data
app.get('/free-game-list-data', (_req, res) => {
    res.send(data_1.freeGameListData);
});
// Endpoint to serve game slider data
app.get('/game-slider-data', (_req, res) => {
    res.send(data_1.gameSliderData);
});
// Endpoint to serve highlight preview data
app.get('/highlight-preview-data', (_req, res) => {
    res.send(data_1.highlightPreviewData);
});
// Endpoint to serve highlight small data
app.get('/highlight-small-data', (_req, res) => {
    res.send(data_1.highlightSmallData);
});
// Endpoint to serve home card action data
app.get('/home-card-action-data', (_req, res) => {
    res.send(data_1.homeCardActionData);
});
// Endpoint to serve home card game data
app.get('/home-card-game-data', (_req, res) => {
    res.send(data_1.homeCardGameData);
});
// Endpoint to serve home card data
app.get('/home-card-data', (_req, res) => {
    res.send(data_1.homeCardData);
});
// Endpoint to serve price label data
app.get('/price-label-data', (_req, res) => {
    res.send(data_1.priceLabelData);
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
