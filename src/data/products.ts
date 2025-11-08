export const books = [
  {
    id: 'chroniques-kebira',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/254e2eb5-e707-4282-aa24-36d1a6a39a72/livre-1-mor1p0x-1762639019994.webp',
    title: 'Les Chroniques de Kébira',
    author: 'A. A. Dike',
    description: 'Une épopée de science-fiction au cœur d\\'une Afrique futuriste.',
    price: '24,99 €',
    tag: 'Nouveau',
    type: 'book',
  },
  {
    id: 'art-du-souk',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/254e2eb5-e707-4282-aa24-36d1a6a39a72/livre-2-i5bzlrh-1762639026335.webp',
    title: 'L\\'Art du Souk',
    author: 'Fatou Keita',
    description: 'Stratégies commerciales inspirées des marchés traditionnels.',
    price: '19,99 €',
    type: 'book',
  },
  {
    id: 'ombre-abidjan',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/254e2eb5-e707-4282-aa24-36d1a6a39a72/livre-3-axnni9k-1762639034250.webp',
    title: 'L\\'Ombre d\\'Abidjan',
    author: 'Isaac Koffi',
    description: 'Un thriller haletant dans les rues animées de la capitale ivoirienne.',
    price: '22,50 €',
    tag: 'Promo',
    type: 'book',
  },
   {
    id: 'saveurs-du-sahel',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/254e2eb5-e707-4282-aa24-36d1a6a39a72/livre-4-vnswigk-1762639041734.webp',
    title: 'Saveurs du Sahel',
    author: 'Amina Diallo',
    description: 'Un voyage culinaire à travers les délices de l\\'Afrique de l\\'Ouest.',
    price: '35,00 €',
    type: 'book',
  },
];

export const formations = [
    {
    id: 'dev-web-moderne',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/254e2eb5-e707-4282-aa24-36d1a6a39a72/formation-1-i34ngrr-1762639049829.webp',
    title: 'Développement Web Moderne',
    author: 'Sankofa Tech',
    description: 'Maîtrisez React, Tailwind et les outils modernes du web.',
    price: '299,99 €',
    tag: 'Nouveau',
    type: 'formation',
  },
  {
    id: 'marketing-digital-pro',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/254e2eb5-e707-4282-aa24-36d1a6a39a72/formation-2-jx8p6he-1762639057076.webp',
    title: 'Marketing Digital Pro',
    author: 'JokkoLabs',
    description: 'Devenez un expert en stratégies de marketing en ligne.',
    price: '249,99 €',
    type: 'formation',
  },
];

export const allProducts = [...books, ...formations];