import { CategoryType } from "./enums/category-type.enum";
import { GameType } from "./enums/game-type.enum";
import { HighlightButtonEnum } from "./enums/highlight-button.enum";
import { CardListInputModel } from "./models/card-list-input.model";
import { CategoryItemInputModel } from "./models/category-item-input.model";
import { CategoryListInputModel } from "./models/category-list-input.model";
import { CategoryManagementInputModel } from "./models/category-management-input.model";
import { FreeGameItemInputModel } from "./models/free-game-item-input.model";
import { FreeGameListInputModel } from "./models/free-game-list-input.model";
import { GameSliderItemInputModel } from "./models/game-slider-item-input.model";
import { HighlightPreviewItemInputModel } from "./models/highlight-preview-item-input.model";
import { HighlightSmallItemInputModel } from "./models/highlight-small-item-input.model";
import { HomeCardActionInputModel } from "./models/home-card-action-input.model";
import { HomeCardGameInputModel } from "./models/home-card-game-input.model";
import { HomeCardInputModel } from "./models/home-card-input.model";
import { PriceLabelModel } from "./models/price-label.model";

export const cardListData: CardListInputModel = {
    homeCardActionData: [
        {
            actionName: "Action 1",
            cardData: {
                cover: "../assets/card-covers/card1.jpg",
                name: "Card 1",
                hasWishlist: true,
                extraItem1: true,
                extraItem2: false
            },
            clickCardFn: () => { },
            extraItem1: true,
            extraItem2: false
        },
        {
            actionName: "Action 2",
            cardData: {
                cover: "../assets/card-covers/card2.jpg",
                name: "Card 2",
                hasWishlist: false,
                extraItem1: true,
                extraItem2: false
            },
            clickCardFn: () => { },
            extraItem1: false,
            extraItem2: true
        }
    ],
    homeCardGameData: [
        {
            discountPercent: 10,
            basePrice: 50,
            finalPrice: 45,
            cardData: {
                cover: "../assets/card-covers/card3.jpg",
                name: "Game 1",
                hasWishlist: true,
                extraItem1: true,
                extraItem2: false
            },
            extraItem1: false,
            extraItem2: true
        },
        {
            discountPercent: 20,
            basePrice: 60,
            finalPrice: 48,
            cardData: {
                cover: "../assets/card-covers/card4.jpg",
                name: "Game 2",
                hasWishlist: true,
                extraItem1: true,
                extraItem2: false
            },
            extraItem1: true,
            extraItem2: false
        }
    ],
    extraItem1: true,
    extraItem2: false
};

export const categoryItemData: CategoryItemInputModel[] = [
    {
        id: "1",
        thumbnailCover: "../assets/category-covers/cat01.jpg",
        name: "Category 1",
        discountPercent: 10,
        basePrice: 50,
        finalPrice: 45,
        isFree: false,
        publishDate: new Date(),
        isPublished: true,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "2",
        thumbnailCover: "../assets/category-covers/cat02.jpg",
        name: "Category 2",
        discountPercent: 20,
        basePrice: 60,
        finalPrice: 48,
        isFree: true,
        publishDate: new Date(),
        isPublished: true,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "20",
        thumbnailCover: "../assets/category-covers/cat03.jpg",
        name: "Category 20",
        discountPercent: 30,
        basePrice: 70,
        finalPrice: 63,
        isFree: false,
        publishDate: new Date(),
        isPublished: true,
        extraItem1: true,
        extraItem2: true
    }
];

export const categoryListData: CategoryListInputModel[] = [
    {
        title: "Top Sellers",
        categoryType: CategoryType.TOP_SELLERS,
        categoryItem: [
            {
                id: "1",
                thumbnailCover: "../assets/category-covers/cat01.jpg",
                name: "Item 1",
                discountPercent: 10,
                basePrice: 50,
                finalPrice: 45,
                isFree: false,
                publishDate: new Date(),
                isPublished: true,
                extraItem1: true,
                extraItem2: false
            },
            {
                id: "2",
                thumbnailCover: "../assets/category-covers/cat02.jpg",
                name: "Item 2",
                discountPercent: 20,
                basePrice: 60,
                finalPrice: 48,
                isFree: true,
                publishDate: new Date(),
                isPublished: true,
                extraItem1: false,
                extraItem2: true
            },
        ],
        extraItem1: true,
        extraItem2: false
    },
    {
        title: "Most Played",
        categoryType: CategoryType.MOST_PLAYED,
        categoryItem: [
            {
                id: "3",
                thumbnailCover: "../assets/category-covers/cat03.jpg",
                name: "Item 3",
                discountPercent: 15,
                basePrice: 70,
                finalPrice: 63,
                isFree: false,
                publishDate: new Date(),
                isPublished: true,
                extraItem1: true,
                extraItem2: true
            },
            {
                id: "4",
                thumbnailCover: "../assets/category-covers/cat04.jpg",
                name: "Item 4",
                discountPercent: 25,
                basePrice: 80,
                finalPrice: 60,
                isFree: true,
                publishDate: new Date(),
                isPublished: true,
                extraItem1: false,
                extraItem2: true
            },
        ],
        extraItem1: false,
        extraItem2: true
    }
];

export const categoryManagementData: CategoryManagementInputModel = {
    categoryListData: [
        {
            title: "Top Sellers",
            categoryType: CategoryType.TOP_SELLERS,
            categoryItem: [
                {
                    id: "1",
                    thumbnailCover: "../assets/category-covers/cat01.jpg",
                    name: "Item 1",
                    discountPercent: 10,
                    basePrice: 50,
                    finalPrice: 45,
                    isFree: false,
                    publishDate: new Date(),
                    isPublished: true,
                    extraItem1: true,
                    extraItem2: false
                },
                {
                    id: "2",
                    thumbnailCover: "../assets/category-covers/cat02.jpg",
                    name: "Item 2",
                    discountPercent: 20,
                    basePrice: 60,
                    finalPrice: 48,
                    isFree: true,
                    publishDate: new Date(),
                    isPublished: true,
                    extraItem1: false,
                    extraItem2: true
                },
            ],
            extraItem1: true,
            extraItem2: false
        },
        {
            title: "Most Played",
            categoryType: CategoryType.MOST_PLAYED,
            categoryItem: [
                {
                    id: "3",
                    thumbnailCover: "../assets/category-covers/cat03.jpg",
                    name: "Item 3",
                    discountPercent: 15,
                    basePrice: 70,
                    finalPrice: 63,
                    isFree: false,
                    publishDate: new Date(),
                    isPublished: true,
                    extraItem1: true,
                    extraItem2: true
                },
                {
                    id: "4",
                    thumbnailCover: "../assets/category-covers/cat04.jpg",
                    name: "Item 4",
                    discountPercent: 25,
                    basePrice: 80,
                    finalPrice: 60,
                    isFree: true,
                    publishDate: new Date(),
                    isPublished: true,
                    extraItem1: false,
                    extraItem2: true
                },
            ],
            extraItem1: false,
            extraItem2: true
        },
    ],
    extraItem1: true,
    extraItem2: false
};

export const freeGameItemData: FreeGameItemInputModel[] = [
    {
        id: "1",
        cover: "../assets/free-covers/free1.jpeg",
        name: "Game 1",
        freeStartDate: new Date("2024-04-01"),
        freeEndDate: new Date("2024-04-07"),
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "2",
        cover: "../assets/free-covers/free2.jpeg",
        name: "Game 2",
        freeStartDate: new Date("2024-04-10"),
        freeEndDate: new Date("2024-04-17"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "20",
        cover: "../assets/free-covers/free3.jpeg",
        name: "Game 20",
        freeStartDate: new Date("2024-04-25"),
        freeEndDate: new Date("2024-05-02"),
        extraItem1: true,
        extraItem2: true
    }
];

export const freeGameListData: FreeGameListInputModel = {
    freeGameItemData: [
        {
            id: "1",
            cover: "../assets/free-covers/free1.jpeg",
            name: "Game 1",
            freeStartDate: new Date("2024-04-01"),
            freeEndDate: new Date("2024-04-07"),
            extraItem1: true,
            extraItem2: false
        },
        {
            id: "2",
            cover: "../assets/free-covers/free2.jpeg",
            name: "Game 2",
            freeStartDate: new Date("2024-04-10"),
            freeEndDate: new Date("2024-04-17"),
            extraItem1: false,
            extraItem2: true
        },
    ],
    extraItem1: true,
    extraItem2: false
};

export const gameSliderData: GameSliderItemInputModel[] = [
    {
        id: "1",
        cover: "../assets/slider-covers/sl1.jpeg",
        name: "Game 1",
        discountPercent: 10,
        basePrice: 50,
        finalPrice: 45,
        isFree: false,
        type: GameType.BASE_GAME,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "2",
        cover: "../assets/slider-covers/sl2.jgep",
        name: "Game 2",
        discountPercent: 20,
        basePrice: 60,
        finalPrice: 48,
        isFree: true,
        type: GameType.EDITION,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "20",
        cover: "../assets/slider-covers/sl3.jpeg",
        name: "Game 20",
        discountPercent: 15,
        basePrice: 70,
        finalPrice: 63,
        isFree: false,
        type: GameType.BASE_GAME,
        extraItem1: true,
        extraItem2: true
    }
];

export const highlightPreviewData: HighlightPreviewItemInputModel[] = [
    {
        id: "1",
        cover: "../assets/preview-covers/prev1.avif",
        logo: "logo1.jpg",
        description: "Description for item 1",
        price: 10,
        highlightButtonType: HighlightButtonEnum.PUBLISHED,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "2",
        cover: "../assets/preview-covers/prev2.jpg",
        logo: "logo2.jpg",
        description: "Description for item 2",
        price: 20,
        highlightButtonType: HighlightButtonEnum.FREE,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "20",
        cover: "../assets/preview-covers/prev3.jpg",
        logo: "logo20.jpg",
        description: "Description for item 20",
        price: 15,
        highlightButtonType: HighlightButtonEnum.PUBLISHED,
        extraItem1: true,
        extraItem2: true
    }
];

export const highlightSmallData: HighlightSmallItemInputModel[] = [
    {
        cover: "../assets/small-covers/sm1.png",
        name: "Item 1",
        extraItem1: true,
        extraItem2: false
    },
    {
        cover: "../assets/small-covers/sm2.png",
        name: "Item 2",
        extraItem1: false,
        extraItem2: true
    },
    {
        cover: "../assets/small-covers/sm3.png",
        name: "Item 3",
        extraItem1: true,
        extraItem2: true
    }
];

export const homeCardActionData: HomeCardActionInputModel[] = [
    {
        actionName: "Action 1",
        cardData: {
            cover: "../assets/home-covers/hm1.jpg",
            name: "Card 1",
            hasWishlist: true,
            extraItem1: true,
            extraItem2: false
        },
        clickCardFn: () => { },
        extraItem1: true,
        extraItem2: false
    },
    {
        actionName: "Action 2",
        cardData: {
            cover: "../assets/home-covers/hm2.jpeg",
            name: "Card 2",
            hasWishlist: false,
            extraItem1: true,
            extraItem2: false
        },
        clickCardFn: () => { },
        extraItem1: false,
        extraItem2: true
    },
    {
        actionName: "Action 3",
        cardData: {
            cover: "../assets/home-covers/hm3.jpg",
            name: "Card 3",
            hasWishlist: true,
            extraItem1: true,
            extraItem2: true
        },
        clickCardFn: () => { },
        extraItem1: true,
        extraItem2: true
    }
];

export const homeCardGameData: HomeCardGameInputModel[] = [
    {
        discountPercent: 10,
        basePrice: 50,
        finalPrice: 45,
        cardData: {
            cover: "../assets/home-covers/hm1.jpg",
            name: "Game 1",
            hasWishlist: true,
            extraItem1: true,
            extraItem2: false
        },
        extraItem1: false,
        extraItem2: true
    },
    {
        discountPercent: 20,
        basePrice: 60,
        finalPrice: 48,
        cardData: {
            cover: "../assets/home-covers/hm2.jpeg",
            name: "Game 2",
            hasWishlist: true,
            extraItem1: true,
            extraItem2: false
        },
        extraItem1: true,
        extraItem2: false
    },
    {
        discountPercent: 15,
        basePrice: 70,
        finalPrice: 63,
        cardData: {
            cover: "../assets/home-covers/hm3.jpg",
            name: "Game 3",
            hasWishlist: true,
            extraItem1: true,
            extraItem2: true
        },
        extraItem1: false,
        extraItem2: true
    }
];

export const homeCardData: HomeCardInputModel[] = [
    {
        id: "1",
        cover: "../assets/home-covers/hm1.jpg",
        description: "Description for Card 1",
        name: "Card 1",
        hasWishlist: true,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "2",
        cover: "../assets/home-covers/hm2.jpeg",
        description: "Description for Card 2",
        name: "Card 2",
        hasWishlist: false,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "20",
        cover: "../assets/home-covers/hm3.jpg",
        description: "Description for Card 3",
        name: "Card 3",
        hasWishlist: true,
        extraItem1: true,
        extraItem2: true
    }
];

export const priceLabelData: PriceLabelModel[] = [
    {
        discountPercent: 10,
        basePrice: 50,
        finalPrice: 45,
        extraItem1: true,
        extraItem2: false
    },
    {
        discountPercent: 20,
        basePrice: 60,
        finalPrice: 48,
        extraItem1: false,
        extraItem2: true
    },
    {
        discountPercent: 15,
        basePrice: 70,
        finalPrice: 63,
        extraItem1: true,
        extraItem2: true
    }
];
