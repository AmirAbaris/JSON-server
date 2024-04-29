import { HighlightButtonEnum } from "../enums/highlight-button.enum";

export interface HighlightDTO {
    name: string;
    id: string;
    cover: string;
    thumbnailCover: string;
    logo: string
    description: string
    price?: number;
    highlightButtonType: HighlightButtonEnum;
    extraItem1: boolean;
    extraItem2: boolean;
}