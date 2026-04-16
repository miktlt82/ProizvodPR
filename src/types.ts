export type Route =
  | "home"
  | "marketplace"
  | "nft"
  | "collections"
  | "profile"
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
  rarity: string;
  likes: number;
  type: FilterKey;
  image: string;
  owner: string;
  description: string;
  properties: Array<{ trait: string; value: string }>;
  priceHistory: Array<{ label: string; value: number }>;
};

export type WalletOption = {
  name: string;
  label: string;
};

export type Metric = {
  label: string;
  value: string;
};
