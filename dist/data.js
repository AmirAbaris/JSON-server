"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardData = exports.bannerData = exports.highlightData = void 0;
const category_type_enum_1 = require("./enums/category-type.enum");
const game_type_enum_1 = require("./enums/game-type.enum");
const highlight_button_enum_1 = require("./enums/highlight-button.enum");
exports.highlightData = [
    {
        name: "Example Highlight 1",
        id: "1",
        cover: "../assets/preview-covers/prev1.avif",
        thumbnailCover: "../assets/small-covers/sm1.png",
        logo: "logo1.jpg",
        description: "Description for Example Highlight 1",
        price: 29.99,
        highlightButtonType: highlight_button_enum_1.HighlightButtonEnum.PUBLISHED,
        extraItem1: true,
        extraItem2: false
    },
    {
        name: "Example Highlight 2",
        id: "2",
        cover: "../assets/preview-covers/prev3.jpg",
        thumbnailCover: "../assets/small-covers/sm2.png",
        logo: "logo2.jpg",
        description: "Description for Example Highlight 2",
        price: 19.99,
        highlightButtonType: highlight_button_enum_1.HighlightButtonEnum.ARTICLE,
        extraItem1: false,
        extraItem2: true
    },
    {
        name: "Example Highlight 2",
        id: "2",
        cover: "../assets/preview-covers/prev3.jpg",
        thumbnailCover: "../assets/small-covers/sm3.png",
        logo: "logo3.jpg",
        description: "Description for Example Highlight 2",
        price: 19.99,
        highlightButtonType: highlight_button_enum_1.HighlightButtonEnum.ARTICLE,
        extraItem1: false,
        extraItem2: true
    },
];
exports.bannerData = [
    {
        id: "1",
        cover: "../assets/free-covers/free1.jpeg",
        name: "Example Banner 1",
        freeStartDate: new Date("2024-05-01"),
        freeEndDate: new Date("2024-05-15"),
        actionName: "Action for Banner 1",
        clickCardFn: () => console.log("Clicked on Banner 1"),
        discountPercent: 20,
        basePrice: 49.99,
        finalPrice: 39.99,
        description: "Description for Example Banner 1",
        hasWishlist: true,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "2",
        cover: "../assets/free-covers/free1.jpeg",
        name: "Example Banner 2",
        freeEndDate: new Date("2024-06-30"),
        actionName: "Action for Banner 2",
        clickCardFn: () => console.log("Clicked on Banner 2"),
        hasWishlist: false,
        extraItem1: false,
        extraItem2: true
    }
];
exports.cardData = [
    {
        id: "1",
        name: "Example Card 1",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card1.jpg",
        thumbnailCover: "../assets/category-covers/cat01.jpg",
        publishDate: new Date("2024-05-01"),
        isPublished: true,
        title: "Title for Example Card 1",
        categoryType: category_type_enum_1.CategoryType.TOP_SELLERS,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "2",
        name: "Example Card 2",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card2.jpeg",
        thumbnailCover: "../assets/category-covers/cat02.jpg",
        isPublished: false,
        title: "Title for Example Card 2",
        categoryType: category_type_enum_1.CategoryType.MOST_PLAYED,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "3",
        name: "Example Card 3",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card3.jpg",
        thumbnailCover: "../assets/category-covers/cat03.jpg",
        isPublished: false,
        title: "Title for Example Card 3",
        categoryType: category_type_enum_1.CategoryType.MOST_PLAYED,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "4",
        name: "Example Card 4",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card4.jpg",
        thumbnailCover: "../assets/category-covers/cat04.jpeg",
        isPublished: false,
        title: "Title for Example Card 4",
        categoryType: category_type_enum_1.CategoryType.MOST_PLAYED,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "5",
        name: "Example Card 5",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card5.jpg",
        thumbnailCover: "../assets/category-covers/cat05.jpg",
        isPublished: false,
        title: "Title for Example Card 5",
        categoryType: category_type_enum_1.CategoryType.MOST_PLAYED,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "6",
        name: "Example Card 6",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "../assets/card-covers/card6.jpg",
        thumbnailCover: "../assets/category-covers/cat06.jpeg",
        isPublished: false,
        title: "Title for Example Card 6",
        categoryType: category_type_enum_1.CategoryType.MOST_PLAYED,
        extraItem1: false,
        extraItem2: true
    }
];
