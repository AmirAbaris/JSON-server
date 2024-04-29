export interface BannerDTO {
    id: string;
    cover: string;
    name: string;
    freeStartDate?: Date;
    freeEndDate: Date;
    actionName: string;
    clickCardFn: () => void;
    discountPercent?: number;
    basePrice?: number;
    finalPrice?: number;
    description?: string;
    hasWishlist: boolean;
    extraItem1: boolean;
    extraItem2: boolean;
}