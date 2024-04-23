export interface CategoryItemInputModel {
  id: string;
  thumbnailCover: string;
  name: string;
  discountPercent: number;
  basePrice: number;
  finalPrice: number;
  isFree: boolean;
  publishDate?: Date;
  isPublished: boolean;
  extraItem1: boolean;
  extraItem2: boolean;
}
