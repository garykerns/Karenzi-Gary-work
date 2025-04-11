
export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Electronics",
    rating: 4.5,
    description: "Premium wireless headphones with noise cancellation and 20-hour battery life."
  },
  {
    id: 2,
    name: "Leather Wallet",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbGV0fGVufDB8fDB8fHww",
    category: "Accessories",
    rating: 4.2,
    description: "Handcrafted genuine leather wallet with multiple card slots and coin pocket."
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
    category: "Electronics",
    rating: 4.7,
    description: "Feature-packed smartwatch with health tracking, notifications, and customizable faces."
  },
  {
    id: 4,
    name: "Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww",
    category: "Clothing",
    rating: 4.0,
    description: "Soft, comfortable 100% cotton t-shirt in classic style and various colors."
  },
  {
    id: 5,
    name: "Plant Pot",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYW50JTIwcG90fGVufDB8fDB8fHww",
    category: "Home",
    rating: 4.3,
    description: "Decorative ceramic pot for indoor plants with drainage hole and saucer."
  },
  {
    id: 6,
    name: "Coffee Maker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1570087532596-0e71bd49c222?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZSUyMG1ha2VyfGVufDB8fDB8fHww",
    category: "Kitchen",
    rating: 4.8,
    description: "Programmable coffee maker with thermal carafe and auto-brewing function."
  },
  {
    id: 7,
    name: "Running Shoes",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    category: "Footwear",
    rating: 4.6,
    description: "Lightweight performance running shoes with responsive cushioning and breathable mesh."
  },
  {
    id: 8,
    name: "Backpack",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D",
    category: "Accessories",
    rating: 4.4,
    description: "Durable, water-resistant backpack with laptop compartment and multiple pockets."
  },
  {
    id: 9,
    name: "Desk Lamp",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D",
    category: "Home",
    rating: 4.1,
    description: "Adjustable LED desk lamp with multiple brightness levels and color temperatures."
  },
  {
    id: 10,
    name: "Wireless Mouse",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBtb3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Electronics",
    rating: 4.3,
    description: "Ergonomic wireless mouse with precise tracking and long battery life."
  },
  {
    id: 11,
    name: "Yoga Mat",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Fitness",
    rating: 4.5,
    description: "Non-slip, eco-friendly yoga mat with alignment markings and carrying strap."
  },
  {
    id: 12,
    name: "Stainless Water Bottle",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
    category: "Accessories",
    rating: 4.2,
    description: "Vacuum-insulated stainless steel water bottle that keeps drinks cold for 24 hours."
  }
];
