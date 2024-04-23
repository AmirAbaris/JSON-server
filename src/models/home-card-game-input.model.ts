import { HomeCardInputModel } from "./home-card-input.model";

export interface HomeCardGameInputModel {
    discountPercent?: number;
    basePrice?: number;
    finalPrice?: number;
    cardData: HomeCardInputModel;
    extraItem1: boolean;
    extraItem2: boolean;
}