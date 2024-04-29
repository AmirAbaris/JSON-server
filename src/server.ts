import express, { Request, Response } from 'express';
import { HighlightDTO } from './dtos/highlight.dto';
import { BannerDTO } from './dtos/banner.dto';
import { CardDTO } from './dtos/card.dto';
import { bannerData, cardData, highlightData } from './data';

const app = express();
const PORT = 3000;

// Sample data for HighlightDTO, BannerDTO, and CardDTO
const highlightDataDto: HighlightDTO[] = highlightData;
const bannerDataDto: BannerDTO[] = bannerData;
const cardDataDto: CardDTO[] = cardData;

// Endpoint to serve HighlightDTO data
app.get('/highlight-data', (_req: Request, res: Response) => {
    res.json(highlightDataDto);
});

// Endpoint to serve BannerDTO data
app.get('/banner-data', (_req: Request, res: Response) => {
    res.json(bannerDataDto);
});

// Endpoint to serve CardDTO data
app.get('/card-data', (_req: Request, res: Response) => {
    res.json(cardDataDto);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});