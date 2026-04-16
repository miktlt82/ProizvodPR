import type { Language, Route } from "./types";

type AppCopy = {
  brandTagline: string;
  nav: Record<Route, string>;
  languageSwitcher: string;
  connectWallet: string;
  footerDescription: string;
  footerLinks: {
    marketplace: string;
    collections: string;
    favorites: string;
    faq: string;
  };
  curated: string;
  floor: string;
  volume: string;
  items: string;
  toggleFavorite: string;
  home: {
    chip: string;
    title: string;
    description: string;
    exploreMarketplace: string;
    featuredDrop: string;
    todaySpotlight: string;
    creator: string;
    viewToken: string;
    trendingCollections: string;
    trendingCollectionsTitle: string;
    viewAllCollections: string;
    popularNft: string;
    popularNftTitle: string;
    browseCatalog: string;
    features: Array<{ title: string; description: string }>;
    howItStarts: string;
    stepsTitle: string;
    steps: Array<{ title: string; description: string }>;
    startVault: string;
    startVaultTitle: string;
    createListing: string;
  };
  marketplace: {
    eyebrow: string;
    title: string;
    openFavorites: string;
    filters: string;
    allAssets: string;
    digitalArt: string;
    musicNft: string;
    gaming: string;
    fashion: string;
    priceRange: string;
    networks: string;
    searchPlaceholder: string;
    trendingFirst: string;
    verified: string;
  };
  nft: {
    currentPrice: string;
    owner: string;
    rarity: string;
    creator: string;
    buyNow: string;
    makeOffer: string;
    properties: string;
    traitBreakdown: string;
    priceHistory: string;
    valueProgression: string;
    activity: string;
    recentMarketActions: string;
    listed: string;
    hoursAgo2: string;
    offerPlaced: string;
    yesterday: string;
    transferred: string;
    apr09: string;
    walletToWallet: string;
  };
  collections: {
    eyebrow: string;
    title: string;
    collection: string;
    floor: string;
    volume: string;
    day24h: string;
  };
  profile: {
    eyebrow: string;
    title: string;
    createListing: string;
    owned: string;
    onSale: string;
    totalValue: string;
    activity: string;
    ownedAssets: string;
    portfolioOverview: string;
    recentActivity: string;
    walletTimeline: string;
    bought: string;
    today: string;
    listed: string;
    yesterday: string;
    addedToFavorites: string;
    apr14: string;
    saved: string;
  };
  create: {
    eyebrow: string;
    title: string;
    artworkTitle: string;
    enterTitle: string;
    collection: string;
    chooseCollection: string;
    description: string;
    descriptionPlaceholder: string;
    price: string;
    network: string;
    publishListing: string;
    saveDraft: string;
    livePreview: string;
  };
  wallet: {
    eyebrow: string;
    title: string;
    connect: string;
    whyConnect: string;
    walletGatedActions: string;
    steps: Array<{ title: string; description: string }>;
  };
  favorites: {
    eyebrow: string;
    title: string;
  };
  help: {
    eyebrow: string;
    title: string;
    questions: Array<{ title: string; description: string }>;
  };
  design: {
    eyebrow: string;
    title: string;
    backToProduct: string;
    coverFrame: string;
    kitTitle: string;
    kitDescription: string;
    colorStyles: string;
    coreTokens: string;
    tokens: {
      background: string;
      surface: string;
      accent: string;
      hover: string;
      primaryText: string;
      secondaryText: string;
    };
    typography: string;
    textStyles: string;
    type: {
      display: string;
      heading: string;
      body: string;
      data: string;
      displayTitle: string;
      headingTitle: string;
      bodyText: string;
    };
    components: string;
    mainUiSet: string;
    buttons: string;
    primaryAction: string;
    secondary: string;
    statusAndTags: string;
    nftCard: string;
    collectionCard: string;
    frameMap: string;
    mandatoryScreens: string;
    frames: Array<{ title: string; description: string }>;
    assets: string;
    svgForImport: string;
    logoMarkAlt: string;
    heroArtAlt: string;
    emptyStateAlt: string;
    wordmarkAlt: string;
  };
};

export const copy: Record<Language, AppCopy> = {
  en: {
    brandTagline: "Premium NFT marketplace",
    nav: {
      home: "Home",
      marketplace: "Marketplace",
      nft: "NFT",
      collections: "Collections",
      profile: "Profile",
      create: "Create",
      wallet: "Wallet",
      favorites: "Favorites",
      help: "Help",
      design: "Figma Kit",
    },
    languageSwitcher: "Language",
    connectWallet: "Connect Wallet",
    footerDescription: "Concept frontend for an NFT marketplace focused on premium UX/UI presentation.",
    footerLinks: {
      marketplace: "Marketplace",
      collections: "Collections",
      favorites: "Favorites",
      faq: "FAQ",
    },
    curated: "Curated",
    floor: "Floor",
    volume: "Volume",
    items: "Items",
    toggleFavorite: "Toggle favorite",
    home: {
      chip: "Curated Web3 marketplace",
      title: "Collect digital assets in a space built to feel premium, clear and alive.",
      description:
        "Nexora is a concept NFT marketplace for exploring curated collections, tracking market signals and listing digital art with a wallet-first flow.",
      exploreMarketplace: "Explore marketplace",
      featuredDrop: "Featured drop",
      todaySpotlight: "Today spotlight",
      creator: "Creator",
      viewToken: "View token",
      trendingCollections: "Trending collections",
      trendingCollectionsTitle: "Signal-rich collections with visible momentum",
      viewAllCollections: "View all collections",
      popularNft: "Popular NFT",
      popularNftTitle: "High-demand assets surfaced with a clean browsing flow",
      browseCatalog: "Browse catalog",
      features: [
        {
          title: "Wallet-first onboarding",
          description: "Fast entry point with minimal friction for users who want to explore before acting.",
        },
        {
          title: "Readable token pages",
          description: "Price, rarity, owner data and activity are grouped into a single clear decision layer.",
        },
        {
          title: "Curated visual system",
          description: "Dark luxury art direction keeps focus on NFT content instead of UI clutter.",
        },
      ],
      howItStarts: "How it starts",
      stepsTitle: "Three steps from discovery to ownership",
      steps: [
        {
          title: "Connect wallet",
          description: "Choose a wallet and unlock access to favorites, profile and transactions.",
        },
        {
          title: "Explore assets",
          description: "Use filters, collection rankings and token pages to compare opportunities.",
        },
        {
          title: "Buy or list",
          description: "Complete a purchase or create a polished listing in a guided creator flow.",
        },
      ],
      startVault: "Start your digital vault",
      startVaultTitle: "Build a collection interface that feels as premium as the assets inside it.",
      createListing: "Create listing",
    },
    marketplace: {
      eyebrow: "Marketplace",
      title: "Browse premium NFT inventory",
      openFavorites: "Open favorites",
      filters: "Filters",
      allAssets: "All assets",
      digitalArt: "Digital art",
      musicNft: "Music NFT",
      gaming: "Gaming",
      fashion: "Fashion",
      priceRange: "Price range",
      networks: "Networks",
      searchPlaceholder: "Search collections, creators, token IDs",
      trendingFirst: "Trending first",
      verified: "Verified",
    },
    nft: {
      currentPrice: "Current price",
      owner: "Owner",
      rarity: "Rarity",
      creator: "Creator",
      buyNow: "Buy now",
      makeOffer: "Make offer",
      properties: "Properties",
      traitBreakdown: "Trait breakdown",
      priceHistory: "Price history",
      valueProgression: "Value progression",
      activity: "Activity",
      recentMarketActions: "Recent market actions",
      listed: "Listed",
      hoursAgo2: "2 hours ago",
      offerPlaced: "Offer placed",
      yesterday: "Yesterday",
      transferred: "Transferred",
      apr09: "Apr 09",
      walletToWallet: "Wallet to wallet",
    },
    collections: {
      eyebrow: "Collections",
      title: "Track curated ecosystems and market momentum",
      collection: "Collection",
      floor: "Floor",
      volume: "Volume",
      day24h: "24h",
    },
    profile: {
      eyebrow: "Collector profile",
      title: "Nexora Vault",
      createListing: "Create listing",
      owned: "Owned",
      onSale: "On sale",
      totalValue: "Total value",
      activity: "Activity",
      ownedAssets: "Owned assets",
      portfolioOverview: "Portfolio overview",
      recentActivity: "Recent activity",
      walletTimeline: "Wallet timeline",
      bought: "Bought Overclocked Witness",
      today: "Today",
      listed: "Listed Neon Sentinel Cat",
      yesterday: "Yesterday",
      addedToFavorites: "Added Midnight Path to favorites",
      apr14: "Apr 14",
      saved: "Saved",
    },
    create: {
      eyebrow: "Create listing",
      title: "Prepare an NFT listing with a polished creator flow",
      artworkTitle: "Artwork title",
      enterTitle: "Enter title",
      collection: "Collection",
      chooseCollection: "Choose collection",
      description: "Description",
      descriptionPlaceholder: "Describe the concept, rarity and artistic value",
      price: "Price",
      network: "Network",
      publishListing: "Publish listing",
      saveDraft: "Save draft",
      livePreview: "Live preview",
    },
    wallet: {
      eyebrow: "Wallet access",
      title: "Connect a wallet to unlock your Web3 profile",
      connect: "Connect",
      whyConnect: "Why connect",
      walletGatedActions: "Wallet-gated actions",
      steps: [
        {
          title: "Buy tokens",
          description: "Required to confirm on-chain purchases and offers.",
        },
        {
          title: "Manage profile",
          description: "Display owned assets, saved items and transaction history.",
        },
        {
          title: "List NFT",
          description: "Publish assets in a marketplace-ready layout.",
        },
      ],
    },
    favorites: {
      eyebrow: "Favorites",
      title: "Saved NFT for quick return and comparison",
    },
    help: {
      eyebrow: "FAQ and help",
      title: "Core onboarding answers for a Web3 marketplace",
      questions: [
        {
          title: "How do I start using the platform?",
          description:
            "Open the wallet page, choose a wallet provider, connect your account and then browse the marketplace.",
        },
        {
          title: "What can I see before connecting a wallet?",
          description:
            "You can explore collections, open NFT pages, compare prices and review market metrics without authentication.",
        },
        {
          title: "How does listing work in this prototype?",
          description:
            "The creator flow focuses on UX: title, description, collection, price and preview blocks are organized for clarity.",
        },
        {
          title: "Why is the interface dark?",
          description:
            "Dark premium UI helps media assets stand out, reduces visual noise and supports the digital luxury positioning.",
        },
      ],
    },
    design: {
      eyebrow: "Figma kit",
      title: "Design board for transferring the prototype into Figma",
      backToProduct: "Back to product",
      coverFrame: "Cover frame",
      kitTitle: "Nexora UI Kit",
      kitDescription: "Premium NFT marketplace system with desktop, tablet and mobile frames.",
      colorStyles: "Color styles",
      coreTokens: "Core tokens",
      tokens: {
        background: "Background",
        surface: "Surface",
        accent: "Accent",
        hover: "Hover / Active",
        primaryText: "Primary text",
        secondaryText: "Secondary text",
      },
      typography: "Typography",
      textStyles: "Text styles",
      type: {
        display: "Display / Space Grotesk / 72 / Semibold",
        heading: "Heading / Space Grotesk / 40 / Medium",
        body: "Body / Manrope / 16 / Regular",
        data: "Data / JetBrains Mono / 14 / Medium",
        displayTitle: "Collect Digital Culture",
        headingTitle: "Trending collections with visible momentum",
        bodyText:
          "Readable product copy designed for long sections, token descriptions and instructional text.",
      },
      components: "Components",
      mainUiSet: "Main UI set",
      buttons: "Buttons",
      primaryAction: "Primary action",
      secondary: "Secondary",
      statusAndTags: "Status and tags",
      nftCard: "NFT card",
      collectionCard: "Collection card",
      frameMap: "Frame map",
      mandatoryScreens: "Mandatory Figma screens",
      frames: [
        { title: "01 Cover", description: "Project identity, logo, subtitle, palette preview." },
        { title: "02 Design System", description: "Colors, type, grids, spacing, buttons, cards, tags." },
        { title: "03 Home Desktop", description: "Hero, trending collections, popular NFT, CTA, footer." },
        { title: "04 Marketplace Desktop", description: "Sidebar filters, toolbar, NFT grid." },
        { title: "05 NFT Detail Desktop", description: "Media preview, pricing, properties, history, actions." },
        { title: "06 Collections", description: "Collection cards and ranking table." },
        { title: "07 Profile", description: "Portfolio stats, owned assets, activity." },
        { title: "08 Create Listing", description: "Form layout plus live preview." },
        { title: "09 Wallet Modal / Page", description: "Wallet provider choice and explanatory blocks." },
        { title: "10 Favorites + FAQ", description: "Saved assets and onboarding help states." },
        { title: "11 Tablet", description: "Home and marketplace rearranged to 8-column grid." },
        { title: "12 Mobile", description: "Home, NFT detail, profile and connect wallet." },
      ],
      assets: "Assets",
      svgForImport: "SVG files for import",
      logoMarkAlt: "Logo mark",
      heroArtAlt: "Hero art",
      emptyStateAlt: "Empty state",
      wordmarkAlt: "Nexora wordmark",
    },
  },
  ru: {
    brandTagline: "Премиальный NFT-маркетплейс",
    nav: {
      home: "Главная",
      marketplace: "Маркет",
      nft: "NFT",
      collections: "Коллекции",
      profile: "Профиль",
      create: "Создать",
      wallet: "Кошелек",
      favorites: "Избранное",
      help: "Помощь",
      design: "Figma Kit",
    },
    languageSwitcher: "Язык",
    connectWallet: "Подключить кошелек",
    footerDescription: "Концепт фронтенда NFT-маркетплейса с акцентом на премиальный UX/UI.",
    footerLinks: {
      marketplace: "Маркет",
      collections: "Коллекции",
      favorites: "Избранное",
      faq: "FAQ",
    },
    curated: "Кураторский выбор",
    floor: "Мин. цена",
    volume: "Объем",
    items: "Предметов",
    toggleFavorite: "Переключить избранное",
    home: {
      chip: "Кураторский Web3-маркетплейс",
      title: "Коллекционируйте цифровые активы в пространстве, которое ощущается премиально, ясно и живо.",
      description:
        "Nexora — это концепт NFT-маркетплейса для изучения отобранных коллекций, отслеживания рыночных сигналов и публикации цифрового искусства через wallet-first сценарий.",
      exploreMarketplace: "Открыть маркет",
      featuredDrop: "Главный дроп",
      todaySpotlight: "Выбор дня",
      creator: "Автор",
      viewToken: "Открыть токен",
      trendingCollections: "Трендовые коллекции",
      trendingCollectionsTitle: "Коллекции с понятной динамикой и заметным импульсом",
      viewAllCollections: "Смотреть все коллекции",
      popularNft: "Популярные NFT",
      popularNftTitle: "Активы с высоким спросом в чистом и понятном каталоге",
      browseCatalog: "Перейти в каталог",
      features: [
        {
          title: "Онбординг через кошелек",
          description: "Быстрый вход с минимумом трения для пользователей, которые хотят сначала изучить платформу.",
        },
        {
          title: "Читаемые страницы токенов",
          description: "Цена, редкость, владелец и активность собраны в одном понятном слое принятия решения.",
        },
        {
          title: "Выверенная визуальная система",
          description: "Темная luxury-стилистика удерживает фокус на NFT, а не на перегруженном интерфейсе.",
        },
      ],
      howItStarts: "Как это работает",
      stepsTitle: "Три шага от открытия до владения",
      steps: [
        {
          title: "Подключите кошелек",
          description: "Выберите кошелек и откройте доступ к избранному, профилю и транзакциям.",
        },
        {
          title: "Изучайте активы",
          description: "Используйте фильтры, рейтинги коллекций и страницы токенов для сравнения вариантов.",
        },
        {
          title: "Покупайте или размещайте",
          description: "Завершите покупку или создайте аккуратный листинг в понятном creator-flow.",
        },
      ],
      startVault: "Соберите свой цифровой vault",
      startVaultTitle: "Создайте интерфейс коллекции, который ощущается так же премиально, как и сами активы.",
      createListing: "Создать листинг",
    },
    marketplace: {
      eyebrow: "Маркетплейс",
      title: "Каталог премиальных NFT",
      openFavorites: "Открыть избранное",
      filters: "Фильтры",
      allAssets: "Все активы",
      digitalArt: "Цифровое искусство",
      musicNft: "Музыкальные NFT",
      gaming: "Гейминг",
      fashion: "Фэшн",
      priceRange: "Диапазон цены",
      networks: "Сети",
      searchPlaceholder: "Поиск по коллекциям, авторам и ID токенов",
      trendingFirst: "Сначала тренды",
      verified: "Проверенные",
    },
    nft: {
      currentPrice: "Текущая цена",
      owner: "Владелец",
      rarity: "Редкость",
      creator: "Автор",
      buyNow: "Купить",
      makeOffer: "Сделать оффер",
      properties: "Свойства",
      traitBreakdown: "Разбор характеристик",
      priceHistory: "История цены",
      valueProgression: "Динамика стоимости",
      activity: "Активность",
      recentMarketActions: "Последние действия на рынке",
      listed: "Выставлено",
      hoursAgo2: "2 часа назад",
      offerPlaced: "Сделан оффер",
      yesterday: "Вчера",
      transferred: "Переведено",
      apr09: "09 апр",
      walletToWallet: "С кошелька на кошелек",
    },
    collections: {
      eyebrow: "Коллекции",
      title: "Следите за отобранными экосистемами и рыночной динамикой",
      collection: "Коллекция",
      floor: "Мин. цена",
      volume: "Объем",
      day24h: "24ч",
    },
    profile: {
      eyebrow: "Профиль коллекционера",
      title: "Nexora Vault",
      createListing: "Создать листинг",
      owned: "Во владении",
      onSale: "На продаже",
      totalValue: "Общая стоимость",
      activity: "Активность",
      ownedAssets: "Активы в профиле",
      portfolioOverview: "Обзор портфеля",
      recentActivity: "Последняя активность",
      walletTimeline: "Таймлайн кошелька",
      bought: "Куплен Overclocked Witness",
      today: "Сегодня",
      listed: "Выставлен Neon Sentinel Cat",
      yesterday: "Вчера",
      addedToFavorites: "Midnight Path добавлен в избранное",
      apr14: "14 апр",
      saved: "Сохранено",
    },
    create: {
      eyebrow: "Создание листинга",
      title: "Подготовьте NFT-листинг в аккуратном и понятном creator-flow",
      artworkTitle: "Название работы",
      enterTitle: "Введите название",
      collection: "Коллекция",
      chooseCollection: "Выберите коллекцию",
      description: "Описание",
      descriptionPlaceholder: "Опишите концепт, редкость и художественную ценность",
      price: "Цена",
      network: "Сеть",
      publishListing: "Опубликовать листинг",
      saveDraft: "Сохранить черновик",
      livePreview: "Живой предпросмотр",
    },
    wallet: {
      eyebrow: "Доступ через кошелек",
      title: "Подключите кошелек, чтобы открыть Web3-профиль",
      connect: "Подключить",
      whyConnect: "Зачем подключать",
      walletGatedActions: "Действия, требующие кошелек",
      steps: [
        {
          title: "Покупать токены",
          description: "Нужно для подтверждения ончейн-покупок и офферов.",
        },
        {
          title: "Управлять профилем",
          description: "Показывать активы, сохраненные позиции и историю транзакций.",
        },
        {
          title: "Размещать NFT",
          description: "Публиковать активы в готовом для маркетплейса оформлении.",
        },
      ],
    },
    favorites: {
      eyebrow: "Избранное",
      title: "Сохраненные NFT для быстрого возврата и сравнения",
    },
    help: {
      eyebrow: "FAQ и помощь",
      title: "Базовые ответы для онбординга в Web3-маркетплейс",
      questions: [
        {
          title: "Как начать пользоваться платформой?",
          description:
            "Откройте страницу кошелька, выберите провайдера, подключите аккаунт и затем переходите к просмотру маркета.",
        },
        {
          title: "Что можно увидеть без подключения кошелька?",
          description:
            "Можно изучать коллекции, открывать страницы NFT, сравнивать цены и смотреть рыночные метрики без авторизации.",
        },
        {
          title: "Как в этом прототипе работает листинг?",
          description:
            "Creator-flow сфокусирован на UX: название, описание, коллекция, цена и предпросмотр собраны в понятную форму.",
        },
        {
          title: "Почему интерфейс темный?",
          description:
            "Темный премиальный UI лучше подчеркивает медиа-контент, снижает визуальный шум и поддерживает luxury-позиционирование.",
        },
      ],
    },
    design: {
      eyebrow: "Figma kit",
      title: "Доска дизайна для переноса прототипа в Figma",
      backToProduct: "Назад к продукту",
      coverFrame: "Обложка",
      kitTitle: "Nexora UI Kit",
      kitDescription: "Система премиального NFT-маркетплейса с экранами для desktop, tablet и mobile.",
      colorStyles: "Цветовые стили",
      coreTokens: "Основные токены",
      tokens: {
        background: "Фон",
        surface: "Поверхность",
        accent: "Акцент",
        hover: "Hover / Active",
        primaryText: "Основной текст",
        secondaryText: "Вторичный текст",
      },
      typography: "Типографика",
      textStyles: "Текстовые стили",
      type: {
        display: "Display / Space Grotesk / 72 / Semibold",
        heading: "Heading / Space Grotesk / 40 / Medium",
        body: "Body / Manrope / 16 / Regular",
        data: "Data / JetBrains Mono / 14 / Medium",
        displayTitle: "Коллекционируйте цифровую культуру",
        headingTitle: "Трендовые коллекции с видимой динамикой",
        bodyText:
          "Читаемый продуктовый текст для длинных секций, описаний токенов и инструкций.",
      },
      components: "Компоненты",
      mainUiSet: "Основной UI-набор",
      buttons: "Кнопки",
      primaryAction: "Основное действие",
      secondary: "Вторичное",
      statusAndTags: "Статусы и теги",
      nftCard: "Карточка NFT",
      collectionCard: "Карточка коллекции",
      frameMap: "Карта фреймов",
      mandatoryScreens: "Обязательные экраны Figma",
      frames: [
        { title: "01 Обложка", description: "Айдентика проекта, логотип, подзаголовок, превью палитры." },
        { title: "02 Дизайн-система", description: "Цвета, типографика, сетки, отступы, кнопки, карточки, теги." },
        { title: "03 Главная Desktop", description: "Hero, трендовые коллекции, популярные NFT, CTA, footer." },
        { title: "04 Marketplace Desktop", description: "Боковые фильтры, тулбар, сетка NFT." },
        { title: "05 NFT Detail Desktop", description: "Превью медиа, цена, свойства, история, действия." },
        { title: "06 Коллекции", description: "Карточки коллекций и рейтинговая таблица." },
        { title: "07 Профиль", description: "Статистика портфеля, активы и активность." },
        { title: "08 Создание листинга", description: "Форма и live preview." },
        { title: "09 Wallet Modal / Page", description: "Выбор кошелька и поясняющие блоки." },
        { title: "10 Избранное + FAQ", description: "Сохраненные активы и onboarding-состояния." },
        { title: "11 Планшет", description: "Главная и маркет в сетке на 8 колонок." },
        { title: "12 Мобайл", description: "Главная, NFT detail, профиль и подключение кошелька." },
      ],
      assets: "Ассеты",
      svgForImport: "SVG-файлы для импорта",
      logoMarkAlt: "Логомарк",
      heroArtAlt: "Hero-иллюстрация",
      emptyStateAlt: "Пустое состояние",
      wordmarkAlt: "Словесный знак Nexora",
    },
  },
};
