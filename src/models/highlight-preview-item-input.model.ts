import { HighlightButtonEnum } from "../enums/highlight-button.enum";

export interface HighlightPreviewItemInputModel {
    id: string;
    cover: string;
    logo: string
    description: string
    price?: number;
    highlightButtonType: HighlightButtonEnum;
    extraItem1: boolean;
    extraItem2: boolean;
}