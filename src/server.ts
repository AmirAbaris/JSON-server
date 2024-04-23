import express, { Request, Response } from 'express';
import {
    cardListData,
    categoryItemData,
    categoryListData,
    categoryManagementData,
    freeGameItemData,
    freeGameListData,
    gameSliderData,
    highlightPreviewData,
    highlightSmallData,
    homeCardActionData,
    homeCardGameData,
    homeCardData,
    priceLabelData
} from './data'; // Assuming the data files are in the same directory as your server file

const app = express();
const PORT = 3000;

// Endpoint to serve card list data
app.get('/card-list-data', (req: Request, res: Response) => {
    res.json(cardListData);
});

// Endpoint to serve category item data
app.get('/category-item-data', (req: Request, res: Response) => {
    res.json(categoryItemData);
});

// Endpoint to serve category list data
app.get('/category-list-data', (req: Request, res: Response) => {
    res.json(categoryListData);
});

// Endpoint to serve category management data
app.get('/category-management-data', (req: Request, res: Response) => {
    res.json(categoryManagementData);
});

// Endpoint to serve free game item data
app.get('/free-game-item-data', (req: Request, res: Response) => {
    res.json(freeGameItemData);
});

// Endpoint to serve free game list data
app.get('/free-game-list-data', (req: Request, res: Response) => {
    res.json(freeGameListData);
});

// Endpoint to serve game slider data
app.get('/game-slider-data', (req: Request, res: Response) => {
    res.json(gameSliderData);
});

// Endpoint to serve highlight preview data
app.get('/highlight-preview-data', (req: Request, res: Response) => {
    res.json(highlightPreviewData);
});

// Endpoint to serve highlight small data
app.get('/highlight-small-data', (req: Request, res: Response) => {
    res.json(highlightSmallData);
});

// Endpoint to serve home card action data
app.get('/home-card-action-data', (req: Request, res: Response) => {
    res.json(homeCardActionData);
});

// Endpoint to serve home card game data
app.get('/home-card-game-data', (req: Request, res: Response) => {
    res.json(homeCardGameData);
});

// Endpoint to serve home card data
app.get('/home-card-data', (req: Request, res: Response) => {
    res.json(homeCardData);
});

// Endpoint to serve price label data
app.get('/price-label-data', (req: Request, res: Response) => {
    res.json(priceLabelData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});