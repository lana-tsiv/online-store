import photo11 from "../assets/image/cardphoto/1.1.jpg";
import photo12 from "../assets/image/cardphoto/1.2.jpg";
import photo21 from "../assets/image/cardphoto/2.1.jpg";
import photo31 from "../assets/image/cardphoto/3.1.jpg";
import photo41 from "../assets/image/cardphoto/4.1.jpg";
import photo51 from "../assets/image/cardphoto/5.1.jpg";
import photo61 from "../assets/image/cardphoto/6.1.jpg";
import photo62 from "../assets/image/cardphoto/6.2.jpg";
import photo71 from "../assets/image/cardphoto/7.1.jpg";
import photo81 from "../assets/image/cardphoto/8.1.jpg";
import photo82 from "../assets/image/cardphoto/8.2.jpg";
import photo91 from "../assets/image/cardphoto/9.1.jpg";
import photo92 from "../assets/image/cardphoto/9.2.jpg";

import { ICard } from "../models";

export const dataCard: ICard[] = [
  {
    id: 0,
    productName: "Gigi Hadid Lipstick 4.4 g",
    brand: "MAYBELLINE",
    category: "lipstick",
    description:
      "Maybelline Gigi Hadid Lipstick is a highly pigmented colour with sensuous precious oils. Amp up your look for a statement-making West Coast Glow look",
    price: 2.29,
    stock: 5,
    photos: [photo11, photo12],
  },
  {
    id: 1,
    productName: "NYX Matte Lipstick Bloody Mary 18",
    brand: "NYX PROFESSIONAL MAKE UP",
    category: "lipstick",
    description:
      "NYX Professional Make Up Matte Lipstick is a shockingly smooth matte lipstick that glides right on and stays in place with a silky matte finish. Never a dry feeling, always creamy, dreamy and matte.",
    price: 2.89,
    stock: 3,
    photos: [photo21],
  },
  {
    id: 2,
    productName: "NYX Machinist Lipstick Metallic Honey 3.5g",
    brand: "NYX PROFESSIONAL MAKE UP",
    category: "lipstick",
    description:
      "NYX Professional Make Up Machinist Lipstick is a comfortably creamy formula that is loaded with ultra-fine pearls that add over-the-top luster to your pout. These high-coverage lippies are the perfect accessories.",
    price: 3.49,
    stock: 4,
    photos: [photo31],
  },
  {
    id: 3,
    productName: "Color Elixir Lipstick Matte Desire",
    brand: "MAX FACTOR",
    category: "lipstick",
    description:
      "Max Factor Lipfinity Lipstick Matte is a two-step application that includes a long-lasting, sumptuous colour and moisturising balm for a perfect matte finish. Glides on effortlessly onto lips and stays in place for up to 12 hours without over-drying.",
    price: 2.49,
    stock: 9,
    photos: [photo41],
  },
  {
    id: 4,
    productName: "Shine Caresse Lip Colour 6ml",
    brand: "L'OREAL",
    category: "lipstick",
    description:
      "L'Oreal Shine Caresse Lip Colour is a stain that thinks it's a gloss. This next generation lip colour, formulated with a blend of hydrating oils and concentrated pigments, delivers lasting colour with a glossy finish. Packed with 30% water, colour caresse leaves lips soft, comfortable and hydrated for up to 6 hours.",
    price: 3.29,
    stock: 7,
    photos: [photo51],
  },
  {
    id: 5,
    productName: "False Lash Effect Mascara 13.1ml",
    brand: "MAX FACTOR",
    category: "mascara",
    description:
      "Max Factor False Lash Effect Mascara doubles your lash size with the impact of false lashes without the fuss. Why fake it when you can get a false lash effect with your own lashes?",
    price: 5.99,
    stock: 5,
    photos: [photo61, photo62],
  },
  {
    id: 6,
    productName: "Masterpiece by Eye Shadow Palette Nude Shades 6.5g",
    brand: "MAX FACTOR",
    category: "eye shadow",
    description:
      "The Max Factor Masterpiece Eyeshadow Palette creates a series of wearable, everyday makeup looks.Designed with opulent neutral hues, the palette is extremely versatile. It stars 8 flattering shades that lend themselves to both subtle days and striking night time creations.",
    price: 4.99,
    stock: 5,
    photos: [photo71],
  },
  {
    id: 7,
    productName: "Xperience Volumising Mascara 7.2ml",
    brand: "MAX FACTOR",
    category: "mascara",
    description:
      "Max Factor Xperience Volumising Mascara is a mouuse effect formula that lifts lashes to the max! Leaves lashes looking fuller and thicker with a lightweight feel..",
    price: 2.99,
    stock: 5,
    photos: [photo81, photo82],
  },
];
