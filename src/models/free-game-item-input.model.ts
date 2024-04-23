export interface FreeGameItemInputModel {
  id: string;
  cover: string;
  name: string;
  freeStartDate?: Date;
  freeEndDate: Date;
  extraItem1: boolean;
  extraItem2: boolean;
}
