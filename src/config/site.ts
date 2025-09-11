export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  favicon: string;
  links: {
    instagram: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "formations précisions",
  description: "Centre de formation beauté à Lille. Formations en extensions de cils, onglerie et plus.",
  url: "https://precison-institut.com",
  ogImage: "https://precison-institut.com/og.jpg",
  favicon: "https://cdn.beacons.ai/user_content/zt7DSUT5syTGSXn4yV1sZY6Klnn1/referenced_images/434e06c0-a246-47a1-a8f7-0026feac7798__store__product-image__b4dd91fc-9038-4ecb-8fdc-1eadd25690b6__8e69c470-691b-4a80-92a0-a19981fedf76.webp?t=1757518304890",
  links: {
    instagram: "https://www.instagram.com/precision.institut/?hl=fr",
  },
};
