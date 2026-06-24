// Placeholder catalogue for Nulebal. Swap for a real CMS / commerce backend later.

export type Category = "Outer" | "Top" | "Bottom" | "Accessories";

export type Product = {
  slug: string;
  name: string;
  price: number;
  category: Category;
  colorway: string;
  material: string;
  isNew?: boolean;
  image?: string;
  // Two HSL stops used to render the placeholder garment swatch.
  tone: [string, string];
};

export const products: Product[] = [
  {
    slug: "halcyon-shell-jacket",
    name: "Halcyon Shell Jacket",
    price: 18500,
    category: "Outer",
    colorway: "Chalk",
    material: "3-layer ripstop nylon",
    isNew: true,
    image: "/images/halcyon-shell-jacket.png",
    tone: ["hsl(40 6% 90%)", "hsl(40 6% 78%)"],
  },
  {
    slug: "field-overshirt",
    name: "Field Overshirt",
    price: 9800,
    category: "Outer",
    colorway: "Slate",
    material: "Brushed cotton twill",
    isNew: true,
    image: "/images/field-overshirt.png",
    tone: ["hsl(220 8% 72%)", "hsl(220 10% 55%)"],
  },
  {
    slug: "module-down-vest",
    name: "Module Down Vest",
    price: 13500,
    category: "Outer",
    colorway: "Bone",
    material: "Recycled down, 700 fill",
    image: "/images/module-down-vest.png",
    tone: ["hsl(44 10% 88%)", "hsl(44 10% 74%)"],
  },
  {
    slug: "everyday-heavy-tee",
    name: "Everyday Heavy Tee",
    price: 3200,
    category: "Top",
    colorway: "Off-white",
    material: "240gsm organic cotton",
    isNew: true,
    image: "/images/everyday-heavy-tee.png",
    tone: ["hsl(48 14% 93%)", "hsl(48 12% 82%)"],
  },
  {
    slug: "seam-knit-crew",
    name: "Seam Knit Crew",
    price: 8500,
    category: "Top",
    colorway: "Oat",
    material: "Merino lambswool",
    image: "/images/seam-knit-crew.png",
    tone: ["hsl(36 20% 84%)", "hsl(34 18% 70%)"],
  },
  {
    slug: "panel-zip-hoodie",
    name: "Panel Zip Hoodie",
    price: 9200,
    category: "Top",
    colorway: "Ash",
    material: "Loopback French terry",
    image: "/images/panel-zip-hoodie.png",
    tone: ["hsl(30 4% 80%)", "hsl(30 4% 64%)"],
  },
  {
    slug: "drawcord-utility-pant",
    name: "Drawcord Utility Pant",
    price: 8900,
    category: "Bottom",
    colorway: "Stone",
    material: "Cotton-nylon canvas",
    isNew: true,
    image: "/images/drawcord-utility-pant.png",
    tone: ["hsl(40 10% 80%)", "hsl(38 10% 64%)"],
  },
  {
    slug: "tapered-work-trouser",
    name: "Tapered Work Trouser",
    price: 7800,
    category: "Bottom",
    colorway: "Charcoal",
    material: "Garment-dyed twill",
    image: "/images/tapered-work-trouser.png",
    tone: ["hsl(220 4% 40%)", "hsl(220 5% 26%)"],
  },
  {
    slug: "pleated-wide-short",
    name: "Pleated Wide Short",
    price: 4900,
    category: "Bottom",
    colorway: "Sand",
    material: "Crisp cotton poplin",
    image: "/images/pleated-wide-short.png",
    tone: ["hsl(42 22% 82%)", "hsl(40 20% 68%)"],
  },
  {
    slug: "structured-cap",
    name: "Structured Cap",
    price: 2400,
    category: "Accessories",
    colorway: "Chalk",
    material: "Washed cotton drill",
    image: "/images/structured-cap.png",
    tone: ["hsl(44 8% 88%)", "hsl(44 8% 74%)"],
  },
  {
    slug: "ripstop-tote",
    name: "Ripstop Tote",
    price: 3600,
    category: "Accessories",
    colorway: "Black",
    material: "Coated ripstop",
    isNew: true,
    image: "/images/structured-cap.png",
    tone: ["hsl(0 0% 22%)", "hsl(0 0% 10%)"],
  },
  {
    slug: "ribbed-crew-socks",
    name: "Ribbed Crew Socks",
    price: 1200,
    category: "Accessories",
    colorway: "Cream",
    material: "Combed cotton blend",
    image: "/images/everyday-heavy-tee.png",
    tone: ["hsl(46 18% 90%)", "hsl(44 16% 80%)"],
  },
];

export const categories: Category[] = ["Outer", "Top", "Bottom", "Accessories"];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export type Collection = {
  slug: string;
  title: string;
  season: string;
  blurb: string;
  count: number;
  image?: string;
  tone: [string, string];
};

export const collections: Collection[] = [
  {
    slug: "coasto-vibes",
    title: "Coasto Vibes",
    season: "S/S 2026",
    blurb:
      "Linen, breezy cottons and easy shapes — made for coast heat and Nairobi evenings.",
    count: 18,
    image: "/images/drawcord-utility-pant.png",
    tone: ["hsl(40 16% 90%)", "hsl(38 16% 75%)"],
  },
  {
    slug: "njeve",
    title: "Njeve",
    season: "F/W 2025",
    blurb:
      "Warm layers and weatherproof shells for cold up-country mornings — njeve, sorted.",
    count: 22,
    image: "/images/halcyon-shell-jacket.png",
    tone: ["hsl(210 8% 64%)", "hsl(214 10% 44%)"],
  },
  {
    slug: "jua-kali",
    title: "Jua Kali",
    season: "Permanent",
    blurb:
      "Hand-finished staples we make on repeat — the heavy tee, the work trouser, the cap.",
    count: 12,
    image: "/images/everyday-heavy-tee.png",
    tone: ["hsl(46 16% 86%)", "hsl(44 14% 72%)"],
  },
];

export function formatPrice(value: number) {
  return `KSh ${value.toLocaleString("en-KE")}`;
}
