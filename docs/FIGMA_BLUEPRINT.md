# Nexora Figma Blueprint

## Purpose
This document defines how to rebuild the implemented `Nexora` frontend prototype inside Figma as a structured educational UI kit and clickable prototype.

## File Structure In Figma

### Page 1: Cover
- Frame: `Nexora / Cover / 1920`
- Content:
  - Wordmark
  - Subtitle: `Premium NFT Marketplace UI Concept`
  - Short summary
  - Palette preview
  - 3 key screens preview cards

### Page 2: Foundations
- Colors
- Typography
- Spacing scale
- Radius scale
- Effects
- Grid rules

### Page 3: Components
- Buttons
- Tags and badges
- Input fields
- Search bar
- Wallet card
- NFT card
- Collection card
- Metric card
- Activity row
- Navigation bar
- Footer

### Page 4: Desktop Screens
- `Home / Desktop / 1440`
- `Marketplace / Desktop / 1440`
- `NFT Detail / Desktop / 1440`
- `Collections / Desktop / 1440`
- `Profile / Desktop / 1440`
- `Create Listing / Desktop / 1440`
- `Wallet Connect / Desktop / 1440`
- `Favorites / Desktop / 1440`
- `FAQ / Desktop / 1440`

### Page 5: Responsive
- `Home / Tablet / 1024`
- `Marketplace / Tablet / 1024`
- `Home / Mobile / 390`
- `NFT Detail / Mobile / 390`
- `Profile / Mobile / 390`
- `Wallet Connect / Mobile / 390`

## Layout Rules

### Desktop
- Frame width: `1440`
- Content width: `1320`
- Side margins: `60`
- Grid: `12 columns`
- Column gutter: `24`
- Section spacing: `30`
- Main surface radius: `30`

### Tablet
- Frame width: `1024`
- Grid: `8 columns`
- Side margins: `32`
- Gutter: `20`

### Mobile
- Frame width: `390`
- Grid: `4 columns`
- Side margins: `16`
- Gutter: `12`

## Key Components To Create As Variants

### Buttons
- `Primary / Default`
- `Primary / Hover`
- `Secondary / Default`
- `Secondary / Hover`

### NFT Card
- `Default`
- `Hover`
- `Favorite Active`

### Filter Chip
- `Default`
- `Active`

### Wallet Card
- `Default`
- `Selected`

### Tags
- `Verified`
- `Trending`
- `Network`
- `Rarity`

## Screen Priorities

### Minimal Set
1. Cover
2. Foundations
3. Components
4. Home desktop
5. Marketplace desktop
6. NFT detail desktop
7. Wallet connect desktop
8. Home mobile

### Extended Set
1. Collections
2. Profile
3. Create listing
4. Favorites
5. FAQ
6. Tablet frames
7. Modal overlays for buy and make offer
8. Empty state illustrations

## Prototype Connections
- Cover -> Home Desktop
- Home CTA -> Marketplace
- Home header button -> Wallet Connect
- Marketplace NFT card -> NFT Detail
- NFT Detail `Buy now` -> Buy Modal
- NFT Detail `Make offer` -> Offer Modal
- Profile -> Create Listing
- Favorites -> NFT Detail
- Home Desktop -> Home Mobile via device switch frame

## Content Notes
- Use short premium copy.
- Prioritize image-led cards with enough negative space.
- Keep labels concise and use monospace only for prices, wallet IDs and metrics.
- Avoid overloaded gradients. Use glow only as accent.

## Imported Assets
- `public/figma/logo-mark.svg`
- `public/figma/logo-wordmark.svg`
- `public/figma/hero-art.svg`
- `public/figma/empty-favorites.svg`

## Transfer Workflow
1. Create Figma file pages in the order above.
2. Import SVG assets.
3. Create color and text styles from `docs/design-tokens.json`.
4. Build components with Auto Layout.
5. Assemble desktop screens first.
6. Create tablet and mobile adaptations from the same component set.
7. Add prototype links between major flows.
