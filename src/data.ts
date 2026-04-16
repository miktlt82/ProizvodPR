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
    name: "Prism Archive #01",
    creator: "Astra Node",
    collection: "Void Signal",
    price: "1.62 ETH",
    network: "Ethereum",
    rarity: "Ultra Rare",
    likes: 341,
    type: "art",
    image:
      "linear-gradient(135deg, rgba(124,92,255,0.88), rgba(47,214,255,0.18) 58%, rgba(12,14,20,1) 100%)",
    owner: "0x7E12...B94A",
    description:
      "Generative light sculpture with layered chromatic fields and a controlled spectral noise system.",
    properties: [
      { trait: "Edition", value: "1 / 25" },
      { trait: "Spectrum", value: "Polar Indigo" },
      { trait: "Motion", value: "Static" },
      { trait: "Artist Rank", value: "Genesis" },
    ],
    priceHistory: [
      { label: "Feb", value: 0.82 },
      { label: "Mar", value: 1.04 },
      { label: "Apr", value: 1.31 },
      { label: "Now", value: 1.62 },
    ],
  },
  {
    id: "nxr-002",
    name: "Neon Driver #88",
    creator: "Lunar Dept.",
    collection: "Neon Relics",
    price: "0.94 ETH",
    network: "Base",
    rarity: "Rare",
    likes: 229,
    type: "gaming",
    image:
      "linear-gradient(145deg, rgba(47,214,255,0.72), rgba(17,20,27,0.92) 52%, rgba(124,92,255,0.45) 100%)",
    owner: "0x1B03...DF22",
    description:
      "Collectible game-ready avatar skin inspired by futuristic transport capsules and cyber racing grids.",
    properties: [
      { trait: "Edition", value: "88 / 500" },
      { trait: "Class", value: "Velocity" },
      { trait: "Boost", value: "+12%" },
      { trait: "Verified", value: "Yes" },
    ],
    priceHistory: [
      { label: "Feb", value: 0.42 },
      { label: "Mar", value: 0.57 },
      { label: "Apr", value: 0.72 },
      { label: "Now", value: 0.94 },
    ],
  },
  {
    id: "nxr-003",
    name: "Bloom Frequency",
    creator: "Maison Vector",
    collection: "Kinetic Bloom",
    price: "2.31 ETH",
    network: "Ethereum",
    rarity: "Legendary",
    likes: 511,
    type: "fashion",
    image:
      "linear-gradient(160deg, rgba(227,86,184,0.84), rgba(124,92,255,0.46) 48%, rgba(13,15,22,1) 100%)",
    owner: "0xAA31...998D",
    description:
      "A couture-inspired digital collectible balancing fluid petals, metallic edges and high-luxury 3D styling.",
    properties: [
      { trait: "Edition", value: "1 / 1" },
      { trait: "Series", value: "Bloom" },
      { trait: "Material", value: "Chrome Silk" },
      { trait: "Drop", value: "Season 03" },
    ],
    priceHistory: [
      { label: "Feb", value: 1.24 },
      { label: "Mar", value: 1.68 },
      { label: "Apr", value: 1.94 },
      { label: "Now", value: 2.31 },
    ],
  },
  {
    id: "nxr-004",
    name: "Signal Choir",
    creator: "Sonic Atelier",
    collection: "Audio Fragments",
    price: "0.76 ETH",
    network: "Polygon",
    rarity: "Rare",
    likes: 178,
    type: "music",
    image:
      "linear-gradient(135deg, rgba(48,112,255,0.82), rgba(28,35,48,0.94) 52%, rgba(47,214,255,0.34) 100%)",
    owner: "0xC871...0A1F",
    description:
      "Music NFT built around reactive frequency bars and spatial synth fragments.",
    properties: [
      { trait: "Edition", value: "12 / 100" },
      { trait: "Length", value: "2:48" },
      { trait: "Format", value: "Audio + Visual" },
      { trait: "Master", value: "Lossless" },
    ],
    priceHistory: [
      { label: "Feb", value: 0.24 },
      { label: "Mar", value: 0.38 },
      { label: "Apr", value: 0.59 },
      { label: "Now", value: 0.76 },
    ],
  },
];

export const stats: Metric[] = [
  { label: "Active collectors", value: "48K+" },
  { label: "Verified creators", value: "2.4K" },
  { label: "24h trading volume", value: "1.9K ETH" },
  { label: "Curated collections", value: "340" },
];

export const walletOptions: WalletOption[] = [
  { name: "MetaMask", label: "Most used wallet for Ethereum and L2 ecosystems." },
  { name: "WalletConnect", label: "Universal connection for mobile and desktop wallets." },
  { name: "Coinbase Wallet", label: "Simple onboarding for beginners entering Web3." },
];
