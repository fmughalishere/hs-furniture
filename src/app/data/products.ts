export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Classic Maharaja Sofa",
    price: 185000,
    category: "Living Room",
    image: "/images/sofa-1.jpg",
    description: "Authentic teak wood carved sofa with premium royal velvet upholstery."
  },
  {
    id: "2",
    name: "Victorian Dining Table",
    price: 245000,
    category: "Dining",
    image: "/images/dining-table.jpg",
    description: "An 8-seater masterpiece handcrafted for elite dining experiences."
  },
  {
    id: "3",
    name: "Sheesham Bed Frame",
    price: 120000,
    category: "Bedroom",
    image: "/images/bed.jpg",
    description: "Minimalist yet royal bed frame made from solid seasoned Sheesham wood."
  }
];