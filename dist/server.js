"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path = __importStar(require("path"));
const data_1 = require("./data");
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)());
app.use('/assets', express_1.default.static(path.join(__dirname, 'assets')));
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
