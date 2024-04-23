import { HomeCardInputModel } from "./home-card-input.model";

export interface HomeCardActionInputModel {
    actionName: string;
    cardData: HomeCardInputModel;
    clickCardFn: () => void;
    extraItem1: boolean;
    extraItem2: boolean;
}