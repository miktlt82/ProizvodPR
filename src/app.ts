import { collections, nftItems, stats, walletOptions } from "./data";
import { copy } from "./i18n";
import type { FilterKey, Language, LocalizedText, NftItem, Route } from "./types";

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

const storageKey = "nexora-language";

type AppState = {
  filter: FilterKey;
  favorites: Set<string>;
  language: Language;
};

function localize(value: LocalizedText, language: Language): string {
  return value[language];
}

function getInitialLanguage(): Language {
  const savedLanguage = window.localStorage.getItem(storageKey);
  if (savedLanguage === "en" || savedLanguage === "ru") {
    return savedLanguage;
  }

  return window.navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
}

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

function metricCards(language: Language): string {
  return stats
    .map(
      (item) => `
        <article class="metric-card">
          <p>${localize(item.label, language)}</p>
          <h3>${item.value}</h3>
        </article>
      `,
    )
    .join("");
}

function collectionCard(item: (typeof collections)[number], language: Language): string {
  const ui = copy[language];
  return `
    <article class="collection-card ${item.theme}">
      <div class="collection-cover">
        <span class="collection-badge">${ui.curated}</span>
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
          <span><strong>${item.floor}</strong> ${ui.floor}</span>
          <span><strong>${item.volume}</strong> ${ui.volume}</span>
          <span><strong>${item.items}</strong> ${ui.items}</span>
        </div>
      </div>
    </article>
  `;
}

function collectionCards(language: Language): string {
  return collections.map((item) => collectionCard(item, language)).join("");
}

function nftCard(item: NftItem, state: AppState): string {
  const favorite = state.favorites.has(item.id) ? "is-active" : "";
  const ui = copy[state.language];

  return `
    <article class="nft-card">
      <button class="favorite-button ${favorite}" data-favorite="${item.id}" aria-label="${ui.toggleFavorite}">
        <span>+</span>
      </button>
      <a class="card-media" href="#/nft?id=${item.id}" style="background:${item.image}">
        <span class="media-orbit"></span>
        <span class="media-chip">${localize(item.rarity, state.language)}</span>
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
  const ui = copy[state.language];

  return `
    <section class="hero">
      <div class="hero-copy">
        <span class="section-chip">${ui.home.chip}</span>
        <h1>${ui.home.title}</h1>
        <p>${ui.home.description}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#/marketplace">${ui.home.exploreMarketplace}</a>
          <a class="button button-secondary" href="#/wallet">${ui.connectWallet}</a>
        </div>
        <div class="hero-metrics">${metricCards(state.language)}</div>
      </div>
      <div class="hero-panel">
        <article class="spotlight-card">
          <div class="spotlight-visual" style="background:${nftItems[0].image}">
            <span class="visual-ring"></span>
            <span class="visual-tag">${ui.home.featuredDrop}</span>
          </div>
          <div class="spotlight-content">
            <div class="card-row">
              <div>
                <p class="eyebrow">${ui.home.todaySpotlight}</p>
                <h2>${nftItems[0].name}</h2>
              </div>
              <span class="price-badge">${nftItems[0].price}</span>
            </div>
            <p>${localize(nftItems[0].description, state.language)}</p>
            <div class="spotlight-footer">
              <span>${ui.home.creator} ${nftItems[0].creator}</span>
              <a href="#/nft?id=${nftItems[0].id}">${ui.home.viewToken}</a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="section-grid">
      <div class="section-heading">
        <div>
          <p class="eyebrow">${ui.home.trendingCollections}</p>
          <h2>${ui.home.trendingCollectionsTitle}</h2>
        </div>
        <a class="text-link" href="#/collections">${ui.home.viewAllCollections}</a>
      </div>
      <div class="collection-grid">${collectionCards(state.language)}</div>
    </section>

    <section class="section-grid">
      <div class="section-heading">
        <div>
          <p class="eyebrow">${ui.home.popularNft}</p>
          <h2>${ui.home.popularNftTitle}</h2>
        </div>
        <a class="text-link" href="#/marketplace">${ui.home.browseCatalog}</a>
      </div>
      <div class="nft-grid">${nftItems.slice(0, 4).map((item) => nftCard(item, state)).join("")}</div>
    </section>

    <section class="feature-band">
      ${ui.home.features
        .map(
          (feature, index) => `
            <article>
              <span class="feature-index">${String(index + 1).padStart(2, "0")}</span>
              <h3>${feature.title}</h3>
              <p>${feature.description}</p>
            </article>
          `,
        )
        .join("")}
    </section>

    <section class="steps-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">${ui.home.howItStarts}</p>
          <h2>${ui.home.stepsTitle}</h2>
        </div>
      </div>
      <div class="steps-grid">
        ${ui.home.steps
          .map(
            (step, index) => `
              <article><span>${index + 1}</span><h3>${step.title}</h3><p>${step.description}</p></article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="cta-panel">
      <div>
        <p class="eyebrow">${ui.home.startVault}</p>
        <h2>${ui.home.startVaultTitle}</h2>
      </div>
      <div class="hero-actions">
        <a class="button button-primary" href="#/wallet">${ui.connectWallet}</a>
        <a class="button button-secondary" href="#/create">${ui.home.createListing}</a>
      </div>
    </section>
  `;
}

function marketplacePage(state: AppState): string {
  const ui = copy[state.language];
  const visible = state.filter === "all" ? nftItems : nftItems.filter((item) => item.type === state.filter);

  return `
    <section class="page-header">
      <div>
        <p class="eyebrow">${ui.marketplace.eyebrow}</p>
        <h1>${ui.marketplace.title}</h1>
      </div>
      <a class="button button-secondary" href="#/favorites">${ui.marketplace.openFavorites}</a>
    </section>

    <section class="catalog-layout">
      <aside class="sidebar">
        <h3>${ui.marketplace.filters}</h3>
        <button class="filter-chip ${state.filter === "all" ? "active" : ""}" data-filter="all">${ui.marketplace.allAssets}</button>
        <button class="filter-chip ${state.filter === "art" ? "active" : ""}" data-filter="art">${ui.marketplace.digitalArt}</button>
        <button class="filter-chip ${state.filter === "music" ? "active" : ""}" data-filter="music">${ui.marketplace.musicNft}</button>
        <button class="filter-chip ${state.filter === "gaming" ? "active" : ""}" data-filter="gaming">${ui.marketplace.gaming}</button>
        <button class="filter-chip ${state.filter === "fashion" ? "active" : ""}" data-filter="fashion">${ui.marketplace.fashion}</button>

        <div class="sidebar-group">
          <p class="sidebar-label">${ui.marketplace.priceRange}</p>
          <div class="range-line"></div>
          <div class="card-row card-meta"><span>0.1 ETH</span><span>3.0 ETH</span></div>
        </div>

        <div class="sidebar-group">
          <p class="sidebar-label">${ui.marketplace.networks}</p>
          <div class="mini-tags"><span>Ethereum</span><span>Base</span><span>Polygon</span></div>
        </div>
      </aside>

      <div class="catalog-main">
        <div class="catalog-toolbar">
          <div class="search-shell"><span>${ui.marketplace.searchPlaceholder}</span></div>
          <div class="mini-tags"><span>${ui.marketplace.trendingFirst}</span><span>${ui.marketplace.verified}</span></div>
        </div>
        <div class="nft-grid">${visible.map((item) => nftCard(item, state)).join("")}</div>
      </div>
    </section>
  `;
}

function nftPage(id: string, state: AppState): string {
  const ui = copy[state.language];
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
          <button class="favorite-button ${favorite}" data-favorite="${item.id}" aria-label="${ui.toggleFavorite}">
            <span>+</span>
          </button>
        </div>

        <p class="detail-description">${localize(item.description, state.language)}</p>

        <div class="detail-info-grid">
          <article class="info-tile"><span>${ui.nft.currentPrice}</span><strong>${item.price}</strong></article>
          <article class="info-tile"><span>${ui.nft.owner}</span><strong>${item.owner}</strong></article>
          <article class="info-tile"><span>${ui.nft.rarity}</span><strong>${localize(item.rarity, state.language)}</strong></article>
          <article class="info-tile"><span>${ui.nft.creator}</span><strong>${item.creator}</strong></article>
        </div>

        <div class="detail-actions">
          <button class="button button-primary">${ui.nft.buyNow}</button>
          <button class="button button-secondary">${ui.nft.makeOffer}</button>
        </div>

        <section class="panel-block">
          <div class="section-heading">
            <div>
              <p class="eyebrow">${ui.nft.properties}</p>
              <h2>${ui.nft.traitBreakdown}</h2>
            </div>
          </div>
          <div class="property-grid">
            ${item.properties
              .map(
                (property) => `
                  <article class="property-card">
                    <span>${localize(property.trait, state.language)}</span>
                    <strong>${localize(property.value, state.language)}</strong>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="panel-block">
          <div class="section-heading">
            <div>
              <p class="eyebrow">${ui.nft.priceHistory}</p>
              <h2>${ui.nft.valueProgression}</h2>
            </div>
          </div>
          <div class="chart">
            ${item.priceHistory
              .map((point) => {
                const height = `${Math.round((point.value / maxValue) * 100)}%`;
                return `
                  <div class="chart-bar">
                    <div class="chart-fill" style="height:${height}"></div>
                    <span>${localize(point.label, state.language)}</span>
                  </div>
                `;
              })
              .join("")}
          </div>
        </section>

        <section class="panel-block">
          <div class="section-heading">
            <div>
              <p class="eyebrow">${ui.nft.activity}</p>
              <h2>${ui.nft.recentMarketActions}</h2>
            </div>
          </div>
          <div class="activity-list">
            <article><strong>${ui.nft.listed}</strong><span>${ui.nft.hoursAgo2}</span><span>${item.price}</span></article>
            <article><strong>${ui.nft.offerPlaced}</strong><span>${ui.nft.yesterday}</span><span>1.48 ETH</span></article>
            <article><strong>${ui.nft.transferred}</strong><span>${ui.nft.apr09}</span><span>${ui.nft.walletToWallet}</span></article>
          </div>
        </section>
      </article>
    </section>
  `;
}

function collectionsPage(language: Language): string {
  const ui = copy[language];

  return `
    <section class="page-header">
      <div>
        <p class="eyebrow">${ui.collections.eyebrow}</p>
        <h1>${ui.collections.title}</h1>
      </div>
    </section>

    <div class="collection-grid">${collectionCards(language)}</div>

    <section class="ranking-table">
      <div class="table-head">
        <span>${ui.collections.collection}</span>
        <span>${ui.collections.floor}</span>
        <span>${ui.collections.volume}</span>
        <span>${ui.collections.day24h}</span>
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
  const ui = copy[state.language];

  return `
    <section class="profile-hero">
      <div class="profile-avatar">N</div>
      <div class="profile-copy">
        <p class="eyebrow">${ui.profile.eyebrow}</p>
        <h1>${ui.profile.title}</h1>
        <p>0x71C2...44EF</p>
      </div>
      <div class="profile-actions">
        <a class="button button-secondary" href="#/create">${ui.profile.createListing}</a>
      </div>
    </section>

    <section class="profile-stats">
      <article><span>${ui.profile.owned}</span><strong>16</strong></article>
      <article><span>${ui.profile.onSale}</span><strong>5</strong></article>
      <article><span>${ui.profile.totalValue}</span><strong>18.4 ETH</strong></article>
      <article><span>${ui.profile.activity}</span><strong>42 actions</strong></article>
    </section>

    <section class="section-grid">
      <div class="section-heading">
        <div>
          <p class="eyebrow">${ui.profile.ownedAssets}</p>
          <h2>${ui.profile.portfolioOverview}</h2>
        </div>
      </div>
      <div class="nft-grid">${nftItems.slice(0, 3).map((item) => nftCard(item, state)).join("")}</div>
    </section>

    <section class="panel-block">
      <div class="section-heading">
        <div>
          <p class="eyebrow">${ui.profile.recentActivity}</p>
          <h2>${ui.profile.walletTimeline}</h2>
        </div>
      </div>
      <div class="activity-list">
        <article><strong>${ui.profile.bought}</strong><span>${ui.profile.today}</span><span>1.62 ETH</span></article>
        <article><strong>${ui.profile.listed}</strong><span>${ui.profile.yesterday}</span><span>0.94 ETH</span></article>
        <article><strong>${ui.profile.addedToFavorites}</strong><span>${ui.profile.apr14}</span><span>${ui.profile.saved}</span></article>
      </div>
    </section>
  `;
}

function createPage(state: AppState): string {
  const ui = copy[state.language];

  return `
    <section class="page-header">
      <div>
        <p class="eyebrow">${ui.create.eyebrow}</p>
        <h1>${ui.create.title}</h1>
      </div>
    </section>

    <section class="create-layout">
      <article class="form-panel">
        <div class="field-grid">
          <label class="field"><span>${ui.create.artworkTitle}</span><div class="input-shell">${ui.create.enterTitle}</div></label>
          <label class="field"><span>${ui.create.collection}</span><div class="input-shell">${ui.create.chooseCollection}</div></label>
          <label class="field field-full">
            <span>${ui.create.description}</span>
            <div class="input-shell input-tall">${ui.create.descriptionPlaceholder}</div>
          </label>
          <label class="field"><span>${ui.create.price}</span><div class="input-shell">0.00 ETH</div></label>
          <label class="field"><span>${ui.create.network}</span><div class="input-shell">Ethereum</div></label>
        </div>
        <div class="detail-actions">
          <button class="button button-primary">${ui.create.publishListing}</button>
          <button class="button button-secondary">${ui.create.saveDraft}</button>
        </div>
      </article>

      <article class="preview-panel">
        <p class="eyebrow">${ui.create.livePreview}</p>
        ${nftCard(nftItems[0], state)}
      </article>
    </section>
  `;
}

function walletPage(language: Language): string {
  const ui = copy[language];

  return `
    <section class="page-header">
      <div>
        <p class="eyebrow">${ui.wallet.eyebrow}</p>
        <h1>${ui.wallet.title}</h1>
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
                <p>${localize(wallet.label, language)}</p>
              </div>
              <button class="button button-secondary">${ui.wallet.connect}</button>
            </article>
          `,
        )
        .join("")}
    </div>

    <section class="panel-block">
      <div class="section-heading">
        <div>
          <p class="eyebrow">${ui.wallet.whyConnect}</p>
          <h2>${ui.wallet.walletGatedActions}</h2>
        </div>
      </div>
      <div class="steps-grid">
        ${ui.wallet.steps
          .map(
            (step, index) => `
              <article><span>${index + 1}</span><h3>${step.title}</h3><p>${step.description}</p></article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function favoritesPage(state: AppState): string {
  const ui = copy[state.language];
  const favorites = nftItems.filter((item) => state.favorites.has(item.id));

  return `
    <section class="page-header">
      <div>
        <p class="eyebrow">${ui.favorites.eyebrow}</p>
        <h1>${ui.favorites.title}</h1>
      </div>
    </section>
    <div class="nft-grid">${favorites.map((item) => nftCard(item, state)).join("")}</div>
  `;
}

function helpPage(language: Language): string {
  const ui = copy[language];

  return `
    <section class="page-header">
      <div>
        <p class="eyebrow">${ui.help.eyebrow}</p>
        <h1>${ui.help.title}</h1>
      </div>
    </section>

    <section class="faq-list">
      ${ui.help.questions
        .map(
          (question) => `
            <article>
              <h3>${question.title}</h3>
              <p>${question.description}</p>
            </article>
          `,
        )
        .join("")}
    </section>
  `;
}

function designPage(state: AppState): string {
  const ui = copy[state.language];

  return `
    <section class="page-header">
      <div>
        <p class="eyebrow">${ui.design.eyebrow}</p>
        <h1>${ui.design.title}</h1>
      </div>
      <a class="button button-secondary" href="#/">${ui.design.backToProduct}</a>
    </section>

    <section class="design-board">
      <article class="design-panel design-cover">
        <div>
          <p class="eyebrow">${ui.design.coverFrame}</p>
          <h2>${ui.design.kitTitle}</h2>
          <p>${ui.design.kitDescription}</p>
        </div>
        <img src="/figma/logo-wordmark.svg" alt="${ui.design.wordmarkAlt}" />
      </article>

      <article class="design-panel">
        <div class="section-heading">
          <div>
            <p class="eyebrow">${ui.design.colorStyles}</p>
            <h2>${ui.design.coreTokens}</h2>
          </div>
        </div>
        <div class="token-grid">
          <div class="token-card"><span style="background:#0A0B10"></span><strong>${ui.design.tokens.background}</strong><p>#0A0B10</p></div>
          <div class="token-card"><span style="background:#12141B"></span><strong>${ui.design.tokens.surface}</strong><p>#12141B</p></div>
          <div class="token-card"><span style="background:#7C5CFF"></span><strong>${ui.design.tokens.accent}</strong><p>#7C5CFF</p></div>
          <div class="token-card"><span style="background:#2FD6FF"></span><strong>${ui.design.tokens.hover}</strong><p>#2FD6FF</p></div>
          <div class="token-card"><span style="background:#F5F7FF"></span><strong>${ui.design.tokens.primaryText}</strong><p>#F5F7FF</p></div>
          <div class="token-card"><span style="background:#9AA3B2"></span><strong>${ui.design.tokens.secondaryText}</strong><p>#9AA3B2</p></div>
        </div>
      </article>

      <article class="design-panel">
        <div class="section-heading">
          <div>
            <p class="eyebrow">${ui.design.typography}</p>
            <h2>${ui.design.textStyles}</h2>
          </div>
        </div>
        <div class="type-grid">
          <div class="type-card">
            <span>${ui.design.type.display}</span>
            <h1>${ui.design.type.displayTitle}</h1>
          </div>
          <div class="type-card">
            <span>${ui.design.type.heading}</span>
            <h2>${ui.design.type.headingTitle}</h2>
          </div>
          <div class="type-card">
            <span>${ui.design.type.body}</span>
            <p>${ui.design.type.bodyText}</p>
          </div>
          <div class="type-card">
            <span>${ui.design.type.data}</span>
            <code>1.62 ETH / 0x71C2...44EF / 24H +18.4%</code>
          </div>
        </div>
      </article>

      <article class="design-panel">
        <div class="section-heading">
          <div>
            <p class="eyebrow">${ui.design.components}</p>
            <h2>${ui.design.mainUiSet}</h2>
          </div>
        </div>
        <div class="component-grid">
          <div class="component-card">
            <p>${ui.design.buttons}</p>
            <div class="hero-actions">
              <button class="button button-primary">${ui.design.primaryAction}</button>
              <button class="button button-secondary">${ui.design.secondary}</button>
            </div>
          </div>
          <div class="component-card">
            <p>${ui.design.statusAndTags}</p>
            <div class="mini-tags">
              <span>${ui.marketplace.verified}</span>
              <span>${ui.marketplace.trendingFirst}</span>
              <span>Ethereum</span>
            </div>
          </div>
          <div class="component-card">
            <p>${ui.design.nftCard}</p>
            ${nftCard(nftItems[0], state)}
          </div>
          <div class="component-card">
            <p>${ui.design.collectionCard}</p>
            ${collectionCard(collections[0], state.language)}
          </div>
        </div>
      </article>

      <article class="design-panel">
        <div class="section-heading">
          <div>
            <p class="eyebrow">${ui.design.frameMap}</p>
            <h2>${ui.design.mandatoryScreens}</h2>
          </div>
        </div>
        <div class="frame-grid">
          ${ui.design.frames
            .map(
              (frame) => `
                <div class="frame-card"><strong>${frame.title}</strong><p>${frame.description}</p></div>
              `,
            )
            .join("")}
        </div>
      </article>

      <article class="design-panel">
        <div class="section-heading">
          <div>
            <p class="eyebrow">${ui.design.assets}</p>
            <h2>${ui.design.svgForImport}</h2>
          </div>
        </div>
        <div class="asset-grid">
          <img src="/figma/logo-mark.svg" alt="${ui.design.logoMarkAlt}" />
          <img src="/figma/hero-art.svg" alt="${ui.design.heroArtAlt}" />
          <img src="/figma/empty-favorites.svg" alt="${ui.design.emptyStateAlt}" />
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
    return collectionsPage(state.language);
  }
  if (route === "profile") {
    return profilePage(state);
  }
  if (route === "create") {
    return createPage(state);
  }
  if (route === "wallet") {
    return walletPage(state.language);
  }
  if (route === "favorites") {
    return favoritesPage(state);
  }
  if (route === "help") {
    return helpPage(state.language);
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
    language: getInitialLanguage(),
  };

  const render = (): void => {
    const { page, nftId } = getRoute();
    const ui = copy[state.language];
    document.documentElement.lang = state.language;

    root.innerHTML = `
      <div class="shell">
        <div class="bg-orb bg-orb-left"></div>
        <div class="bg-orb bg-orb-right"></div>
        <header class="topbar">
          <a class="brand" href="#/">
            <span class="brand-mark">
              <img src="/branding/nexora-logo.png" alt="Nexora logo" />
            </span>
            <div><strong>Nexora</strong><span>${ui.brandTagline}</span></div>
          </a>
          <nav class="nav">
            ${navLink("home", ui.nav.home)}
            ${navLink("marketplace", ui.nav.marketplace)}
            ${navLink("collections", ui.nav.collections)}
            ${navLink("profile", ui.nav.profile)}
            ${navLink("create", ui.nav.create)}
            ${navLink("help", ui.nav.help)}
            ${navLink("design", ui.nav.design)}
          </nav>
          <div class="topbar-actions">
            <div class="language-switcher" aria-label="${ui.languageSwitcher}">
              <button class="language-button ${state.language === "en" ? "is-active" : ""}" data-language="en">EN</button>
              <button class="language-button ${state.language === "ru" ? "is-active" : ""}" data-language="ru">RU</button>
            </div>
            <a class="button button-primary topbar-button" href="#/wallet">${ui.connectWallet}</a>
          </div>
        </header>
        <main class="content">${pageContent(page, nftId, state)}</main>
        <footer class="footer">
          <div class="footer-brand">
            <span class="footer-brand-mark">
              <img src="/branding/nexora-logo.png" alt="Nexora logo" />
            </span>
            <strong>Nexora</strong>
            <p>${ui.footerDescription}</p>
          </div>
          <div class="footer-links">
            <a href="#/marketplace">${ui.footerLinks.marketplace}</a>
            <a href="#/collections">${ui.footerLinks.collections}</a>
            <a href="#/favorites">${ui.footerLinks.favorites}</a>
            <a href="#/help">${ui.footerLinks.faq}</a>
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

    document.querySelectorAll<HTMLElement>("[data-language]").forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.dataset.language;
        if (value === "en" || value === "ru") {
          state.language = value;
          window.localStorage.setItem(storageKey, value);
          render();
        }
      });
    });
  };

  window.addEventListener("hashchange", render);
  render();
}
