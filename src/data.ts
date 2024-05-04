import { GameDto } from "./dtos/game.dto";
import { GameType } from "./enums/game-type.enum";

export const highlightData: GameDto[] = [
    // 1
    {
        name: "Example Highlight 1",
        id: "1",
        cover: "/assets/preview-covers/prev1.jpg",
        thumbnailCover: "/assets/small-covers/sm1.jpg",
        logo: "/assets/prev-logo-covers/lg1.png",
        description: "Description for Example Highlight 1",
        price: 29.99,
        extraItem1: true,
        extraItem2: false
    },
    {
        name: "Example Highlight 2",
        id: "2",
        cover: "/assets/preview-covers/prev2.jpeg",
        thumbnailCover: "/assets/small-covers/sm2.png",
        logo: "/assets/prev-logo-covers/lg2.png",
        description: "Description for Example Highlight 2",
        price: 19.99,
        extraItem1: false,
        extraItem2: true
    },
    {
        name: "Example Highlight 3",
        id: "3",
        cover: "/assets/preview-covers/prev3.jpg",
        thumbnailCover: "/assets/small-covers/sm3.jpg",
        logo: "/assets/prev-logo-covers/lg3.png",
        description: "Description for Example Highlight 3",
        price: 0,
        extraItem1: false,
        extraItem2: true
    },
    {
        name: "Example Highlight 4",
        id: "4",
        cover: "/assets/preview-covers/prev4.jpeg",
        thumbnailCover: "/assets/small-covers/sm4.jpeg",
        logo: "/assets/prev-logo-covers/lg4.png",
        description: "Description for Example Highlight 3",
        price: 19.99,
        extraItem1: false,
        extraItem2: true
    },
    {
        name: "Example Highlight 5",
        id: "5",
        cover: "/assets/preview-covers/prev5.jpg",
        thumbnailCover: "/assets/small-covers/sm5.jpg",
        logo: "/assets/prev-logo-covers/lg4.png",
        description: "Description for Example Highlight 4",
        price: 19.99,
        extraItem1: false,
        extraItem2: true
    },
    {
        name: "Example Highlight 6",
        id: "6",
        cover: "/assets/preview-covers/prev6.jpg",
        thumbnailCover: "/assets/small-covers/sm6.jpg",
        logo: "/assets/prev-logo-covers/lg6.jpg",
        description: "Description for Example Highlight 6",
        price: 19.99,
        extraItem1: false,
        extraItem2: true
    }
];

export const sliderData: GameDto[] = [

    // 2
    {
        id: "1",
        name: "Example Card 1",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: GameType.BASE_GAME,
        cover: "/assets/slider-covers/sl1.jpeg",
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
        type: GameType.BASE_GAME,
        cover: "/assets/slider-covers/sl2.jpeg",
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
        type: GameType.BASE_GAME,
        cover: "/assets/slider-covers/sl3.jpeg",
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
        type: GameType.BASE_GAME,
        cover: "/assets/slider-covers/sl4.jpg",
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
        type: GameType.BASE_GAME,
        cover: "/assets/slider-covers/sl5.jpeg",
        extraItem1: true,
        extraItem2: false
    }
];

export const homeAction: GameDto[] = [
    // 3
    {
        id: "1",
        cover: "/assets/home-covers/hm1.jpg",
        name: "Example Banner 3",
        description: "Description for Example Banner 1",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "2",
        cover: "/assets/home-covers/hm2.jpeg",
        name: "Example Banner 2",
        description: "Description for Example Banner 2",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "3",
        cover: "/assets/home-covers/hm3.jpg",
        name: "Example Banner 3",
        discountPercent: 20,
        basePrice: 49.99,
        finalPrice: 39.99,
        description: "Description for Example Banner 3",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "4",
        cover: "/assets/home-covers/hm4.jpg",
        name: "Example Banner 4",
        finalPrice: 39.99,
        description: "Description for Example Banner 4",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "5",
        cover: "/assets/home-covers/hm5.jpg",
        name: "Example Banner 5",
        finalPrice: 39.99,
        description: "Description for Example Banner 5",

        extraItem1: true,
        extraItem2: false
    },
    {
        id: "6",
        cover: "/assets/home-covers/hm6.jpg",
        name: "Example Banner 6",
        finalPrice: 39.99,
        description: "Description for Example Banner 6",
        extraItem1: true,
        extraItem2: false
    }
];

export const freeItemData: GameDto[] = [
    // 4
    {
        id: "7",
        cover: "/assets/free-covers/free1.jpeg",
        name: "Example Banner 7",
        freeStartDate: new Date("2024-05-01"),
        freeEndDate: new Date("2024-05-15"),
        discountPercent: 20,
        basePrice: 49.99,
        finalPrice: 39.99,
        description: "Description for Example Banner 7",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "8",
        cover: "/assets/free-covers/free2.jpeg",
        name: "Example Banner 8",
        freeStartDate: new Date("2024-05-01"),
        freeEndDate: new Date("2024-05-15"),
        discountPercent: 20,
        basePrice: 49.99,
        finalPrice: 39.99,
        description: "Description for Example Banner 8",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "9",
        cover: "/assets/free-covers/free3.jpeg",
        name: "Example Banner 2",
        freeStartDate: new Date("2024-05-01"),
        freeEndDate: new Date("2024-05-15"),
        discountPercent: 20,
        basePrice: 49.99,
        finalPrice: 39.99,
        description: "Description for Example Banner 9",
        extraItem1: true,
        extraItem2: false
    }
];

export const fortniteData: GameDto[] = [
    // 5
    {
        id: "10",
        cover: "/assets/fortnite-covers/ft1.jpg",
        name: "Example fortnite 1",
        description: "Description for fortnite",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "11",
        cover: "/assets/fortnite-covers/ft2.jpg",
        name: "Example fortnite 2",
        description: "Description for fortnite",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "44",
        cover: "/assets/fortnite-covers/ft3.jpg",
        name: "Example fortnite 3",
        description: "Description for fortnite",
        extraItem1: true,
        extraItem2: false
    },
];

export const newReleaseGameData: GameDto[] = [
    // 6
    {
        id: "12",
        name: "Example Card 12",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        cover: "/assets/category-covers/cat01.jpg",
        isPublished: true,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "13",
        name: "Example Card 13",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: true,
        cover: "/assets/category-covers/cat02.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),

        extraItem1: false,
        extraItem2: true
    },
    {
        id: "14",
        name: "Example Card 3",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: true,
        cover: "/assets/category-covers/cat03.jpg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "15",
        name: "Example Card 4",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: true,
        cover: "/assets/category-covers/cat04.jpeg",
        isPublished: false,
        extraItem1: false,
        publishDate: new Date("2024-05-01"),
        extraItem2: true
    },
    {
        id: "16",
        name: "Example Card 5",
        discountPercent: 0,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: true,
        cover: "/assets/category-covers/cat05.jpg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "17",
        name: "Example Card 6",
        discountPercent: 0,
        basePrice: 29.99,
        finalPrice: 26.99,
        cover: "/assets/category-covers/cat06.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    }
];

export const topPlayedRatedGameData: GameDto[] = [
    // 6
    {
        id: "12",
        name: "Example Card 12",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        cover: "/assets/category-covers/cat01.jpg",
        isPublished: true,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "13",
        name: "Example Card 13",
        isFree: true,
        cover: "/assets/category-covers/cat02.jpge",
        isPublished: false,
        publishDate: new Date("2024-05-01"),

        extraItem1: false,
        extraItem2: true
    },
    {
        id: "14",
        name: "Example Card 3",
        isFree: true,
        cover: "/assets/category-covers/cat03.jpg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "15",
        name: "Example Card 4",
        isFree: true,
        cover: "/assets/category-covers/cat04.jpeg",
        isPublished: false,
        extraItem1: false,
        publishDate: new Date("2024-05-01"),
        extraItem2: true
    },
    {
        id: "16",
        name: "Example Card 5",
        isFree: true,
        cover: "/assets/category-covers/cat05.jpg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "17",
        name: "Example Card 6",
        cover: "/assets/category-covers/cat06.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    }
];

export const comingSoonGameData: GameDto[] = [
    // 6
    {
        id: "12",
        name: "Example Card 12",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        cover: "/assets/category-covers/cat01.jpg",
        isPublished: true,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "13",
        name: "Example Card 13",
        isFree: true,
        cover: "/assets/category-covers/cat02.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),

        extraItem1: false,
        extraItem2: true
    },
    {
        id: "14",
        name: "Example Card 3",
        isFree: true,
        cover: "/assets/category-covers/cat03.jpg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "15",
        name: "Example Card 4",
        isFree: true,
        cover: "/assets/category-covers/cat04.jpeg",
        isPublished: false,
        extraItem1: false,
        publishDate: new Date("2024-05-01"),
        extraItem2: true
    },
    {
        id: "16",
        name: "Example Card 5",
        isFree: true,
        cover: "/assets/category-covers/cat05.jpg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "17",
        name: "Example Card 6",
        cover: "/assets/category-covers/cat06.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    }
];

export const trendingItems: GameDto[] = [
    // 7 
    {
        id: "18",
        name: "Example Card 1",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: GameType.BASE_GAME,
        cover: "/assets/card-covers/card1.jpg",
        isPublished: true,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "19",
        name: "Example Card 2",
        type: GameType.BASE_GAME,
        cover: "/assets/card-covers/card2.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "20",
        name: "Example Card 3",
        isFree: true,
        type: GameType.BASE_GAME,
        cover: "/assets/card-covers/card3.jpg",

        extraItem1: false,
        extraItem2: true
    },
    {
        id: "21",
        name: "Example Card 4",
        isFree: true,
        type: GameType.BASE_GAME,
        cover: "/assets/card-covers/card4.jpg",
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "21",
        name: "Example Card 4",
        isFree: true,
        type: GameType.BASE_GAME,
        cover: "/assets/card-covers/card4.jpg",
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "22",
        name: "Example Card 5",
        isFree: true,
        type: GameType.BASE_GAME,
        cover: "/assets/card-covers/card5.jpg",
        extraItem1: false,
        extraItem2: true
    }
];

export const mostPopularItems: GameDto[] = [
    // 8
    {
        id: "22",
        name: "Example Card 1",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: GameType.BASE_GAME,
        cover: "/assets/card-covers/card1.jpg",
        isPublished: true,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "23",
        name: "Example Card 2",
        type: GameType.BASE_GAME,
        cover: "/assets/card-covers/card2.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "24",
        name: "Example Card 3",
        isFree: true,
        type: GameType.BASE_GAME,
        cover: "/assets/card-covers/card3.jpg",
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "25",
        name: "Example Card 4",
        isFree: true,
        type: GameType.BASE_GAME,
        cover: "/assets/card-covers/card4.jpg",
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "26",
        name: "Example Card 4",
        isFree: true,
        type: GameType.BASE_GAME,
        cover: "/assets/card-covers/card4.jpg",
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "26",
        name: "Example Card 5",
        isFree: true,
        type: GameType.BASE_GAME,
        cover: "/assets/card-covers/card5.jpg",
        extraItem1: false,
        extraItem2: true
    }
];

export const recentlyUploadedItems: GameDto[] = [
    // 9
    {
        id: "27",
        name: "Example Card 1",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: GameType.BASE_GAME,
        cover: "/assets/card-covers/card1.jpg",
        isPublished: true,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "28",
        name: "Example Card 2",
        type: GameType.BASE_GAME,
        cover: "/assets/card-covers/card2.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "29",
        name: "Example Card 3",
        isFree: true,
        type: GameType.BASE_GAME,
        cover: "/assets/card-covers/card3.jpg",
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "30",
        name: "Example Card 4",
        isFree: true,
        type: GameType.BASE_GAME,
        cover: "/assets/card-covers/card4.jpg",
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "31",
        name: "Example Card 4",
        isFree: true,
        type: GameType.BASE_GAME,
        cover: "/assets/card-covers/card4.jpg",
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "32",
        name: "Example Card 5",
        isFree: true,
        type: GameType.BASE_GAME,
        cover: "/assets/card-covers/card5.jpg",
        extraItem1: false,
        extraItem2: true
    }
];