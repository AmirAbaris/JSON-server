"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recentlyUploadedItems = exports.mostPopularItems = exports.trendingItems = exports.comingSoonGameData = exports.topPlayedRatedGameData = exports.newReleaseGameData = exports.fortniteData = exports.freeItemData = exports.homeAction = exports.sliderData = exports.highlightData = void 0;
const game_type_enum_1 = require("./enums/game-type.enum");
exports.highlightData = [
    // 1
    {
        name: "Elysium Chronicles",
        id: "1",
        cover: "/assets/images/preview-covers/prev1.jpg",
        thumbnailCover: "/assets/images/small-covers/sm1.jpg",
        logo: "/assets/images/prev-logo-covers/lg1.png",
        description: "Embark on a journey through the mystical world of Elysium, where ancient prophecies come to life and heroes are forged in the fires of destiny.",
        price: 29.99,
        extraItem1: true,
        extraItem2: false
    },
    {
        name: "Nova Quest",
        id: "2",
        cover: "/assets/images/preview-covers/prev2.jpeg",
        thumbnailCover: "/assets/images/small-covers/sm2.png",
        logo: "/assets/images/prev-logo-covers/lg2.png",
        description: "Join the crew of the starship Nova as they traverse uncharted galaxies, encountering alien civilizations and battling cosmic threats.",
        price: 19.99,
        extraItem1: false,
        extraItem2: true
    },
    {
        name: "Realm of Legends",
        id: "3",
        cover: "/assets/images/preview-covers/prev3.jpg",
        thumbnailCover: "/assets/images/small-covers/sm3.jpg",
        logo: "/assets/images/prev-logo-covers/lg3.png",
        description: "Enter the legendary Realm of Legends, where knights duel with dragons, wizards wield arcane powers, and epic quests await the brave.",
        price: 0,
        extraItem1: false,
        extraItem2: true
    },
    {
        name: "Chrono Nexus",
        id: "4",
        cover: "/assets/images/preview-covers/prev4.jpeg",
        thumbnailCover: "/assets/images/small-covers/sm4.jpeg",
        logo: "/assets/images/prev-logo-covers/lg4.png",
        description: "Unravel the mysteries of time and space in Chrono Nexus, where every decision shapes the fate of the universe.",
        price: 19.99,
        extraItem1: false,
        extraItem2: true
    },
    {
        name: "Legacy of Valor",
        id: "5",
        cover: "/assets/images/preview-covers/prev5.jpg",
        thumbnailCover: "/assets/images/small-covers/sm5.jpg",
        logo: "/assets/images/prev-logo-covers/lg5.png",
        description: "Discover your true destiny in the sprawling world of Legacy of Valor, where heroes rise and kingdoms fall in the blink of an eye.",
        price: 19.99,
        extraItem1: false,
        extraItem2: true
    },
    {
        name: "Echoes of Destiny",
        id: "6",
        cover: "/assets/images/preview-covers/prev6.jpg",
        thumbnailCover: "/assets/images/small-covers/sm6.jpg",
        logo: "/assets/images/prev-logo-covers/lg6.png",
        description: "Journey through the echoes of history as you uncover the secrets of a forgotten kingdom in this epic adventure.",
        price: 19.99,
        extraItem1: false,
        extraItem2: true
    }
];
exports.sliderData = [
    {
        id: "7",
        name: "Space Odyssey: Frontier",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.EDITION,
        cover: "/assets/images/slider-covers/sl1.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "8",
        name: "Legends of Eldoria",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl2.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "9",
        name: "Mystic Realms: Chronicles",
        discountPercent: 30,
        basePrice: 49.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl3.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "10",
        name: "Dragon's Breath: Reborn",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl4.jpg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "11",
        name: "Lost Kingdoms: Resurgence",
        finalPrice: 29.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl5.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "12",
        name: "Empire Ascendant: Legacy",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl1.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "13",
        name: "Realm of Legends: Origins",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl2.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "14",
        name: "Crystal Guardians: Awakening",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl3.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "15",
        name: "Shadow Realms: Echoes",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl4.jpg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "16",
        name: "Starlight Chronicles",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl5.jpeg",
        extraItem1: true,
        extraItem2: false
    }
];
exports.homeAction = [
    {
        id: "17",
        cover: "/assets/images/home-covers/hm01.jpg",
        name: "Check out all the deals for this week.",
        discountPercent: 20,
        basePrice: 49.99,
        finalPrice: 39.99,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "18",
        cover: "/assets/images/home-covers/hm1.jpg",
        name: "Medieval Quest: Kingdoms United",
        discountPercent: 20,
        basePrice: 49.99,
        finalPrice: 39.99,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "19",
        cover: "/assets/images/home-covers/hm2.jpeg",
        name: "Apocalyptic Odyssey: Endgame",
        discountPercent: 20,
        basePrice: 49.99,
        finalPrice: 39.99,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "20",
        cover: "/assets/images/home-covers/hm4.jpg",
        name: "Fantasy Realms: Chronicles of Magic",
        finalPrice: 39.99,
        description: "Immerse yourself in a world of magic and mystery, where ancient prophecies unfold and legendary heroes rise. Embark on a quest to save the realm from darkness and become a true master of magic.",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "21",
        cover: "/assets/images/home-covers/hm5.jpg",
        name: "Cyberpunk Revolution: Neon Nights",
        finalPrice: 39.99,
        description: "Step into the neon-lit streets of a dystopian future, where megacorporations rule and cybernetic enhancements are the norm. Hack, fight, and survive as you navigate the treacherous world of cyberpunk.",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "22",
        cover: "/assets/images/home-covers/hm6.jpg",
        name: "Wild West Chronicles: Outlaws & Gunslingers",
        finalPrice: 39.99,
        description: "Saddle up and ride into the untamed frontier of the Wild West, where lawlessness reigns and only the quickest draw survives. Band together with outlaws, bounty hunters, and gunslingers in this epic tale of redemption and revenge.",
        extraItem1: true,
        extraItem2: false
    }
];
exports.freeItemData = [
    {
        id: "23",
        cover: "/assets/images/free-covers/free1.jpeg",
        name: "Fortress Siege",
        freeEndDate: new Date("2024-05-15"),
        discountPercent: 20,
        basePrice: 49.99,
        finalPrice: 39.99,
        description: "Defend your kingdom in an epic siege battle.",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "24",
        cover: "/assets/images/free-covers/free2.jpeg",
        name: "Galactic Odyssey",
        freeStartDate: new Date("2024-05-01"),
        freeEndDate: new Date("2024-05-15"),
        discountPercent: 20,
        basePrice: 49.99,
        finalPrice: 39.99,
        description: "Embark on an interstellar journey through the cosmos.",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "25",
        cover: "/assets/images/free-covers/free3.jpeg",
        name: "Shadowfall Chronicles",
        freeStartDate: new Date("2024-05-01"),
        freeEndDate: new Date("2024-05-15"),
        discountPercent: 20,
        basePrice: 49.99,
        finalPrice: 39.99,
        description: "Unravel the mysteries of a dark and ancient world.",
        extraItem1: true,
        extraItem2: false
    }
];
exports.fortniteData = [
    {
        id: "26",
        cover: "/assets/images/fortnite-covers/ft1.jpg",
        name: "Legendary Battle Royale",
        description: "Join the ultimate battle royale experience with millions of players worldwide. Build, battle, and outlast your opponents to claim victory.",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "27",
        cover: "/assets/images/fortnite-covers/ft2.jpg",
        name: "Epic Adventure Bundle",
        description: "Embark on an epic adventure across various landscapes, from lush forests to towering cities. Explore, craft, and survive in a world full of danger and excitement.",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "28",
        cover: "/assets/images/fortnite-covers/ft3.jpg",
        name: "Mystic Island Survival",
        description: "Stranded on a mysterious island, you must gather resources, build shelter, and fend off dangerous creatures to survive. Unravel the island's secrets and uncover hidden treasures.",
        extraItem1: true,
        extraItem2: false
    },
];
exports.newReleaseGameData = [
    // 6
    {
        id: "29",
        name: "The Witcher 3: Wild Hunt",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        cover: "/assets/images/category-covers/cat01.jpg",
        isPublished: true,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "30",
        name: "Red Dead Redemption 2",
        isFree: true,
        cover: "/assets/images/category-covers/cat02.jpeg",
        isPublished: true,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "31",
        name: "Assassin's Creed Odyssey",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: true,
        cover: "/assets/images/category-covers/cat03.jpg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "32",
        name: "Cyberpunk 2077",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        cover: "/assets/images/category-covers/cat04.jpeg",
        isPublished: true,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "33",
        name: "Death Stranding",
        discountPercent: 0,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: true,
        cover: "/assets/images/category-covers/cat05.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "34",
        name: "The Last of Us Part II",
        finalPrice: 26.99,
        cover: "/assets/images/category-covers/cat06.jpeg",
        isPublished: true,
        extraItem1: false,
        extraItem2: true
    }
];
exports.topPlayedRatedGameData = [
    // 6
    {
        id: "35",
        name: "The Witcher 3: Wild Hunt",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        cover: "/assets/images/category-covers/cat01.jpg",
        isPublished: true,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "36",
        name: "Red Dead Redemption 2",
        isFree: true,
        cover: "/assets/images/category-covers/cat02.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "37",
        name: "Assassin's Creed Odyssey",
        isFree: true,
        cover: "/assets/images/category-covers/cat03.jpg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "38",
        name: "Cyberpunk 2077",
        isFree: true,
        cover: "/assets/images/category-covers/cat04.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "39",
        name: "Death Stranding",
        isFree: true,
        cover: "/assets/images/category-covers/cat05.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "40",
        name: "The Last of Us Part II",
        cover: "/assets/images/category-covers/cat06.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    }
];
exports.comingSoonGameData = [
    // 6
    {
        id: "41",
        name: "The Witcher 3: Wild Hunt",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        cover: "/assets/images/category-covers/cat01.jpg",
        isPublished: true,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "42",
        name: "Red Dead Redemption 2",
        isFree: true,
        cover: "/assets/images/category-covers/cat02.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "43",
        name: "Assassin's Creed Odyssey",
        isFree: true,
        cover: "/assets/images/category-covers/cat03.jpg",
        isPublished: false,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "44",
        name: "Cyberpunk 2077",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        cover: "/assets/images/category-covers/cat04.jpeg",
        isPublished: false,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "45",
        name: "Death Stranding",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        cover: "/assets/images/category-covers/cat05.jpeg",
        isPublished: false,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "46",
        name: "The Last of Us Part II",
        cover: "/assets/images/category-covers/cat06.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "47",
        name: "The Last of Us Part II",
        cover: "/assets/images/category-covers/cat06.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "48",
        name: "The Last of Us Part II",
        cover: "/assets/images/category-covers/cat06.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "49",
        name: "The Last of Us Part II",
        cover: "/assets/images/category-covers/cat06.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "50",
        name: "The Last of Us Part II",
        cover: "/assets/images/category-covers/cat06.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "51",
        name: "The Witcher 3: Wild Hunt",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        cover: "/assets/images/category-covers/cat01.jpg",
        isPublished: true,
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "52",
        name: "Red Dead Redemption 2",
        isFree: true,
        cover: "/assets/images/category-covers/cat02.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "53",
        name: "Assassin's Creed Odyssey",
        isFree: true,
        cover: "/assets/images/category-covers/cat03.jpg",
        isPublished: false,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "54",
        name: "Cyberpunk 2077",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        cover: "/assets/images/category-covers/cat04.jpeg",
        isPublished: false,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "55",
        name: "Death Stranding",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        cover: "/assets/images/category-covers/cat05.jpeg",
        isPublished: false,
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "56",
        name: "The Last of Us Part II",
        cover: "/assets/images/category-covers/cat06.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "57",
        name: "The Last of Us Part II",
        cover: "/assets/images/category-covers/cat06.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "58",
        name: "The Last of Us Part II",
        cover: "/assets/images/category-covers/cat06.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "59",
        name: "The Last of Us Part II",
        cover: "/assets/images/category-covers/cat06.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    },
    {
        id: "60",
        name: "The Last of Us Part II",
        cover: "/assets/images/category-covers/cat06.jpeg",
        isPublished: false,
        publishDate: new Date("2024-05-01"),
        extraItem1: false,
        extraItem2: true
    }
];
exports.trendingItems = [
    // 7 
    {
        id: "61",
        name: "Space Odyssey: Frontier",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.EDITION,
        cover: "/assets/images/slider-covers/sl1.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "62",
        name: "Legends of Eldoria",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl2.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "63",
        name: "Mystic Realms: Chronicles",
        discountPercent: 30,
        basePrice: 49.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl3.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "64",
        name: "Dragon's Breath: Reborn",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl4.jpg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "65",
        name: "Lost Kingdoms: Resurgence",
        finalPrice: 29.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl5.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "66",
        name: "Empire Ascendant: Legacy",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl1.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "67",
        name: "Realm of Legends: Origins",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl2.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "68",
        name: "Crystal Guardians: Awakening",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl3.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "69",
        name: "Shadow Realms: Echoes",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl4.jpg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "70",
        name: "Starlight Chronicles",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl5.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "71",
        name: "Example Card 1",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl1.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "72",
        name: "Example Card 2",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl2.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "73",
        name: "Example Card 3",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl3.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "74",
        name: "Example Card 4",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl4.jpg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "75",
        name: "Example Card 5",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl5.jpeg",
        extraItem1: true,
        extraItem2: false
    }
];
exports.mostPopularItems = [
    // 8
    {
        id: "76",
        name: "Space Odyssey: Frontier",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.EDITION,
        cover: "/assets/images/slider-covers/sl1.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "77",
        name: "Legends of Eldoria",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl2.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "78",
        name: "Mystic Realms: Chronicles",
        discountPercent: 30,
        basePrice: 49.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl3.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "79",
        name: "Dragon's Breath: Reborn",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl4.jpg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "80",
        name: "Lost Kingdoms: Resurgence",
        finalPrice: 29.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl5.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "81",
        name: "Empire Ascendant: Legacy",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl1.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "82",
        name: "Realm of Legends: Origins",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl2.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "83",
        name: "Crystal Guardians: Awakening",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl3.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "84",
        name: "Shadow Realms: Echoes",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl4.jpg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "85",
        name: "Starlight Chronicles",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl5.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "86",
        name: "Example Card 1",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl1.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "87",
        name: "Example Card 2",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl2.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "88",
        name: "Example Card 3",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl3.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "89",
        name: "Example Card 4",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl4.jpg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "90",
        name: "Example Card 5",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl5.jpeg",
        extraItem1: true,
        extraItem2: false
    }
];
exports.recentlyUploadedItems = [
    // 9
    {
        id: "91",
        name: "Space Odyssey: Frontier",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.EDITION,
        cover: "/assets/images/slider-covers/sl1.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "92",
        name: "Legends of Eldoria",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl2.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "93",
        name: "Mystic Realms: Chronicles",
        discountPercent: 30,
        basePrice: 49.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl3.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "94",
        name: "Dragon's Breath: Reborn",
        isFree: true,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl4.jpg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "95",
        name: "Lost Kingdoms: Resurgence",
        finalPrice: 29.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl5.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "96",
        name: "Empire Ascendant: Legacy",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl1.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "97",
        name: "Realm of Legends: Origins",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl2.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "98",
        name: "Crystal Guardians: Awakening",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl3.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "99",
        name: "Shadow Realms: Echoes",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl4.jpg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "100",
        name: "Starlight Chronicles",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl5.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "101",
        name: "Example Card 1",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl1.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "102",
        name: "Example Card 2",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl2.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "103",
        name: "Example Card 3",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl3.jpeg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "104",
        name: "Example Card 4",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl4.jpg",
        extraItem1: true,
        extraItem2: false
    },
    {
        id: "105",
        name: "Example Card 5",
        discountPercent: 10,
        basePrice: 29.99,
        finalPrice: 26.99,
        isFree: false,
        type: game_type_enum_1.GameType.BASE_GAME,
        cover: "/assets/images/slider-covers/sl5.jpeg",
        extraItem1: true,
        extraItem2: false
    }
];
