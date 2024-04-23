import { FreeGameItemInputModel } from "./free-game-item-input.model";

export interface FreeGameListInputModel {
    freeGameItemData: FreeGameItemInputModel[];
    extraItem1: boolean;
    extraItem2: boolean;
}