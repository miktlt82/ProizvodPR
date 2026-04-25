export type Language = "en" | "ru";

export type LocalizedText = Record<Language, string>;

export type Route =
  | "home"
  | "marketplace"
  | "nft"
  | "collections"
  | "profile"
  | "register"
  | "create"
  | "wallet"
  | "favorites"
  | "help"
  | "design";

export type FilterKey = "all" | "art" | "music" | "gaming" | "fashion";

export type Collection = {
  id: string;
  name: string;
  creator: string;
  floor: string;
  volume: string;
  change: string;
  items: number;
  theme: string;
};

export type NftItem = {
  id: string;
  name: string;
  creator: string;
  collection: string;
  price: string;
  network: string;
  rarity: LocalizedText;
  likes: number;
  type: FilterKey;
  image: string;
  owner: string;
  description: LocalizedText;
  properties: Array<{ trait: LocalizedText; value: LocalizedText }>;
  priceHistory: Array<{ label: LocalizedText; value: number }>;
};

export type WalletOption = {
  name: string;
  label: LocalizedText;
};

export type Metric = {
  label: LocalizedText;
  value: string;
};
