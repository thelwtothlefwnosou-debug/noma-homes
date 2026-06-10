export type Home = {
  id: string;
  city: string;
  area: string;
  title: string;
  price: number;
  bedrooms: number;
  baths: number;
  size: number;
  minStay: number;
  rating: number;
  style: string;
  tags: string[];
  description: string;
};

export const homes: Home[] = [
  {
    id: "athenian-calm-residence",
    city: "Athens",
    area: "Kolonaki",
    title: "Athenian Calm Residence",
    price: 1850,
    bedrooms: 1,
    baths: 1,
    size: 58,
    minStay: 1,
    rating: 4.92,
    style: "Warm minimal",
    tags: ["Bills included", "Workspace", "Premium linen", "Weekly cleaning"],
    description:
      "A quiet design-led apartment in central Athens, ideal for executives, remote workers and relocations. Fully furnished, equipped and ready for monthly living."
  },
  {
    id: "koukaki-soft-loft",
    city: "Athens",
    area: "Koukaki",
    title: "Koukaki Soft Loft",
    price: 1420,
    bedrooms: 1,
    baths: 1,
    size: 51,
    minStay: 1,
    rating: 4.88,
    style: "Natural tones",
    tags: ["Bills included", "Fast Wi‑Fi", "Balcony", "Equipped kitchen"],
    description:
      "A furnished monthly home close to Acropolis, cafés and metro. Designed for comfortable everyday living with flexible stays from one month."
  },
  {
    id: "seafront-work-apartment",
    city: "Thessaloniki",
    area: "Kalamaria",
    title: "Seafront Work Apartment",
    price: 1650,
    bedrooms: 2,
    baths: 2,
    size: 82,
    minStay: 2,
    rating: 4.95,
    style: "Coastal calm",
    tags: ["Sea view", "Workspace", "Pet friendly", "Support included"],
    description:
      "A bright apartment with dedicated work area, sea views and everything included for a medium-term stay."
  },
  {
    id: "alfama-terracotta-home",
    city: "Lisbon",
    area: "Alfama",
    title: "Alfama Terracotta Home",
    price: 2380,
    bedrooms: 2,
    baths: 1,
    size: 76,
    minStay: 1,
    rating: 4.91,
    style: "Terracotta",
    tags: ["Bills included", "Designer furniture", "Balcony", "Fast Wi‑Fi"],
    description:
      "A warm, textured home in Lisbon for guests who want a flexible stay without compromising design or service."
  },
  {
    id: "eixample-gallery-apartment",
    city: "Barcelona",
    area: "Eixample",
    title: "Eixample Gallery Apartment",
    price: 2550,
    bedrooms: 2,
    baths: 2,
    size: 88,
    minStay: 3,
    rating: 4.89,
    style: "Gallery style",
    tags: ["Premium linen", "Workspace", "Elevator", "Cleaning"],
    description:
      "A refined apartment for monthly living, with elegant interiors and practical services included."
  },
  {
    id: "northern-suburbs-family-home",
    city: "Athens",
    area: "Kifisia",
    title: "Northern Suburbs Family Home",
    price: 2950,
    bedrooms: 3,
    baths: 2,
    size: 135,
    minStay: 6,
    rating: 4.86,
    style: "Family calm",
    tags: ["Garden", "Parking", "Pet friendly", "Bills included"],
    description:
      "A large furnished residence for families relocating for work or staying between homes."
  }
];

export function getHome(id: string) {
  return homes.find((home) => home.id === id);
}
