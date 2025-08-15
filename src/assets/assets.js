// Using placeholder images for all assets
const logo = "https://via.placeholder.com/100x40?text=Logo";
const facebook = "https://via.placeholder.com/50x50?text=FB";
const twitter = "https://via.placeholder.com/50x50?text=Twitter";
const linkedin = "https://via.placeholder.com/50x50?text=LinkedIn";
const instagram = "https://via.placeholder.com/50x50?text=Insta";

import cosmo_1 from './haircare.png';
import cosmo_2 from './handwash.png';
import cosmo_3 from './lipstick.png';
import cosmo_4 from './sunscreen.png';


export const assets = {
  logo,
  facebook,
  twitter,
  linkedin,
  instagram,
  cosmo_1,
  cosmo_2,
  cosmo_3,
  cosmo_4,

};

export const cosmo_list = [
  {
    cosmo_name: 'ERAYA Haircare',
    cosmo_image: cosmo_1,
    cosmo_description: 'A radiant aura that glows with the light of distant stars.',
    cosmo_rarity: 'Epic',
    cosmo_price: 1200,
  },
  {
    cosmo_name: 'ERAYA Handwash',
    cosmo_image: cosmo_2,
    cosmo_description: 'A flowing cloak infused with the colors of a cosmic nebula.',
    cosmo_rarity: 'Legendary',
    cosmo_price: 1800,
  },
  {
    cosmo_name: 'ERAYA Lipstick',
    cosmo_image: cosmo_3,
    cosmo_description: 'A sleek visor that displays holographic star charts.',
    cosmo_rarity: 'Rare',
    cosmo_price: 800,
  },
  {
    cosmo_name: 'ERAYA Skin',
    cosmo_image: cosmo_4,
    cosmo_description: 'Boots that leave a trail of glowing meteor dust with every step.',
    cosmo_rarity: 'Uncommon',
    cosmo_price: 500,
  },
  {
    cosmo_name: 'ERAYA Hairoil',
    cosmo_image: cosmo_1,
    cosmo_description: 'A majestic crown adorned with orbiting gemstones.',
    cosmo_rarity: 'Mythic',
    cosmo_price: 2500,
  },
];

export const cosmetic_list = [
  {
    _id: "1",
    name: "hairoil_1",
    image: cosmo_1,
    price: 2549,
    description: "",
    caregory: "Hairoil",
  },
];


