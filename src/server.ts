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
} from './data';

const app = express();
const PORT = 3000;

// Endpoint to serve card list data
app.get('/card-list-data', (_req: Request, res: Response) => {
    res.send(cardListData);
});

// Endpoint to serve category item data
app.get('/category-item-data', (_req: Request, res: Response) => {
    res.send(categoryItemData);
});

// Endpoint to serve category list data
app.get('/category-list-data', (_req: Request, res: Response) => {
    res.send(categoryListData);
});

// Endpoint to serve category management data
app.get('/category-management-data', (_req: Request, res: Response) => {
    res.send(categoryManagementData);
});

// Endpoint to serve free game item data
app.get('/free-game-item-data', (_req: Request, res: Response) => {
    res.send(freeGameItemData);
});

// Endpoint to serve free game list data
app.get('/free-game-list-data', (_req: Request, res: Response) => {
    res.send(freeGameListData);
});

// Endpoint to serve game slider data
app.get('/game-slider-data', (_req: Request, res: Response) => {
    res.send(gameSliderData);
});

// Endpoint to serve highlight preview data
app.get('/highlight-preview-data', (_req: Request, res: Response) => {
    res.send(highlightPreviewData);
});

// Endpoint to serve highlight small data
app.get('/highlight-small-data', (_req: Request, res: Response) => {
    res.send(highlightSmallData);
});

// Endpoint to serve home card action data
app.get('/home-card-action-data', (_req: Request, res: Response) => {
    res.send(homeCardActionData);
});

// Endpoint to serve home card game data
app.get('/home-card-game-data', (_req: Request, res: Response) => {
    res.send(homeCardGameData);
});

// Endpoint to serve home card data
app.get('/home-card-data', (_req: Request, res: Response) => {
    res.send(homeCardData);
});

// Endpoint to serve price label data
app.get('/price-label-data', (_req: Request, res: Response) => {
    res.send(priceLabelData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});