"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.priceLabelData = exports.homeCardData = exports.homeCardGameData = exports.homeCardActionData = exports.highlightSmallData = exports.highlightPreviewData = exports.gameSliderData = exports.freeGameListData = exports.freeGameItemData = exports.categoryManagementData = exports.categoryListData = exports.categoryItemData = exports.cardListData = void 0;
const category_type_enum_1 = require("./enums/category-type.enum");
const game_type_enum_1 = require("./enums/game-type.enum");
const highlight_button_enum_1 = require("./enums/highlight-button.enum");
exports.cardListData = {
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
exports.categoryItemData = [
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
exports.categoryListData = [
    {
        title: "Top Sellers",
        categoryType: category_type_enum_1.CategoryType.TOP_SELLERS,
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
        categoryType: category_type_enum_1.CategoryType.MOST_PLAYED,
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
exports.categoryManagementData = {
    categoryListData: [
        {
            title: "Top Sellers",
            categoryType: category_type_enum_1.CategoryType.TOP_SELLERS,
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
            categoryType: category_type_enum_1.CategoryType.MOST_PLAYED,
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
exports.freeGameItemData = [
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
exports.freeGameListData = {
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
exports.gameSliderData = [
    {
        id: "1",
        cover: "../assets/slider-covers/sl1.jpeg",
        name: "Game 1",
        discountPercent: 10,
        basePrice: 50,
        finalPrice: 45,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
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
        type: game_type_enum_1.GameType.EDITION,
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
        type: game_type_enum_1.GameType.BASE_GAME,
        extraItem1: true,
        extraItem2: true
    }
];
exports.highlightPreviewData = [
    {
        id: "1",
        cover: "../assets/preview-covers/prev1.avif",
        logo: "logo1.jpg",
        description: "Description for item 1",
        price: 10,
        highlightButtonType: highlight_button_enum_1.HighlightButtonEnum.PUBLISHED,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "2",
        cover: "../assets/preview-covers/prev2.jpg",
        logo: "logo2.jpg",
        description: "Description for item 2",
        price: 20,
        highlightButtonType: highlight_button_enum_1.HighlightButtonEnum.FREE,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "20",
        cover: "../assets/preview-covers/prev3.jpg",
        logo: "logo20.jpg",
        description: "Description for item 20",
        price: 15,
        highlightButtonType: highlight_button_enum_1.HighlightButtonEnum.PUBLISHED,
        extraItem1: true,
        extraItem2: true
    }
];
exports.highlightSmallData = [
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
exports.homeCardActionData = [
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
exports.homeCardGameData = [
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
exports.homeCardData = [
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
exports.priceLabelData = [
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
