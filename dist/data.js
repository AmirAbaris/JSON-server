"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recentlyUploadedItems = exports.mostPopularItems = exports.trendingItems = exports.categoryItem = exports.fortniteData = exports.freeItemData = exports.homeAction = exports.sliderData = exports.highlightData = void 0;
const category_type_enum_1 = require("./enums/category-type.enum");
const game_type_enum_1 = require("./enums/game-type.enum");
const highlight_button_enum_1 = require("./enums/highlight-button.enum");
exports.highlightData = [
    // 1
    {
        name: "Example Highlight 1",
        id: "1",
        cover: "../assets/preview-covers/prev1.jpg",
        thumbnailCover: "../assets/small-covers/sm1.jpg",
        logo: "../assets/prev-logo-covers/lg1.png",
        description: "Description for Example Highlight 1",
        price: 29.99,
        highlightButtonType: highlight_button_enum_1.HighlightButtonEnum.PUBLISHED,
        extraItem1: true,
        extraItem2: false
    },
    {
        name: "Example Highlight 2",
        id: "2",
        cover: "../assets/preview-covers/prev2.jpeg",
        thumbnailCover: "../assets/small-covers/sm2.png",
        logo: "../assets/prev-logo-covers/lg2.png",
        description: "Description for Example Highlight 2",
        price: 19.99,
        highlightButtonType: highlight_button_enum_1.HighlightButtonEnum.ARTICLE,
        extraItem1: false,
        extraItem2: true
    },
    {
        name: "Example Highlight 3",
        id: "3",
        cover: "../assets/preview-covers/prev3.jpg",
        thumbnailCover: "../assets/small-covers/sm3.jpg",
        logo: "../assets/prev-logo-covers/lg3.png",
        description: "Description for Example Highlight 3",
        price: 0,
        highlightButtonType: highlight_button_enum_1.HighlightButtonEnum.FREE,
        extraItem1: false,
        extraItem2: true
    },
    {
        name: "Example Highlight 4",
        id: "4",
        cover: "../assets/preview-covers/prev4.jpeg",
        thumbnailCover: "../assets/small-covers/sm4.jpeg",
        logo: "../assets/prev-logo-covers/lg4.png",
        description: "Description for Example Highlight 3",
        price: 19.99,
        highlightButtonType: highlight_button_enum_1.HighlightButtonEnum.ARTICLE,
        extraItem1: false,
        extraItem2: true
    },
    {
        name: "Example Highlight 5",
        id: "5",
        cover: "../assets/preview-covers/prev5.jpg",
        thumbnailCover: "../assets/small-covers/sm5.jpg",
        logo: "../assets/prev-logo-covers/lg4.png",
        description: "Description for Example Highlight 4",
        price: 19.99,
        highlightButtonType: highlight_button_enum_1.HighlightButtonEnum.PUBLISHED,
        extraItem1: false,
        extraItem2: true
    },
    {
        name: "Example Highlight 6",
        id: "6",
        cover: "../assets/preview-covers/prev6.jpg",
        thumbnailCover: "../assets/small-covers/sm6.jpg",
        logo: "../assets/prev-logo-covers/lg6.jpg",
        description: "Description for Example Highlight 6",
        price: 19.99,
        highlightButtonType: highlight_button_enum_1.HighlightButtonEnum.PUBLISHED,
        extraItem1: false,
        extraItem2: true
    }
];
exports.sliderData = [
    // 2
    {
        id: "1",
        name: "Example Card 1",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card1.jpg",
        categoryType: category_type_enum_1.CategoryType.TOP_SELLERS,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "2",
        name: "Example Card 2",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card2.jpeg",
        categoryType: category_type_enum_1.CategoryType.TOP_SELLERS,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "3",
        name: "Example Card 3",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card3.jpg",
        categoryType: category_type_enum_1.CategoryType.TOP_SELLERS,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "4",
        name: "Example Card 4",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card4.jpg",
        categoryType: category_type_enum_1.CategoryType.TOP_SELLERS,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "5",
        name: "Example Card 5",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card5.jpg",
        categoryType: category_type_enum_1.CategoryType.TOP_SELLERS,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "6",
        name: "Example Card 6",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card6.jpg",
        categoryType: category_type_enum_1.CategoryType.TOP_SELLERS,
        extraItem1: true,
        extraItem2: false
    }
];
exports.homeAction = [
    // 3
    {
        id: "1",
        cover: "../assets/free-covers/hm1.jpg",
        name: "Example Banner 3",
        description: "Description for Example Banner 1",
        hasWishlist: false,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "2",
        cover: "../assets/free-covers/h24.jpeg",
        name: "Example Banner 4",
        description: "Description for Example Banner 2",
        hasWishlist: false,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "3",
        cover: "../assets/free-covers/hm3.jpeg",
        name: "Example Banner 3",
        discountPercent: 20,
        basePrice: 49.99,
        finalPrice: 39.99,
        description: "Description for Example Banner 3",
        hasWishlist: true,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "4",
        cover: "../assets/free-covers/hm4.jpg",
        name: "Example Banner 4",
        finalPrice: 39.99,
        description: "Description for Example Banner 4",
        hasWishlist: true,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "5",
        cover: "../assets/free-covers/hm5.jpg",
        name: "Example Banner 5",
        finalPrice: 39.99,
        description: "Description for Example Banner 5",
        hasWishlist: true,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "6",
        cover: "../assets/free-covers/hm6.jpg",
        name: "Example Banner 6",
        finalPrice: 39.99,
        description: "Description for Example Banner 6",
        hasWishlist: true,
        extraItem1: true,
        extraItem2: false
    }
];
exports.freeItemData = [
    // 4
    {
        id: "7",
        cover: "../assets/free-covers/hm1.jpg",
        name: "Example Banner 7",
        freeStartDate: new Date("2024-05-01"),
        freeEndDate: new Date("2024-05-15"),
        discountPercent: 20,
        basePrice: 49.99,
        finalPrice: 39.99,
        description: "Description for Example Banner 7",
        hasWishlist: true,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "8",
        cover: "../assets/free-covers/hm2.jpeg",
        name: "Example Banner 8",
        freeStartDate: new Date("2024-05-01"),
        freeEndDate: new Date("2024-05-15"),
        discountPercent: 20,
        basePrice: 49.99,
        finalPrice: 39.99,
        description: "Description for Example Banner 8",
        hasWishlist: true,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "9",
        cover: "../assets/free-covers/hm3.jpg",
        name: "Example Banner 2",
        freeStartDate: new Date("2024-05-01"),
        freeEndDate: new Date("2024-05-15"),
        discountPercent: 20,
        basePrice: 49.99,
        finalPrice: 39.99,
        description: "Description for Example Banner 9",
        hasWishlist: true,
        extraItem1: true,
        extraItem2: false
    }
];
exports.fortniteData = [
    // 5
    {
        id: "10",
        cover: "../assets/free-covers/hm1.jpg",
        name: "Example Banner 10",
        description: "Description for Example Banner 10",
        hasWishlist: false,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "11",
        cover: "../assets/free-covers/hm2.jpeg",
        name: "Example Banner 11",
        description: "Description for Example Banner 11",
        hasWishlist: false,
        extraItem1: true,
        extraItem2: false
    },
];
exports.categoryItem = [
    // 6
    {
        id: "12",
        name: "Example Card 12",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        cover: "../assets/category-covers/cat01.jpg",
        isPublished: true,
        categoryType: category_type_enum_1.CategoryType.TOP_SELLERS,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "13",
        name: "Example Card 13",
        isFree: true,
        cover: "../assets/category-covers/cat02.jpg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        categoryType: category_type_enum_1.CategoryType.MOST_PLAYED,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "14",
        name: "Example Card 3",
        isFree: true,
        cover: "../assets/category-covers/cat03.jpg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        categoryType: category_type_enum_1.CategoryType.MOST_PLAYED,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "15",
        name: "Example Card 4",
        isFree: true,
        cover: "../assets/category-covers/cat04.jpeg",
        isPublished: false,
        categoryType: category_type_enum_1.CategoryType.MOST_PLAYED,
        extraItem1: false,
        publishDate: new Date("2024-05-01"),
        extraItem2: true
    },
    {
        id: "16",
        name: "Example Card 5",
        isFree: true,
        cover: "../assets/category-covers/cat05.jpg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        categoryType: category_type_enum_1.CategoryType.MOST_PLAYED,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "17",
        name: "Example Card 6",
        cover: "../assets/category-covers/cat06.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        categoryType: category_type_enum_1.CategoryType.MOST_PLAYED,
        extraItem1: false,
        extraItem2: true
    }
];
exports.trendingItems = [
    // 7 
    {
        id: "18",
        name: "Example Card 1",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card1.jpg",
        isPublished: true,
        categoryType: category_type_enum_1.CategoryType.TOP_SELLERS,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "19",
        name: "Example Card 2",
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card2.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        categoryType: category_type_enum_1.CategoryType.TOP_SELLERS,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "20",
        name: "Example Card 3",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card3.jpg",
        categoryType: category_type_enum_1.CategoryType.TOP_SELLERS,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "21",
        name: "Example Card 4",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card4.jpg",
        categoryType: category_type_enum_1.CategoryType.TOP_SELLERS,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "21",
        name: "Example Card 4",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card4.jpg",
        categoryType: category_type_enum_1.CategoryType.TOP_SELLERS,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "22",
        name: "Example Card 5",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card5.jpg",
        categoryType: category_type_enum_1.CategoryType.TOP_SELLERS,
        extraItem1: false,
        extraItem2: true
    }
];
exports.mostPopularItems = [
    // 8
    {
        id: "22",
        name: "Example Card 1",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card1.jpg",
        isPublished: true,
        categoryType: category_type_enum_1.CategoryType.MOST_PLAYED,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "23",
        name: "Example Card 2",
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card2.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        categoryType: category_type_enum_1.CategoryType.MOST_PLAYED,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "24",
        name: "Example Card 3",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card3.jpg",
        categoryType: category_type_enum_1.CategoryType.MOST_PLAYED,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "25",
        name: "Example Card 4",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card4.jpg",
        categoryType: category_type_enum_1.CategoryType.MOST_PLAYED,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "26",
        name: "Example Card 4",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card4.jpg",
        categoryType: category_type_enum_1.CategoryType.MOST_PLAYED,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "26",
        name: "Example Card 5",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card5.jpg",
        categoryType: category_type_enum_1.CategoryType.MOST_PLAYED,
        extraItem1: false,
        extraItem2: true
    }
];
exports.recentlyUploadedItems = [
    // 9
    {
        id: "27",
        name: "Example Card 1",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card1.jpg",
        isPublished: true,
        categoryType: category_type_enum_1.CategoryType.TOP_UPCOMING_WISHLISTED,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "28",
        name: "Example Card 2",
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card2.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        categoryType: category_type_enum_1.CategoryType.TOP_UPCOMING_WISHLISTED,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "29",
        name: "Example Card 3",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card3.jpg",
        categoryType: category_type_enum_1.CategoryType.TOP_UPCOMING_WISHLISTED,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "30",
        name: "Example Card 4",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card4.jpg",
        categoryType: category_type_enum_1.CategoryType.TOP_UPCOMING_WISHLISTED,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "31",
        name: "Example Card 4",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card4.jpg",
        categoryType: category_type_enum_1.CategoryType.TOP_UPCOMING_WISHLISTED,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "32",
        name: "Example Card 5",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card5.jpg",
        categoryType: category_type_enum_1.CategoryType.TOP_UPCOMING_WISHLISTED,
        extraItem1: false,
        extraItem2: true
    }
];
