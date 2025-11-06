// src/data/MockDestinations.js
export const mockDestinations = [
  {
    id: 1,
    name: "Eiffel Tower",
    city: "Paris",
    country: "France",
    description: "Iconic iron lattice tower and symbol of Paris. Offers breathtaking views of the city from multiple observation decks.",
    image: "/eiffel-tower.jpg",
    entryFee: 1800,
    category: "Landmark",
    visitDuration: "2-3 hours",
    bestTimeToVisit: "Early morning or sunset",
    mustSee: true,
    rating: 4.8,
    visitors: "7M annually"
  },
  {
    id: 2,
    name: "Colosseum",
    city: "Rome",
    country: "Italy",
    description: "Ancient amphitheater and one of the greatest works of Roman architecture. A UNESCO World Heritage site.",
    image: "/colosseum.jpg",
    entryFee: 1200,
    category: "Historical",
    visitDuration: "2-3 hours",
    bestTimeToVisit: "Early morning",
    mustSee: true,
    rating: 4.9,
    visitors: "6M annually"
  },
  {
    id: 3,
    name: "Big Ben & Parliament",
    city: "London",
    country: "UK",
    description: "Iconic clock tower and the Houses of Parliament. A symbol of London and British democracy.",
    image: "/Big-ben.jpg",
    entryFee: 2000,
    category: "Landmark",
    visitDuration: "1-2 hours",
    bestTimeToVisit: "Afternoon",
    mustSee: true,
    rating: 4.7,
    visitors: "5M annually"
  },
  {
    id: 4,
    name: "Brandenburg Gate",
    city: "Berlin",
    country: "Germany",
    description: "Neoclassical monument and symbol of German reunification. One of Berlin's most famous landmarks.",
    image: "/brandenburg.jpg",
    entryFee: 0, // Free
    category: "Landmark",
    visitDuration: "30 mins - 1 hour",
    bestTimeToVisit: "Evening for photos",
    mustSee: true,
    rating: 4.6,
    visitors: "4M annually"
  },
  {
    id: 5,
    name: "Sagrada Família",
    city: "Barcelona",
    country: "Spain",
    description: "Gaudí's unfinished masterpiece. A stunning basilica combining Gothic and Art Nouveau architecture.",
    image: "/sagrada-familia.jpg",
    entryFee: 2200,
    category: "Religious",
    visitDuration: "2-3 hours",
    bestTimeToVisit: "Morning light",
    mustSee: true,
    rating: 4.9,
    visitors: "4.5M annually"
  }
];

// Export cities for filtering
export const destinationCities = [
  { name: "Paris", country: "France", count: 1 },
  { name: "Rome", country: "Italy", count: 1 },
  { name: "London", country: "UK", count: 1 },
  { name: "Berlin", country: "Germany", count: 1 },
  { name: "Barcelona", country: "Spain", count: 1 }
];