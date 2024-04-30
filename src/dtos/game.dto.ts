import { CategoryType } from "../enums/category-type.enum";
import { GameType } from "../enums/game-type.enum";
import { HighlightButtonEnum } from "../enums/highlight-button.enum";

export interface GameDto {
    id?: string;
    name?: string;
    cover: string;
    thumbnailCover?: string;
    logo?: string
    description?: string
    price?: number;
    discountPercent?: number;
    basePrice?: number;
    finalPrice?: number;
    isFree?: boolean;
    freeStartDate?: Date;
    freeEndDate?: Date;
    type?: GameType;
    isPublished?: boolean;
    publishDate?: Date;
    extraItem1: boolean;
    extraItem2: boolean;
}