import express, { Request, Response } from 'express';
import { categoryItem, fortniteData, freeItemData, highlightData, homeAction, mostPopularItems, recentlyUploadedItems, sliderData, trendingItems } from './data';

const app = express();
const PORT = 3000;

app.get('/highlight-data', (_req: Request, res: Response) => {
    res.json(highlightData);
});

app.get('/slider-data', (_req: Request, res: Response) => {
    res.json(sliderData);
});

app.get('/home-action-data', (_req: Request, res: Response) => {
    res.json(homeAction);
});

app.get('/free-item-data', (_req: Request, res: Response) => {
    res.json(freeItemData);
});

app.get('/fortnite-data', (_req: Request, res: Response) => {
    res.json(fortniteData);
});

app.get('/category-item-data', (_req: Request, res: Response) => {
    res.json(categoryItem);
});

app.get('/trending-items-data', (_req: Request, res: Response) => {
    res.json(trendingItems);
});

app.get('/most-popular-items-data', (_req: Request, res: Response) => {
    res.json(mostPopularItems);
});

app.get('/recently-uploaded-items-data', (_req: Request, res: Response) => {
    res.json(recentlyUploadedItems);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});