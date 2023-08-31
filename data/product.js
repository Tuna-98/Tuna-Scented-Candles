const products = [
  {
    id: 1,
    name: "Eucalyptus Essential Oil",
    image: "/assets/images/products/sp1.jpg",
    current: "10.00",
    cost: "4.00",
    sale: 1,
    type: "Cented",
  },
  {
    id: 2,
    name: "Rapeseed Candle",
    image: "/assets/images/products/sp2.jpg",
    current: "22.50",
    cost: "",
    sale: 0,
    type: "Cented",
  },
  {
    id: 3,
    name: "Rapeseed Wax Candle",
    image: "/assets/images/products/sp3.jpg",
    current: 42.0,
    cost: 0,
    sale: 0,
    type: "Cented",
  },
  {
    id: 4,
    name: "Fresh Brew Limited Edition",
    image: "/assets/images/products/sp4.jpg",
    current: 24.0,
    cost: 0,
    sale: 0,
    type: "Cented",
  },
  {
    id: 5,
    name: "Terracotta Tealight Holder",
    image: "/assets/images/products/sp8.jpg",
    current: 20.0,
    cost: 0,
    sale: 0,
    type: "Cented",
  },
  {
    id: 6,
    name: "Discovery Set",
    image: "/assets/images/products/sp5.jpg",
    current: 44.0,
    cost: 0,
    sale: 0,
    type: "Cented",
  },
  {
    id: 7,
    name: "Rapeseed Candle Triple Wick",
    image: "/assets/images/products/sp6.jpg",
    current: 44.0,
    cost: 0,
    sale: 0,
    type: "Cented",
  },
  {
    id: 8,
    name: "Rapeseed Wax Candle",
    image: "/assets/images/products/sp7.jpg",
    current: 44.0,
    cost: 0,
    sale: 0,
    type: "Cented",
  },
  {
    id: 9,
    name: "Silicone Soap Dish",
    image: "/assets/images/products/m2-prod-2.jpg",
    current: "12.00",
    cost: "0",
    sale: 0,
    type: "Cented",
  },
  {
    id: 10,
    name: "Tobacco Bay Leaf Soap",
    image: "/assets/images/products/m2-prod-1.jpg",
    current: "5.00",
    cost: "10.00",
    sale: 0,
    type: "Cented",
  },
  {
    id: 11,
    name: "Rapeseed Wax Candle",
    image: "/assets/images/products/m2-prod-3.jpg",
    current: "12.00",
    cost: 0,
    sale: 0,
    type: "Cented",
  },
  {
    id: 12,
    name: "Fresh Brew Limited Edition",
    image: "/assets/images/products/m2-prod-5.jpg",
    current: "24.0",
    cost: 0,
    sale: 0,
    type: "Cented",
  },
  {
    id: 13,
    name: "Mermaid Bath Bomb",
    image: "/assets/images/products/m2-prod-4.jpg",
    current: "12.00",
    cost: 0,
    sale: 0,
    type: "Cented",
  },
  {
    id: 14,
    name: "All Hail The Queen Bath Bomb",
    image: "/assets/images/products/prod-2.jpg",
    current: "44.0",
    cost: "10.00",
    sale: 0,
    type: "Handmade Soap",
  },
  {
    id: 15,
    name: "Cherry Almond Soap",
    image: "/assets/images/products/prod-7.jpg",
    current: "21.00",
    cost: "20.00",
    sale: 0,
    type: "Handmade Soap",
  },
  {
    id: 16,
    name: "Ferocious Beast Soap",
    image: "/assets/images/products/prod-8.jpg",
    current: "44.0",
    cost: 0,
    sale: 0,
    type: "Handmade Soap",
  },
  {
    id: 17,
    name: "Ferocious Beast Soap",
    image: "/assets/images/products/prod-6.jpg",
    current: "44.0",
    cost: "16.00",
    sale: 0,
    type: "Handmade Soap",
  },
  {
    id: 18,
    name: "Magnolia Bath Bomb",
    image: "/assets/images/products/prod-5.jpg",
    current: "21.00",
    cost: "10.00",
    sale: 0,
    type: "Handmade Soap",
  },
  {
    id: 19,
    name: "Mermaid Bath Bomb",
    image: "/assets/images/products/prod-8.jpg",
    current: "12.00",
    cost: 0,
    sale: 0,
    type: "Handmade Soap",
  },
  {
    id: 17,
    name: "Silicone Soap Dish",
    image: "/assets/images/products/prod-4.jpg",
    current: 10.0,
    cost: 0,
    sale: 0,
    type: "Handmade Soap",
  },
  {
    id: 18,
    name: "Silicone Soap Dish",
    image: "/assets/images/products/m2-prod-5.jpg",
    current: 12.00,
    cost: 0,
    sale: 0,
    type: "Handmade Soap",
  },
  {
    id: 19,
    name: "Tobacco Bay Leaf Shave Soap",
    image: "/assets/images/products/prod-3.jpg",
    current: 10.00,
    cost: 0,
    sale: 0,
    type: "Handmade Soap",
  },
  {
    id: 20,
    name: "Tobacco Bay Leaf Soap",
    image: "/assets/images/products/m2-prod-1.jpg",
    current: 5.00,
    cost: 10.00,
    sale: 0,
    type: "Handmade Soap",
  },
  {
    id: 21,
    name: "Unicorn Soap",
    image: "/assets/images/products/prod-1.jpg",
    current: 12.00,
    cost: 0,
    sale: 0,
    type: "Handmade Soap",
  },
  {
    id: 19,
    name: "Unicorn Soap",
    image: "/assets/images/products/m2-prod-3.jpg",
    current: 10.00,
    cost: 0,
    sale: 0,
    type: "Handmade Soap",
  },
  {
    id: 20,
    name: "Unicorn Soap",
    image: "/assets/images/products/m2-prod-3.jpg",
    current: 12.00,
    cost: 0,
    sale: 0,
    type: "Handmade Soap",
  },



  {
    id: 21,
    name: "Aqua Allegoria Nettare Di Sole",
    image: "/assets/images/products/m5-prod-3.jpg",
    current: 14.00,
    cost: 0,
    sale: 0,
    type: "Perfume",
  },
  {
    id: 22,
    name: "Chanel All-Natural Room Spray",
    image: "/assets/images/products/m4-prod-5.jpg",
    current: 44.00,
    cost: 0,
    sale: 0,
    type: "Perfume",
  },
  {
    id: 13,
    name: "Golden Slumber Night Face Oil",
    image: "/assets/images/products/m4-prod-4.jpg",
    current: 44.00,
    cost: 0,
    sale: 0,
    type: "Perfume",
  },
  {
    id: 24,
    name: "Unicorn Soap",
    image: "/assets/images/products/m2-prod-3.jpg",
    current: 12.00,
    cost: 0,
    sale: 0,
    type: "Perfume",
  },
  {
    id: 25,
    name: "LA RIVE MR. SHARP",
    image: "/assets/images/products/m5-prod-1.jpg",
    current: 14.00,
    cost: 0,
    sale: 0,
    type: "Perfume",
  },
  {
    id: 26,
    name: "Merry Christmas! X",
    image: "/assets/images/products/m5-prod-2.jpg",
    current: 14.00,
    cost: 0,
    sale: 0,
    type: "Perfume",
  },
  {
    id: 27,
    name: "Minu Perfume Roller",
    image: "/assets/images/products/m5-prod-4.jpg",
    current: 14.00,
    cost: 0,
    sale: 0,
    type: "Perfume",
  },

  {
    id: 28,
    name: "Sex & Jasmine Eau De Parfum",
    image: "/assets/images/products/m5-prod-1.jpg",
    current: 64.00,
    cost: 0,
    sale: 0,
    type: "Perfume",
  },
  {
    id: 29,
    name: "Sweet Grass Eau Du Parfum",
    image: "/assets/images/products/m5-prod-2.jpg",
    current: 44.00,
    cost: 0,
    sale: 0,
    type: "Perfume",
  },
  {
    id: 30,
    name: "Troubled Spirits Perfume Oil",
    image: "/assets/images/products/m5-prod-4.jpg",
    current: 64.00,
    cost: 0,
    sale: 0,
    type: "Perfume",
  },



  {
    id: 31,
    name: "Ferocious Beast Soap",
    image: "/assets/images/products/prod-8.jpg",
    current: 64.00,
    cost: 0,
    sale: 0,
    type: "Perfume",
  },
  {
    id: 29,
    name: "Sweet Grass Eau Du Parfum",
    image: "/assets/images/products/m5-prod-2.jpg",
    current: 44.00,
    cost: 0,
    sale: 0,
    type: "Perfume",
  },
  {
    id: 30,
    name: "Troubled Spirits Perfume Oil",
    image: "/assets/images/products/m5-prod-4.jpg",
    current: 64.00,
    cost: 0,
    sale: 0,
    type: "Perfume",
  },









];
