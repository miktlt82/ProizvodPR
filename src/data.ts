import type { Collection, Metric, NftItem, WalletOption } from "./types";

export const collections: Collection[] = [
  {
    id: "void-signal",
    name: "Void Signal",
    creator: "Astra Node",
    floor: "1.48 ETH",
    volume: "842 ETH",
    change: "+18.4%",
    items: 320,
    theme: "indigo",
  },
  {
    id: "neon-relics",
    name: "Neon Relics",
    creator: "Lunar Dept.",
    floor: "0.92 ETH",
    volume: "615 ETH",
    change: "+12.9%",
    items: 540,
    theme: "cyan",
  },
  {
    id: "kinetic-bloom",
    name: "Kinetic Bloom",
    creator: "Maison Vector",
    floor: "2.16 ETH",
    volume: "1.2K ETH",
    change: "+26.7%",
    items: 180,
    theme: "magenta",
  },
];

export const nftItems: NftItem[] = [
  {
    id: "nxr-001",
    name: "Overclocked Witness",
    creator: "Astra Node",
    collection: "Void Signal",
    price: "1.62 ETH",
    network: "Ethereum",
    rarity: { en: "Ultra Rare", ru: "Ультра-редкий" },
    likes: 341,
    type: "art",
    image:
      "linear-gradient(180deg, rgba(10,11,16,0.1), rgba(10,11,16,0.55)), url('/nft/portrait-glitch.png') center/cover no-repeat",
    owner: "0x7E12...B94A",
    description: {
      en: "A hyper-stylized portrait collectible built around tension, asymmetry and a surreal lens-distortion treatment.",
      ru: "Гиперстилизованный портретный коллекционный объект, построенный на напряжении, асимметрии и сюрреалистичной оптической деформации.",
    },
    properties: [
      { trait: { en: "Edition", ru: "Тираж" }, value: { en: "1 / 25", ru: "1 / 25" } },
      { trait: { en: "Expression", ru: "Выражение" }, value: { en: "Split Focus", ru: "Раздвоенный фокус" } },
      { trait: { en: "Mood", ru: "Настроение" }, value: { en: "Intense", ru: "Напряженное" } },
      { trait: { en: "Artist Rank", ru: "Ранг автора" }, value: { en: "Genesis", ru: "Genesis" } },
    ],
    priceHistory: [
      { label: { en: "Feb", ru: "Фев" }, value: 0.82 },
      { label: { en: "Mar", ru: "Мар" }, value: 1.04 },
      { label: { en: "Apr", ru: "Апр" }, value: 1.31 },
      { label: { en: "Now", ru: "Сейчас" }, value: 1.62 },
    ],
  },
  {
    id: "nxr-002",
    name: "Neon Sentinel Cat",
    creator: "Lunar Dept.",
    collection: "Neon Relics",
    price: "0.94 ETH",
    network: "Base",
    rarity: { en: "Rare", ru: "Редкий" },
    likes: 229,
    type: "gaming",
    image:
      "linear-gradient(180deg, rgba(9,18,30,0.12), rgba(9,18,30,0.6)), url('/nft/cyber-cat.png') center/cover no-repeat",
    owner: "0x1B03...DF22",
    description: {
      en: "Game-ready mascot avatar with tactical gear, luminous eyes and a polished blue command-unit silhouette.",
      ru: "Готовый для игры аватар-талисман с тактическим снаряжением, светящимися глазами и выверенным синим силуэтом командного юнита.",
    },
    properties: [
      { trait: { en: "Edition", ru: "Тираж" }, value: { en: "88 / 500", ru: "88 / 500" } },
      { trait: { en: "Class", ru: "Класс" }, value: { en: "Recon", ru: "Разведка" } },
      { trait: { en: "Boost", ru: "Буст" }, value: { en: "+18%", ru: "+18%" } },
      { trait: { en: "Verified", ru: "Проверено" }, value: { en: "Yes", ru: "Да" } },
    ],
    priceHistory: [
      { label: { en: "Feb", ru: "Фев" }, value: 0.42 },
      { label: { en: "Mar", ru: "Мар" }, value: 0.57 },
      { label: { en: "Apr", ru: "Апр" }, value: 0.72 },
      { label: { en: "Now", ru: "Сейчас" }, value: 0.94 },
    ],
  },
  {
    id: "nxr-003",
    name: "Castor Woods",
    creator: "Kyle Crane",
    collection: "Kinetic Bloom",
    price: "2.31 ETH",
    network: "Ethereum",
    rarity: { en: "Legendary", ru: "Легендарный" },
    likes: 511,
    type: "fashion",
    image:
      "linear-gradient(180deg, rgba(44,14,45,0.12), rgba(17,12,24,0.58)), url('/nft/pink-stream.png') center/cover no-repeat",
    owner: "0xAA31...998D",
    description: {
      en: "A couture-coded landscape piece where liquid pink reflections and dark trunks create a luxury seasonal mood.",
      ru: "Пейзажный объект с couture-настроением, где жидкие розовые отражения и темные стволы собирают дорогую сезонную атмосферу.",
    },
    properties: [
      { trait: { en: "Edition", ru: "Тираж" }, value: { en: "1 / 1", ru: "1 / 1" } },
      { trait: { en: "Series", ru: "Серия" }, value: { en: "Bloom", ru: "Bloom" } },
      { trait: { en: "Material", ru: "Материал" }, value: { en: "Liquid Sakura", ru: "Жидкая сакура" } },
      { trait: { en: "Drop", ru: "Дроп" }, value: { en: "Season 03", ru: "Сезон 03" } },
    ],
    priceHistory: [
      { label: { en: "Feb", ru: "Фев" }, value: 1.24 },
      { label: { en: "Mar", ru: "Мар" }, value: 1.68 },
      { label: { en: "Apr", ru: "Апр" }, value: 1.94 },
      { label: { en: "Now", ru: "Сейчас" }, value: 2.31 },
    ],
  },
  {
    id: "nxr-004",
    name: "I AM MUSIC",
    creator: "Playboi Carti",
    collection: "Audio Fragments",
    price: "0.76 ETH",
    network: "Polygon",
    rarity: { en: "Rare", ru: "Редкий" },
    likes: 178,
    type: "music",
    image:
      "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(10,11,16,0.22)), url('/nft/i-am-music.png') center/cover no-repeat",
    owner: "0xC871...0A1F",
    description: {
      en: "Bold typographic release art designed as a clean statement piece for a music-first collectible drop.",
      ru: "Смелая типографическая обложка, собранная как чистое statement-издание для музыкального collectible-дропа.",
    },
    properties: [
      { trait: { en: "Edition", ru: "Тираж" }, value: { en: "12 / 100", ru: "12 / 100" } },
      { trait: { en: "Length", ru: "Длительность" }, value: { en: "3:16", ru: "3:16" } },
      { trait: { en: "Format", ru: "Формат" }, value: { en: "Audio + Cover", ru: "Аудио + обложка" } },
      { trait: { en: "Master", ru: "Мастер" }, value: { en: "Lossless", ru: "Без потерь" } },
    ],
    priceHistory: [
      { label: { en: "Feb", ru: "Фев" }, value: 0.24 },
      { label: { en: "Mar", ru: "Мар" }, value: 0.38 },
      { label: { en: "Apr", ru: "Апр" }, value: 0.59 },
      { label: { en: "Now", ru: "Сейчас" }, value: 0.76 },
    ],
  },
  {
    id: "nxr-005",
    name: "Boss Snout",
    creator: "Feral Frames",
    collection: "Neon Relics",
    price: "1.08 ETH",
    network: "Base",
    rarity: { en: "Rare", ru: "Редкий" },
    likes: 267,
    type: "gaming",
    image:
      "linear-gradient(180deg, rgba(26,18,12,0.08), rgba(10,11,16,0.42)), url('/nft/dog-nose.png') center/cover no-repeat",
    owner: "0x5FD2...A11C",
    description: {
      en: "A wide-angle canine meme-avatar that feels instantly collectible because the camera distortion does half the storytelling.",
      ru: "Широкоугольный собачий meme-аватар, который ощущается коллекционным уже за счет одной только оптической деформации камеры.",
    },
    properties: [
      { trait: { en: "Edition", ru: "Тираж" }, value: { en: "7 / 120", ru: "7 / 120" } },
      { trait: { en: "Lens", ru: "Линза" }, value: { en: "Front Cam", ru: "Фронтальная камера" } },
      { trait: { en: "Mood", ru: "Настроение" }, value: { en: "Unbothered", ru: "Невозмутимое" } },
      { trait: { en: "Verified", ru: "Проверено" }, value: { en: "Yes", ru: "Да" } },
    ],
    priceHistory: [
      { label: { en: "Feb", ru: "Фев" }, value: 0.36 },
      { label: { en: "Mar", ru: "Мар" }, value: 0.51 },
      { label: { en: "Apr", ru: "Апр" }, value: 0.83 },
      { label: { en: "Now", ru: "Сейчас" }, value: 1.08 },
    ],
  },
  {
    id: "nxr-006",
    name: "Midnight Path",
    creator: "Astra Node",
    collection: "Void Signal",
    price: "1.41 ETH",
    network: "Ethereum",
    rarity: { en: "Epic", ru: "Эпический" },
    likes: 304,
    type: "art",
    image:
      "linear-gradient(180deg, rgba(7,16,26,0.1), rgba(7,16,26,0.58)), url('/nft/blue-forest.png') center/cover no-repeat",
    owner: "0x0DA4...7CF2",
    description: {
      en: "A nocturnal forest scene with enough depth and atmosphere to read like a meditative portal piece.",
      ru: "Ночной лесной сюжет с такой глубиной и атмосферой, что он читается как медитативный портал.",
    },
    properties: [
      { trait: { en: "Edition", ru: "Тираж" }, value: { en: "3 / 40", ru: "3 / 40" } },
      { trait: { en: "Palette", ru: "Палитра" }, value: { en: "Deep Cyan", ru: "Глубокий циан" } },
      { trait: { en: "Mood", ru: "Настроение" }, value: { en: "Still", ru: "Спокойное" } },
      { trait: { en: "Artist Rank", ru: "Ранг автора" }, value: { en: "Prime", ru: "Prime" } },
    ],
    priceHistory: [
      { label: { en: "Feb", ru: "Фев" }, value: 0.58 },
      { label: { en: "Mar", ru: "Мар" }, value: 0.93 },
      { label: { en: "Apr", ru: "Апр" }, value: 1.17 },
      { label: { en: "Now", ru: "Сейчас" }, value: 1.41 },
    ],
  },
];

export const stats: Metric[] = [
  { label: { en: "Active collectors", ru: "Активные коллекционеры" }, value: "48K+" },
  { label: { en: "Verified creators", ru: "Проверенные авторы" }, value: "2.4K" },
  { label: { en: "24h trading volume", ru: "Торговый объем за 24ч" }, value: "1.9K ETH" },
  { label: { en: "Curated collections", ru: "Отобранные коллекции" }, value: "340" },
];

export const walletOptions: WalletOption[] = [
  {
    name: "MetaMask",
    label: {
      en: "Most used wallet for Ethereum and L2 ecosystems.",
      ru: "Самый распространенный кошелек для Ethereum и L2-экосистем.",
    },
  },
  {
    name: "WalletConnect",
    label: {
      en: "Universal connection for mobile and desktop wallets.",
      ru: "Универсальное подключение для мобильных и десктопных кошельков.",
    },
  },
  {
    name: "Coinbase Wallet",
    label: {
      en: "Simple onboarding for beginners entering Web3.",
      ru: "Простой вход для новичков, которые только заходят в Web3.",
    },
  },
];
