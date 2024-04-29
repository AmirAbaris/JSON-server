import { CategoryType } from "../enums/category-type.enum";
import { GameType } from "../enums/game-type.enum";

export interface CardDTO {
    id: string;
    name: string;
    discountPercent?: number;
    basePrice?: number;
    finalPrice?: number;
    isFree: boolean;
    type: GameType;
    cover: string;
    thumbnailCover: string;
    publishDate?: Date;
    isPublished: boolean;
    title: string;
    categoryType: CategoryType;
    extraItem1: boolean;
    extraItem2: boolean;
}