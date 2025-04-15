
// Mock data for the EcoThread marketplace

export interface Product {
  id: string;
  name: string;
  brand: string;
  brandId: string;
  price: number;
  description: string;
  details: string[];
  sustainability: string[];
  images: string[];
  categories: string[];
  tags: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  isFavorite?: boolean;
  badges?: string[];
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  longDescription?: string;
  location?: string;
  founded?: number;
  certifications?: string[];
  website?: string;
}

// Brands data
export const brandsData: Brand[] = [
  {
    id: "b1",
    name: "EcoWear",
    logo: "https://via.placeholder.com/150",
    description: "Sustainable basics for everyday wear",
    longDescription: "EcoWear creates sustainable basics using organic cotton and recycled materials. Founded with a mission to reduce fashion's environmental impact while providing comfortable everyday essentials.",
    location: "Portland, Oregon",
    founded: 2015,
    certifications: ["Global Organic Textile Standard", "Fair Trade Certified"],
    website: "https://ecowear.example.com"
  },
  {
    id: "b2",
    name: "Green Steps",
    logo: "https://via.placeholder.com/150",
    description: "Ethical footwear for conscious consumers",
    longDescription: "Green Steps crafts ethical footwear using sustainable materials and fair labor practices. Each pair is designed to be durable, comfortable, and environmentally responsible.",
    location: "Barcelona, Spain",
    founded: 2018,
    certifications: ["B Corp Certified", "Leather Working Group"],
    website: "https://greensteps.example.com"
  },
  {
    id: "b3",
    name: "Pure Threads",
    logo: "https://via.placeholder.com/150",
    description: "Luxury sustainable fashion made to last",
    longDescription: "Pure Threads creates luxury garments using high-quality sustainable materials. With timeless designs and ethical production, their pieces are made to be cherished for years.",
    location: "Milan, Italy",
    founded: 2012,
    certifications: ["Butterfly Mark", "OEKO-TEX Standard 100"],
    website: "https://purethreads.example.com"
  },
  {
    id: "b4",
    name: "Bamboo Forest",
    logo: "https://via.placeholder.com/150",
    description: "Bamboo-based clothing and accessories",
    longDescription: "Bamboo Forest specializes in soft, breathable clothing made from bamboo fibers. Their production process uses minimal water and no harmful chemicals to create sustainable everyday items.",
    location: "Austin, Texas",
    founded: 2016,
    certifications: ["FSC Certified", "PETA-Approved Vegan"],
    website: "https://bambooforest.example.com"
  }
];

// Products data
export const productsData: Product[] = [
  {
    id: "p1",
    name: "Organic Cotton T-Shirt",
    brand: "EcoWear",
    brandId: "b1",
    price: 35,
    description: "Classic crew neck t-shirt made from 100% organic cotton.",
    details: [
      "100% GOTS certified organic cotton",
      "Relaxed fit",
      "Plastic-free packaging",
      "Produced in a Fair Trade certified factory"
    ],
    sustainability: [
      "Water usage reduced by 91% compared to conventional cotton",
      "No toxic chemicals or pesticides used",
      "Naturally dyed using plant-based dyes"
    ],
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    ],
    categories: ["Women", "Tops", "Basics"],
    tags: ["organic", "cotton", "basics", "t-shirt"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Natural", hex: "#F5F5DC" },
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#000080" }
    ],
    badges: ["Organic", "Fair Trade"]
  },
  {
    id: "p2",
    name: "Recycled Denim Jeans",
    brand: "Pure Threads",
    brandId: "b3",
    price: 95,
    description: "Classic straight-leg jeans made from recycled denim and organic cotton.",
    details: [
      "70% recycled denim, 30% organic cotton",
      "Straight leg fit",
      "Five-pocket design",
      "Produced using 80% less water than conventional jeans"
    ],
    sustainability: [
      "Made from post-consumer waste denim",
      "Low-impact washing process",
      "Biodegradable buttons and rivets",
      "Zero-waste pattern cutting"
    ],
    images: [
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
    ],
    categories: ["Women", "Bottoms", "Jeans"],
    tags: ["recycled", "denim", "jeans", "sustainable"],
    sizes: ["24", "26", "28", "30", "32"],
    colors: [
      { name: "Medium Wash", hex: "#5D89BA" },
      { name: "Dark Wash", hex: "#141B4D" }
    ],
    badges: ["Recycled", "Water Saving"]
  },
  {
    id: "p3",
    name: "Cork Strap Sandals",
    brand: "Green Steps",
    brandId: "b2",
    price: 75,
    description: "Comfortable sandals with cork footbed and recycled rubber sole.",
    details: [
      "Sustainable cork footbed",
      "Straps made from pineapple leather alternative",
      "Recycled rubber sole",
      "Adjustable buckle"
    ],
    sustainability: [
      "Cork is harvested sustainably without harming the trees",
      "Pineapple leather made from agricultural waste",
      "Biodegradable materials",
      "Carbon-neutral shipping"
    ],
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
    ],
    categories: ["Women", "Shoes", "Sandals"],
    tags: ["cork", "vegan", "sandals", "summer"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: [
      { name: "Natural", hex: "#D2B48C" },
      { name: "Black", hex: "#000000" }
    ],
    badges: ["Vegan", "Biodegradable"]
  },
  {
    id: "p4",
    name: "Bamboo Lounge Set",
    brand: "Bamboo Forest",
    brandId: "b4",
    price: 120,
    description: "Ultra-soft loungewear set made from sustainable bamboo fabric.",
    details: [
      "95% bamboo viscose, 5% elastane",
      "Includes top and pants",
      "Breathable and thermoregulating",
      "Naturally antibacterial"
    ],
    sustainability: [
      "Bamboo grows quickly with minimal water and no pesticides",
      "Closed-loop production process",
      "Biodegradable fabric",
      "FSC-certified bamboo source"
    ],
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
    ],
    categories: ["Women", "Loungewear", "Sets"],
    tags: ["bamboo", "loungewear", "soft", "comfortable"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Sage", hex: "#9CAF88" },
      { name: "Dusty Rose", hex: "#DCAE96" },
      { name: "Charcoal", hex: "#36454F" }
    ],
    badges: ["Bamboo", "Biodegradable"]
  },
  {
    id: "p5",
    name: "Hemp Button-Up Shirt",
    brand: "EcoWear",
    brandId: "b1",
    price: 85,
    description: "Relaxed button-up shirt made from sustainable hemp and organic cotton blend.",
    details: [
      "55% hemp, 45% organic cotton",
      "Relaxed fit",
      "Mother of pearl buttons",
      "Chest pocket"
    ],
    sustainability: [
      "Hemp requires no pesticides and minimal water to grow",
      "Durable fabric that gets softer with each wash",
      "Naturally dyed using plant-based dyes",
      "Biodegradable materials"
    ],
    images: [
      "https://images.unsplash.com/photo-1604695573706-53170668f6a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    ],
    categories: ["Men", "Tops", "Shirts"],
    tags: ["hemp", "shirt", "button-up", "sustainable"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Natural", hex: "#F5F5DC" },
      { name: "Indigo", hex: "#3F5B92" }
    ],
    badges: ["Hemp", "Organic"]
  },
  {
    id: "p6",
    name: "Upcycled Patchwork Jacket",
    brand: "Pure Threads",
    brandId: "b3",
    price: 195,
    description: "One-of-a-kind jacket made from upcycled denim and textile scraps.",
    details: [
      "Made from upcycled denim and deadstock fabrics",
      "Each piece is unique",
      "Oversized fit",
      "Multiple pockets"
    ],
    sustainability: [
      "Zero waste design using textile scraps and deadstock fabrics",
      "Diverts textiles from landfill",
      "Handmade by artisans paid fair wages",
      "Repairs offered for life of garment"
    ],
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
    ],
    categories: ["Women", "Outerwear", "Jackets"],
    tags: ["upcycled", "patchwork", "jacket", "one of a kind"],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Mixed Denim", hex: "#6F8FAF" }
    ],
    badges: ["Upcycled", "Zero Waste", "Handmade"]
  },
  {
    id: "p7",
    name: "Minimalist Cork Wallet",
    brand: "Green Steps",
    brandId: "b2",
    price: 45,
    description: "Slim, durable wallet made from sustainable cork.",
    details: [
      "100% sustainable cork exterior",
      "Organic cotton lining",
      "Multiple card slots",
      "Slim profile design"
    ],
    sustainability: [
      "Cork is harvested without harming trees",
      "Biodegradable and renewable materials",
      "Durable alternative to leather",
      "Water-resistant and lightweight"
    ],
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
    ],
    categories: ["Accessories", "Wallets"],
    tags: ["cork", "wallet", "vegan", "accessories"],
    sizes: ["One Size"],
    colors: [
      { name: "Natural", hex: "#D2B48C" },
      { name: "Black", hex: "#000000" }
    ],
    badges: ["Vegan", "Biodegradable"]
  },
  {
    id: "p8",
    name: "Bamboo Underwear Set",
    brand: "Bamboo Forest",
    brandId: "b4",
    price: 48,
    description: "Ultra-soft, breathable underwear set made from bamboo fabric.",
    details: [
      "95% bamboo viscose, 5% elastane",
      "Set of three pairs",
      "Naturally antibacterial",
      "Moisture-wicking"
    ],
    sustainability: [
      "Bamboo requires 1/3 the water of cotton to grow",
      "No pesticides or fertilizers used",
      "Biodegradable fabric",
      "Plastic-free packaging"
    ],
    images: [
      "https://images.unsplash.com/photo-1566207274508-0ac92acc01d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    categories: ["Women", "Underwear", "Basics"],
    tags: ["bamboo", "underwear", "basics", "sustainable"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Mixed Neutrals", hex: "#D2B48C" }
    ],
    badges: ["Bamboo", "Antibacterial"]
  }
];

export const filterCategories = [
  {
    name: "Category",
    options: [
      { id: "women", label: "Women" },
      { id: "men", label: "Men" },
      { id: "accessories", label: "Accessories" },
      { id: "tops", label: "Tops" },
      { id: "bottoms", label: "Bottoms" },
      { id: "shoes", label: "Shoes" },
      { id: "loungewear", label: "Loungewear" }
    ]
  },
  {
    name: "Brand",
    options: [
      { id: "b1", label: "EcoWear" },
      { id: "b2", label: "Green Steps" },
      { id: "b3", label: "Pure Threads" },
      { id: "b4", label: "Bamboo Forest" }
    ]
  },
  {
    name: "Sustainable Features",
    options: [
      { id: "organic", label: "Organic" },
      { id: "recycled", label: "Recycled" },
      { id: "vegan", label: "Vegan" },
      { id: "bamboo", label: "Bamboo" },
      { id: "hemp", label: "Hemp" },
      { id: "upcycled", label: "Upcycled" },
      { id: "biodegradable", label: "Biodegradable" },
      { id: "fair-trade", label: "Fair Trade" }
    ]
  },
  {
    name: "Price",
    options: [
      { id: "under-50", label: "Under $50" },
      { id: "50-100", label: "$50 - $100" },
      { id: "100-200", label: "$100 - $200" },
      { id: "over-200", label: "Over $200" }
    ]
  }
];
