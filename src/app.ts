import { collections, nftItems, stats, walletOptions } from "./data";
import type { FilterKey, NftItem, Route } from "./types";

const routeMap: Record<string, Route> = {
  "": "home",
  "#/": "home",
  "#/marketplace": "marketplace",
  "#/nft": "nft",
  "#/collections": "collections",
  "#/profile": "profile",
  "#/create": "create",
  "#/wallet": "wallet",
  "#/favorites": "favorites",
  "#/help": "help",
  "#/design": "design",
};

type AppState = {
  filter: FilterKey;
  favorites: Set<string>;
};

function getRoute(): { page: Route; nftId: string } {
  const hash = window.location.hash || "#/";
  const [path, queryString] = hash.split("?");
  const params = new URLSearchParams(queryString ?? "");
  return {
    page: routeMap[path] ?? "home",
    nftId: params.get("id") ?? nftItems[0].id,
  };
}

function navLink(route: Route, label: string): string {
  const current = getRoute().page;
  const href = route === "home" ? "#/" : `#/${route}`;
  const active = current === route ? "nav-link active" : "nav-link";
  return `<a class="${active}" href="${href}">${label}</a>`;
}

function metricCards(): string {
  return stats
    .map(
      (item) => `
        <article class="metric-card">
          <p>${item.label}</p>
          <h3>${item.value}</h3>
        </article>
      `,
    )
    .join("");
}

function collectionCard(item: (typeof collections)[number]): string {
  return `
    <article class="collection-card ${item.theme}">
      <div class="collection-cover">
        <span class="collection-badge">Curated</span>
      </div>
      <div class="collection-body">
        <div class="card-row">
          <div>
            <h3>${item.name}</h3>
            <p>${item.creator}</p>
          </div>
          <span class="trend">${item.change}</span>
        </div>
        <div class="collection-stats">
          <span><strong>${item.floor}</strong> Floor</span>
          <span><strong>${item.volume}</strong> Volume</span>
          <span><strong>${item.items}</strong> Items</span>
        </div>
      </div>
    </article>
  `;
}

function collectionCards(): string {
  return collections.map((item) => collectionCard(item)).join("");
}

function nftCard(item: NftItem, state: AppState): string {
  const favorite = state.favorites.has(item.id) ? "is-active" : "";
  return `
    <article class="nft-card">
      <button class="favorite-button ${favorite}" data-favorite="${item.id}" aria-label="Toggle favorite">
        <span>+</span>
      </button>
      <a class="card-media" href="#/nft?id=${item.id}" style="background:${item.image}">
        <span class="media-orbit"></span>
        <span class="media-chip">${item.rarity}</span>
      </a>
      <div class="card-content">
        <div class="card-row">
          <div>
            <p class="eyebrow">${item.collection}</p>
            <h3>${item.name}</h3>
          </div>
          <span class="price-badge">${item.price}</span>
        </div>
        <div class="card-row card-meta">
          <span>${item.creator}</span>
          <span>${item.network}</span>
        </div>
      </div>
    </article>
  `;
}

function homePage(state: AppState): string {
  return `
    <section class="hero">
      <div class="hero-copy">
        <span class="section-chip">Curated Web3 marketplace</span>
        <h1>Collect digital assets in a space built to feel premium, clear and alive.</h1>
        <p>
          Nexora is a concept NFT marketplace for exploring curated collections, tracking
          market signals and listing digital art with a wallet-first flow.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="#/marketplace">Explore marketplace</a>
          <a class="button button-secondary" href="#/wallet">Connect wallet</a>
        </div>
        <div class="hero-metrics">${metricCards()}</div>
      </div>
      <div class="hero-panel">
        <article class="spotlight-card">
          <div class="spotlight-visual" style="background:${nftItems[0].image}">
            <span class="visual-ring"></span>
            <span class="visual-tag">Featured drop</span>
          </div>
          <div class="spotlight-content">
            <div class="card-row">
              <div>
                <p class="eyebrow">Today spotlight</p>
                <h2>${nftItems[0].name}</h2>
              </div>
              <span class="price-badge">${nftItems[0].price}</span>
            </div>
            <p>${nftItems[0].description}</p>
            <div class="spotlight-footer">
              <span>Creator ${nftItems[0].creator}</span>
              <a href="#/nft?id=${nftItems[0].id}">View token</a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="section-grid">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Trending collections</p>
          <h2>Signal-rich collections with visible momentum</h2>
        </div>
        <a class="text-link" href="#/collections">View all collections</a>
      </div>
      <div class="collection-grid">${collectionCards()}</div>
    </section>

    <section class="section-grid">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Popular NFT</p>
          <h2>High-demand assets surfaced with a clean browsing flow</h2>
        </div>
        <a class="text-link" href="#/marketplace">Browse catalog</a>
      </div>
      <div class="nft-grid">${nftItems.slice(0, 4).map((item) => nftCard(item, state)).join("")}</div>
    </section>

    <section class="feature-band">
      <article>
        <span class="feature-index">01</span>
        <h3>Wallet-first onboarding</h3>
        <p>Fast entry point with minimal friction for users who want to explore before acting.</p>
      </article>
      <article>
        <span class="feature-index">02</span>
        <h3>Readable token pages</h3>
        <p>Price, rarity, owner data and activity are grouped into a single clear decision layer.</p>
      </article>
      <article>
        <span class="feature-index">03</span>
        <h3>Curated visual system</h3>
        <p>Dark luxury art direction keeps focus on NFT content instead of UI clutter.</p>
      </article>
    </section>

    <section class="steps-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">How it starts</p>
          <h2>Three steps from discovery to ownership</h2>
        </div>
      </div>
      <div class="steps-grid">
        <article><span>1</span><h3>Connect wallet</h3><p>Choose a wallet and unlock access to favorites, profile and transactions.</p></article>
        <article><span>2</span><h3>Explore assets</h3><p>Use filters, collection rankings and token pages to compare opportunities.</p></article>
        <article><span>3</span><h3>Buy or list</h3><p>Complete a purchase or create a polished listing in a guided creator flow.</p></article>
      </div>
    </section>

    <section class="cta-panel">
      <div>
        <p class="eyebrow">Start your digital vault</p>
        <h2>Build a collection interface that feels as premium as the assets inside it.</h2>
      </div>
      <div class="hero-actions">
        <a class="button button-primary" href="#/wallet">Connect wallet</a>
        <a class="button button-secondary" href="#/create">Create listing</a>
      </div>
    </section>
  `;
}

function marketplacePage(state: AppState): string {
  const visible = state.filter === "all" ? nftItems : nftItems.filter((item) => item.type === state.filter);

  return `
    <section class="page-header">
      <div>
        <p class="eyebrow">Marketplace</p>
        <h1>Browse premium NFT inventory</h1>
      </div>
      <a class="button button-secondary" href="#/favorites">Open favorites</a>
    </section>

    <section class="catalog-layout">
      <aside class="sidebar">
        <h3>Filters</h3>
        <button class="filter-chip ${state.filter === "all" ? "active" : ""}" data-filter="all">All assets</button>
        <button class="filter-chip ${state.filter === "art" ? "active" : ""}" data-filter="art">Digital art</button>
        <button class="filter-chip ${state.filter === "music" ? "active" : ""}" data-filter="music">Music NFT</button>
        <button class="filter-chip ${state.filter === "gaming" ? "active" : ""}" data-filter="gaming">Gaming</button>
        <button class="filter-chip ${state.filter === "fashion" ? "active" : ""}" data-filter="fashion">Fashion</button>

        <div class="sidebar-group">
          <p class="sidebar-label">Price range</p>
          <div class="range-line"></div>
          <div class="card-row card-meta"><span>0.1 ETH</span><span>3.0 ETH</span></div>
        </div>

        <div class="sidebar-group">
          <p class="sidebar-label">Networks</p>
          <div class="mini-tags"><span>Ethereum</span><span>Base</span><span>Polygon</span></div>
        </div>
      </aside>

      <div class="catalog-main">
        <div class="catalog-toolbar">
          <div class="search-shell"><span>Search collections, creators, token IDs</span></div>
          <div class="mini-tags"><span>Trending first</span><span>Verified</span></div>
        </div>
        <div class="nft-grid">${visible.map((item) => nftCard(item, state)).join("")}</div>
      </div>
    </section>
  `;
}

function nftPage(id: string, state: AppState): string {
  const item = nftItems.find((entry) => entry.id === id) ?? nftItems[0];
  const favorite = state.favorites.has(item.id) ? "is-active" : "";
  const maxValue = Math.max(...item.priceHistory.map((entry) => entry.value));

  return `
    <section class="detail-layout">
      <article class="detail-media" style="background:${item.image}">
        <span class="visual-ring"></span>
        <span class="media-chip">${item.network}</span>
      </article>

      <article class="detail-panel">
        <div class="detail-top">
          <div>
            <p class="eyebrow">${item.collection}</p>
            <h1>${item.name}</h1>
          </div>
          <button class="favorite-button ${favorite}" data-favorite="${item.id}" aria-label="Toggle favorite">
            <span>+</span>
          </button>
        </div>

        <p class="detail-description">${item.description}</p>

        <div class="detail-info-grid">
          <article class="info-tile"><span>Current price</span><strong>${item.price}</strong></article>
          <article class="info-tile"><span>Owner</span><strong>${item.owner}</strong></article>
          <article class="info-tile"><span>Rarity</span><strong>${item.rarity}</strong></article>
          <article class="info-tile"><span>Creator</span><strong>${item.creator}</strong></article>
        </div>

        <div class="detail-actions">
          <button class="button button-primary">Buy now</button>
          <button class="button button-secondary">Make offer</button>
        </div>

        <section class="panel-block">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Properties</p>
              <h2>Trait breakdown</h2>
            </div>
          </div>
          <div class="property-grid">
            ${item.properties
              .map(
                (property) => `
                  <article class="property-card">
                    <span>${property.trait}</span>
                    <strong>${property.value}</strong>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="panel-block">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Price history</p>
              <h2>Value progression</h2>
            </div>
          </div>
          <div class="chart">
            ${item.priceHistory
              .map((point) => {
                const height = `${Math.round((point.value / maxValue) * 100)}%`;
                return `
                  <div class="chart-bar">
                    <div class="chart-fill" style="height:${height}"></div>
                    <span>${point.label}</span>
                  </div>
                `;
              })
              .join("")}
          </div>
        </section>

        <section class="panel-block">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Activity</p>
              <h2>Recent market actions</h2>
            </div>
          </div>
          <div class="activity-list">
            <article><strong>Listed</strong><span>2 hours ago</span><span>${item.price}</span></article>
            <article><strong>Offer placed</strong><span>Yesterday</span><span>1.48 ETH</span></article>
            <article><strong>Transferred</strong><span>Apr 09</span><span>Wallet to wallet</span></article>
          </div>
        </section>
      </article>
    </section>
  `;
}

function collectionsPage(): string {
  return `
    <section class="page-header">
      <div>
        <p class="eyebrow">Collections</p>
        <h1>Track curated ecosystems and market momentum</h1>
      </div>
    </section>

    <div class="collection-grid">${collectionCards()}</div>

    <section class="ranking-table">
      <div class="table-head">
        <span>Collection</span>
        <span>Floor</span>
        <span>Volume</span>
        <span>24h</span>
      </div>
      ${collections
        .map(
          (item) => `
            <article class="table-row">
              <span>${item.name}</span>
              <span>${item.floor}</span>
              <span>${item.volume}</span>
              <span class="trend">${item.change}</span>
            </article>
          `,
        )
        .join("")}
    </section>
  `;
}

function profilePage(state: AppState): string {
  return `
    <section class="profile-hero">
      <div class="profile-avatar">N</div>
      <div class="profile-copy">
        <p class="eyebrow">Collector profile</p>
        <h1>Nexora Vault</h1>
        <p>0x71C2...44EF</p>
      </div>
      <div class="profile-actions">
        <a class="button button-secondary" href="#/create">Create listing</a>
      </div>
    </section>

    <section class="profile-stats">
      <article><span>Owned</span><strong>16</strong></article>
      <article><span>On sale</span><strong>5</strong></article>
      <article><span>Total value</span><strong>18.4 ETH</strong></article>
      <article><span>Activity</span><strong>42 actions</strong></article>
    </section>

    <section class="section-grid">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Owned assets</p>
          <h2>Portfolio overview</h2>
        </div>
      </div>
      <div class="nft-grid">${nftItems.slice(0, 3).map((item) => nftCard(item, state)).join("")}</div>
    </section>

    <section class="panel-block">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Recent activity</p>
          <h2>Wallet timeline</h2>
        </div>
      </div>
      <div class="activity-list">
        <article><strong>Bought Prism Archive #01</strong><span>Today</span><span>1.62 ETH</span></article>
        <article><strong>Listed Neon Driver #88</strong><span>Yesterday</span><span>0.94 ETH</span></article>
        <article><strong>Added Bloom Frequency to favorites</strong><span>Apr 14</span><span>Saved</span></article>
      </div>
    </section>
  `;
}

function createPage(state: AppState): string {
  return `
    <section class="page-header">
      <div>
        <p class="eyebrow">Create listing</p>
        <h1>Prepare an NFT listing with a polished creator flow</h1>
      </div>
    </section>

    <section class="create-layout">
      <article class="form-panel">
        <div class="field-grid">
          <label class="field"><span>Artwork title</span><div class="input-shell">Enter title</div></label>
          <label class="field"><span>Collection</span><div class="input-shell">Choose collection</div></label>
          <label class="field field-full">
            <span>Description</span>
            <div class="input-shell input-tall">Describe the concept, rarity and artistic value</div>
          </label>
          <label class="field"><span>Price</span><div class="input-shell">0.00 ETH</div></label>
          <label class="field"><span>Network</span><div class="input-shell">Ethereum</div></label>
        </div>
        <div class="detail-actions">
          <button class="button button-primary">Publish listing</button>
          <button class="button button-secondary">Save draft</button>
        </div>
      </article>

      <article class="preview-panel">
        <p class="eyebrow">Live preview</p>
        ${nftCard(nftItems[0], state)}
      </article>
    </section>
  `;
}

function walletPage(): string {
  return `
    <section class="page-header">
      <div>
        <p class="eyebrow">Wallet access</p>
        <h1>Connect a wallet to unlock your Web3 profile</h1>
      </div>
    </section>

    <div class="wallet-grid">
      ${walletOptions
        .map(
          (wallet) => `
            <article class="wallet-card">
              <div class="wallet-mark">${wallet.name.slice(0, 1)}</div>
              <div>
                <h3>${wallet.name}</h3>
                <p>${wallet.label}</p>
              </div>
              <button class="button button-secondary">Connect</button>
            </article>
          `,
        )
        .join("")}
    </div>

    <section class="panel-block">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Why connect</p>
          <h2>Wallet-gated actions</h2>
        </div>
      </div>
      <div class="steps-grid">
        <article><span>1</span><h3>Buy tokens</h3><p>Required to confirm on-chain purchases and offers.</p></article>
        <article><span>2</span><h3>Manage profile</h3><p>Display owned assets, saved items and transaction history.</p></article>
        <article><span>3</span><h3>List NFT</h3><p>Publish assets in a marketplace-ready layout.</p></article>
      </div>
    </section>
  `;
}

function favoritesPage(state: AppState): string {
  const favorites = nftItems.filter((item) => state.favorites.has(item.id));
  return `
    <section class="page-header">
      <div>
        <p class="eyebrow">Favorites</p>
        <h1>Saved NFT for quick return and comparison</h1>
      </div>
    </section>
    <div class="nft-grid">${favorites.map((item) => nftCard(item, state)).join("")}</div>
  `;
}

function helpPage(): string {
  return `
    <section class="page-header">
      <div>
        <p class="eyebrow">FAQ and help</p>
        <h1>Core onboarding answers for a Web3 marketplace</h1>
      </div>
    </section>

    <section class="faq-list">
      <article>
        <h3>How do I start using the platform?</h3>
        <p>Open the wallet page, choose a wallet provider, connect your account and then browse the marketplace.</p>
      </article>
      <article>
        <h3>What can I see before connecting a wallet?</h3>
        <p>You can explore collections, open NFT pages, compare prices and review market metrics without authentication.</p>
      </article>
      <article>
        <h3>How does listing work in this prototype?</h3>
        <p>The creator flow focuses on UX: title, description, collection, price and preview blocks are organized for clarity.</p>
      </article>
      <article>
        <h3>Why is the interface dark?</h3>
        <p>Dark premium UI helps media assets stand out, reduces visual noise and supports the digital luxury positioning.</p>
      </article>
    </section>
  `;
}

function designPage(state: AppState): string {
  return `
    <section class="page-header">
      <div>
        <p class="eyebrow">Figma kit</p>
        <h1>Design board for transferring the prototype into Figma</h1>
      </div>
      <a class="button button-secondary" href="#/">Back to product</a>
    </section>

    <section class="design-board">
      <article class="design-panel design-cover">
        <div>
          <p class="eyebrow">Cover frame</p>
          <h2>Nexora UI Kit</h2>
          <p>Premium NFT marketplace system with desktop, tablet and mobile frames.</p>
        </div>
        <img src="/figma/logo-wordmark.svg" alt="Nexora wordmark" />
      </article>

      <article class="design-panel">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Color styles</p>
            <h2>Core tokens</h2>
          </div>
        </div>
        <div class="token-grid">
          <div class="token-card"><span style="background:#0A0B10"></span><strong>Background</strong><p>#0A0B10</p></div>
          <div class="token-card"><span style="background:#12141B"></span><strong>Surface</strong><p>#12141B</p></div>
          <div class="token-card"><span style="background:#7C5CFF"></span><strong>Accent</strong><p>#7C5CFF</p></div>
          <div class="token-card"><span style="background:#2FD6FF"></span><strong>Hover / Active</strong><p>#2FD6FF</p></div>
          <div class="token-card"><span style="background:#F5F7FF"></span><strong>Primary text</strong><p>#F5F7FF</p></div>
          <div class="token-card"><span style="background:#9AA3B2"></span><strong>Secondary text</strong><p>#9AA3B2</p></div>
        </div>
      </article>

      <article class="design-panel">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Typography</p>
            <h2>Text styles</h2>
          </div>
        </div>
        <div class="type-grid">
          <div class="type-card">
            <span>Display / Space Grotesk / 72 / Semibold</span>
            <h1>Collect Digital Culture</h1>
          </div>
          <div class="type-card">
            <span>Heading / Space Grotesk / 40 / Medium</span>
            <h2>Trending collections with visible momentum</h2>
          </div>
          <div class="type-card">
            <span>Body / Manrope / 16 / Regular</span>
            <p>Readable product copy designed for long sections, token descriptions and instructional text.</p>
          </div>
          <div class="type-card">
            <span>Data / JetBrains Mono / 14 / Medium</span>
            <code>1.62 ETH / 0x71C2...44EF / 24H +18.4%</code>
          </div>
        </div>
      </article>

      <article class="design-panel">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Components</p>
            <h2>Main UI set</h2>
          </div>
        </div>
        <div class="component-grid">
          <div class="component-card">
            <p>Buttons</p>
            <div class="hero-actions">
              <button class="button button-primary">Primary action</button>
              <button class="button button-secondary">Secondary</button>
            </div>
          </div>
          <div class="component-card">
            <p>Status and tags</p>
            <div class="mini-tags">
              <span>Verified</span>
              <span>Trending</span>
              <span>Ethereum</span>
            </div>
          </div>
          <div class="component-card">
            <p>NFT card</p>
            ${nftCard(nftItems[0], state)}
          </div>
          <div class="component-card">
            <p>Collection card</p>
            ${collectionCard(collections[0])}
          </div>
        </div>
      </article>

      <article class="design-panel">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Frame map</p>
            <h2>Mandatory Figma screens</h2>
          </div>
        </div>
        <div class="frame-grid">
          <div class="frame-card"><strong>01 Cover</strong><p>Project identity, logo, subtitle, palette preview.</p></div>
          <div class="frame-card"><strong>02 Design System</strong><p>Colors, type, grids, spacing, buttons, cards, tags.</p></div>
          <div class="frame-card"><strong>03 Home Desktop</strong><p>Hero, trending collections, popular NFT, CTA, footer.</p></div>
          <div class="frame-card"><strong>04 Marketplace Desktop</strong><p>Sidebar filters, toolbar, NFT grid.</p></div>
          <div class="frame-card"><strong>05 NFT Detail Desktop</strong><p>Media preview, pricing, properties, history, actions.</p></div>
          <div class="frame-card"><strong>06 Collections</strong><p>Collection cards and ranking table.</p></div>
          <div class="frame-card"><strong>07 Profile</strong><p>Portfolio stats, owned assets, activity.</p></div>
          <div class="frame-card"><strong>08 Create Listing</strong><p>Form layout plus live preview.</p></div>
          <div class="frame-card"><strong>09 Wallet Modal / Page</strong><p>Wallet provider choice and explanatory blocks.</p></div>
          <div class="frame-card"><strong>10 Favorites + FAQ</strong><p>Saved assets and onboarding help states.</p></div>
          <div class="frame-card"><strong>11 Tablet</strong><p>Home and marketplace rearranged to 8-column grid.</p></div>
          <div class="frame-card"><strong>12 Mobile</strong><p>Home, NFT detail, profile and connect wallet.</p></div>
        </div>
      </article>

      <article class="design-panel">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Assets</p>
            <h2>SVG files for import</h2>
          </div>
        </div>
        <div class="asset-grid">
          <img src="/figma/logo-mark.svg" alt="Logo mark" />
          <img src="/figma/hero-art.svg" alt="Hero art" />
          <img src="/figma/empty-favorites.svg" alt="Empty state" />
        </div>
      </article>
    </section>
  `;
}

function pageContent(route: Route, nftId: string, state: AppState): string {
  if (route === "home") {
    return homePage(state);
  }
  if (route === "marketplace") {
    return marketplacePage(state);
  }
  if (route === "nft") {
    return nftPage(nftId, state);
  }
  if (route === "collections") {
    return collectionsPage();
  }
  if (route === "profile") {
    return profilePage(state);
  }
  if (route === "create") {
    return createPage(state);
  }
  if (route === "wallet") {
    return walletPage();
  }
  if (route === "favorites") {
    return favoritesPage(state);
  }
  if (route === "help") {
    return helpPage();
  }
  if (route === "design") {
    return designPage(state);
  }
  return homePage(state);
}

export function createApp(root: HTMLDivElement): void {
  const state: AppState = {
    filter: "all",
    favorites: new Set<string>(["nxr-001", "nxr-003"]),
  };

  const render = (): void => {
    const { page, nftId } = getRoute();
    root.innerHTML = `
      <div class="shell">
        <div class="bg-orb bg-orb-left"></div>
        <div class="bg-orb bg-orb-right"></div>
        <header class="topbar">
          <a class="brand" href="#/">
            <span class="brand-mark">N</span>
            <div><strong>Nexora</strong><span>Premium NFT marketplace</span></div>
          </a>
          <nav class="nav">
            ${navLink("home", "Home")}
            ${navLink("marketplace", "Marketplace")}
            ${navLink("collections", "Collections")}
            ${navLink("profile", "Profile")}
            ${navLink("create", "Create")}
            ${navLink("help", "Help")}
            ${navLink("design", "Figma Kit")}
          </nav>
          <a class="button button-primary topbar-button" href="#/wallet">Connect Wallet</a>
        </header>
        <main class="content">${pageContent(page, nftId, state)}</main>
        <footer class="footer">
          <div>
            <strong>Nexora</strong>
            <p>Concept frontend for an NFT marketplace focused on premium UX/UI presentation.</p>
          </div>
          <div class="footer-links">
            <a href="#/marketplace">Marketplace</a>
            <a href="#/collections">Collections</a>
            <a href="#/favorites">Favorites</a>
            <a href="#/help">FAQ</a>
          </div>
        </footer>
      </div>
    `;

    document.querySelectorAll<HTMLElement>("[data-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.dataset.filter as FilterKey | undefined;
        if (value) {
          state.filter = value;
          render();
        }
      });
    });

    document.querySelectorAll<HTMLElement>("[data-favorite]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const id = button.dataset.favorite;
        if (!id) {
          return;
        }
        if (state.favorites.has(id)) {
          state.favorites.delete(id);
        } else {
          state.favorites.add(id);
        }
        render();
      });
    });
  };

  window.addEventListener("hashchange", render);
  void walletOptions;
  render();
}
