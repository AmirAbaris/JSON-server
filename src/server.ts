import express, { Request, Response } from 'express';
import { comingSoonGameData, fortniteData, freeItemData, highlightData, homeAction, mostPopularItems, newReleaseGameData, recentlyUploadedItems, sliderData, topPlayedRatedGameData, trendingItems } from './data';

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

app.get('/new-release-data', (_req: Request, res: Response) => {
    res.json(newReleaseGameData);
});

app.get('/top-player-data', (_req: Request, res: Response) => {
    res.json(topPlayedRatedGameData);
});

app.get('/coming-soon-data', (_req: Request, res: Response) => {
    res.json(comingSoonGameData);
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