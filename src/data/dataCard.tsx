import photo11 from "../assets/image/cardphoto/1.1.jpg";
import photo12 from "../assets/image/cardphoto/1.2.jpg";
import photo21 from "../assets/image/cardphoto/2.1.jpg";
import photo22 from "../assets/image/cardphoto/2.2.jpg";
import photo23 from "../assets/image/cardphoto/2.3.jpg";
import photo31 from "../assets/image/cardphoto/3.1.jpg";
import photo32 from "../assets/image/cardphoto/3.2.jpeg";
import photo33 from "../assets/image/cardphoto/3.3.jpeg";
import photo41 from "../assets/image/cardphoto/4.1.jpg";
import photo42 from "../assets/image/cardphoto/4.2.jpeg";
import photo43 from "../assets/image/cardphoto/4.3.png";
import photo51 from "../assets/image/cardphoto/5.2.jpeg";
import photo52 from "../assets/image/cardphoto/5.3.jpeg";
import photo61 from "../assets/image/cardphoto/6.1.jpg";
import photo62 from "../assets/image/cardphoto/6.2.jpg";
import photo71 from "../assets/image/cardphoto/7.1.jpg";
import photo72 from "../assets/image/cardphoto/7.2.jpeg";
import photo73 from "../assets/image/cardphoto/7.3.jpeg";
import photo81 from "../assets/image/cardphoto/8.1.jpg";
import photo82 from "../assets/image/cardphoto/8.2.jpg";
import photo91 from "../assets/image/cardphoto/9.1.jpg";
import photo92 from "../assets/image/cardphoto/9.2.jpg";
import photo101 from "../assets/image/cardphoto/10.1.jpg";
import photo102 from "../assets/image/cardphoto/10.2.jpeg";
import photo111 from "../assets/image/cardphoto/11.1.jpg";
import photo112 from "../assets/image/cardphoto/11.2.jpg";
import photo121 from "../assets/image/cardphoto/12.1.jpg";
import photo122 from "../assets/image/cardphoto/12.2.jpeg";
import photo123 from "../assets/image/cardphoto/12.3.jpg";
import photo131 from "../assets/image/cardphoto/13.1.jpg";
import photo132 from "../assets/image/cardphoto/13.2.jpeg";
import photo141 from "../assets/image/cardphoto/14.1.jpg";
import photo142 from "../assets/image/cardphoto/14.2.jpeg";
import photo143 from "../assets/image/cardphoto/14.3.jpg";
import photo144 from "../assets/image/cardphoto/14.4.jpg";
import photo151 from "../assets/image/cardphoto/15.1.jpg";
import photo152 from "../assets/image/cardphoto/15.2.jpeg";
import photo153 from "../assets/image/cardphoto/15.3.jpeg";
import photo161 from "../assets/image/cardphoto/16.1.jpg";
import photo162 from "../assets/image/cardphoto/16.2.jpeg";
import photo163 from "../assets/image/cardphoto/16.3.jpeg";
import photo171 from "../assets/image/cardphoto/17.1.jpg";
import photo172 from "../assets/image/cardphoto/17.2.jpeg";
import photo173 from "../assets/image/cardphoto/17.3.jpeg";
import photo181 from "../assets/image/cardphoto/18.1.jpg";
import photo182 from "../assets/image/cardphoto/18.2.jpg";
import photo183 from "../assets/image/cardphoto/18.3.jpeg";
import photo191 from "../assets/image/cardphoto/19.1.jpg";
import photo192 from "../assets/image/cardphoto/19.2.jpg";
import photo201 from "../assets/image/cardphoto/20.1.jpg";
import photo202 from "../assets/image/cardphoto/20.2.jpeg";
import photo203 from "../assets/image/cardphoto/20.3.jpeg";
import gigiLipstick from '../assets/image/cardphoto/gigihadid_lipstick.jpeg';
import gigiLipstick2 from '../assets/image/cardphoto/gigihadid_lipsticks1.jpeg';

import { ICard } from "../models";

export const dataCard: ICard[] = [
  {
    id: 1,
    productName: "Gigi Hadid Lipstick 4.4 g",
    brand: "MAYBELLINE",
    category: "lipstick",
    description:
      "Maybelline Gigi Hadid Lipstick is a highly pigmented colour with sensuous precious oils. Amp up your look for a statement-making West Coast Glow look",
    price: 10.95,
    stock: 5,
    photos: [photo11, photo12, gigiLipstick, gigiLipstick2],
  },
  {
    id: 2,
    productName: "NYX Matte Lipstick Bloody Mary 18",
    brand: "NYX PROFESSIONAL MAKE UP",
    category: "lipstick",
    description:
      "NYX Professional Make Up Matte Lipstick is a shockingly smooth matte lipstick that glides right on and stays in place with a silky matte finish. Never a dry feeling, always creamy, dreamy and matte.",
    price: 9.75,
    stock: 3,
    photos: [photo21, photo22, photo23],
  },
  {
    id: 3,
    productName: "NYX Machinist Lipstick Metallic Honey 3.5g",
    brand: "NYX PROFESSIONAL MAKE UP",
    category: "lipstick",
    description:
      "NYX Professional Make Up Machinist Lipstick is a comfortably creamy formula that is loaded with ultra-fine pearls that add over-the-top luster to your pout. These high-coverage lippies are the perfect accessories.",
    price: 8.53,
    stock: 4,
    photos: [photo31, photo32, photo33],
  },
  {
    id: 4,
    productName: "Color Elixir Lipstick Matte Desire",
    brand: "MAX FACTOR",
    category: "lipstick",
    description:
      "Max Factor Lipfinity Lipstick Matte is a two-step application that includes a long-lasting, sumptuous colour and moisturising balm for a perfect matte finish. Glides on effortlessly onto lips and stays in place for up to 12 hours without over-drying.",
    price: 10.95,
    stock: 9,
    photos: [photo41, photo42, photo43],
  },
  {
    id: 5,
    productName: "Shine Caresse Lip Colour 6ml",
    brand: "L'OREAL",
    category: "lipstick",
    description:
      "L'Oreal Shine Caresse Lip Colour is a stain that thinks it's a gloss. This next generation lip colour, formulated with a blend of hydrating oils and concentrated pigments, delivers lasting colour with a glossy finish. Packed with 30% water, colour caresse leaves lips soft, comfortable and hydrated for up to 6 hours.",
    price: 8.88,
    stock: 7,
    photos: [photo51, photo52],
  },
  {
    id: 6,
    productName: "False Lash Effect Mascara 13.1ml",
    brand: "MAX FACTOR",
    category: "mascara",
    description:
      "Max Factor False Lash Effect Mascara doubles your lash size with the impact of false lashes without the fuss. Why fake it when you can get a false lash effect with your own lashes?",
    price: 14.62,
    stock: 5,
    photos: [photo61, photo62],
  },
  {
    id: 7,
    productName: "Masterpiece by Eye Shadow Palette Nude Shades 6.5g",
    brand: "MAX FACTOR",
    category: "eye shadow",
    description:
      "The Max Factor Masterpiece Eyeshadow Palette creates a series of wearable, everyday makeup looks.Designed with opulent neutral hues, the palette is extremely versatile. It stars 8 flattering shades that lend themselves to both subtle days and striking night time creations.",
    price: 18.27,
    stock: 5,
    photos: [photo71, photo72, photo73],
  },
  {
    id: 8,
    productName: "Xperience Volumising Mascara 7.2ml",
    brand: "MAX FACTOR",
    category: "mascara",
    description:
      "Max Factor Xperience Volumising Mascara is a mouuse effect formula that lifts lashes to the max! Leaves lashes looking fuller and thicker with a lightweight feel..",
    price: 12.17,
    stock: 5,
    photos: [photo81, photo82],
  },
  {
    id: 9,
    productName: "Volume Million Lashes Mascara",
    brand: "L'OREAL",
    category: "mascara",
    description:
      "Voluminous Million Lashes Mascara has a revolutionary collagen infused formula and Millionizer Brush for amplified volume and definition. The luxurious, buildable, No Clump Formula amplifies each lash instantly.",
    price: 15.11,
    stock: 2,
    photos: [photo91, photo92],
  },
  {
    id: 10,
    productName: "The Colossal Mascara 10ml",
    brand: "MAYBELLINE",
    category: "mascara",
    description:
      "Colossal brush, colossal volume, colossal impact from Maybelline New York's Colossal Mascara 100% Black. The collagen enriched formula plumps your lash look for mega impact.",
    price: 10.95,
    stock: 4,
    photos: [photo101, photo102],
  },
  {
    id: 11,
    productName: "Gigi Hadid Eyeshadow Palette 4g",
    brand: "MAYBELLINE",
    category: "eye shadow",
    description:
      "Maybelline Gigi Hadid Eyeshadow Palette is a limited edition, six eyeshadow palette designed in collaboration with Gigi Hadid. Add dimension to your lids with an endless array of eye makeup looks in one palette.",
    price: 12.17,
    stock: 8,
    photos: [photo111, photo112],
  },
  {
    id: 12,
    productName: "Dream Flawless Nude Fluid Touch Foundation 20ml",
    brand: "MAYBELLINE",
    category: "foundation",
    description:
      "Maybelline Dream Flawless Nude Fluid Touch Foundation contains concentrated pigments that give flawless coverage yet its texture is 12 times finer for a perfectly nude finish and feel.",
    price: 10.95,
    stock: 2,
    photos: [photo121, photo122, photo123],
  },
  {
    id: 13,
    productName: "True Match The Foundation 30ml",
    brand: "L'OREAL",
    category: "foundation",
    description:
      "L'Oreal True Match The Foundation gives a completely natural and complexion-perfecting finish, enhancing every woman's natural beauty. It is a super-blendable foundation that perfectly matches the skin's unique tone and texture.",
    price: 15.83,
    stock: 7,
    photos: [photo131, photo132],
  },
  {
    id: 14,
    productName: "Healthy Skin Harmony Miracle Foundation SPF20 30ml",
    brand: "MAX FACTOR",
    category: "foundation",
    description:
      "Max Factor Healthy Skin Harmony Miracle Foundation is an innovative and multi-tasking face makeup that leaves the complexion looking flawless. Gliding onto skin like silk, the weightless formula provides up to 24 hours of hydration whilst using oil absorbers to reduce shine, creating the perfect moisture balance for a clear, bright complexion.",
    price: 14.99,
    stock: 3,
    photos: [photo141, photo142, photo143, photo144],
  },
  {
    id: 15,
    productName: "Dream Radiant Liquid Hydrating Foundation 30ml",
    brand: "MAYBELLINE",
    category: "foundation",
    description:
      "Maybelline Dream Radiant Liquid Hydrating Foundation works to minimise the appearance of pores and fine lines, leaving a weightless veil in its wake. Medium coverage is promoted, with the airy formula allowing you to build to achieve your desired aesthetic.",
    price: 10.95,
    stock: 3,
    photos: [photo151, photo152, photo153],
  },
  {
    id: 16,
    productName: "NYX Stay Matte But Not Flat Liquid Foundation 35ml",
    brand: "NYX PROFESSIONAL MAKE UP",
    category: "foundation",
    description:
      "NYX Professional Make Up Stay Matte But Not Flat Liquid Foundation provides medium to full coverage with a light texture for easy application. Consists of Vitamin E to soften blemishes and fine lines. Long lasting wear up to 8 hours.",
    price: 13.40,
    stock: 5,
    photos: [photo161, photo162, photo163],
  },
  {
    id: 17,
    productName: "NYX Lush Lashes Mascara Stacked 8ml",
    brand: "NYX PROFESSIONAL MAKE UP",
    category: "mascara",
    description:
      "NYX Professional Make Up Lush Lashes Mascara is designed to add volume and length. The thick wand catches all lashes with the enriched formula with natural waxes and vitamins. Provides long lasting colour. The sky's the limit with NYX clump-free, voluminous formula. The unique combination of brushes build volume from the roots with the short teaser bristles and coat lashes easily from root to tip with the sky-high length bristles.",
    price: 12.19,
    stock: 1,
    photos: [photo171, photo173, photo172],
  },
  {
    id: 18,
    productName: "NYX Off Tropic Eyeshadow Palette 10 Shades Shifting Sands",
    brand: "NYX PROFESSIONAL MAKE UP",
    category: "eye shadow",
    description:
      "NYX Professional Make Up Off Tropic Eyeshadow Palette is inspired by the heat and sand from a paradise island. Each of the eclectic palettes contacts extravagant metallic, carpet and velvet shades. Adds fun colour to your everyday makeup.",
    price: 19.50,
    stock: 6,
    photos: [photo181, photo182, photo183],
  },
  {
    id: 19,
    productName: "Enchanted Scented Eyeshadow Palette",
    brand: "L'OREAL",
    category: "eye shadow",
    description:
      "12 captivating warm eyeshadow shades. Variety of finishes, from mattes to shimmering pearls, for endless enchanting eyeshadow looks.",
    price: 14.99,
    stock: 4,
    photos: [photo191, photo192],
  },
  {
    id: 20,
    productName: "La Palette Nude",
    brand: "L'OREAL",
    category: "eye shadow",
    description:
      "Inspired by makeup designers 'Must Have' palettes, the La Palette Nude offers everything you need to master the art of nude eyeshadow. Makeup Designer Nude looks curated exclusively for each palette with step by step instructions and live tutorials. 10 highly pigmented shades range from light to dark to flatter every skin tone in 3 shadow finishes: shimmery satin, buttery matte & lustrous sheen.",
    price: 19.99,
    stock: 5,
    photos: [photo201, photo203, photo202],
  },
];
