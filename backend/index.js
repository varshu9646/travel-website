const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const destinations = [
  {
    name: "Paris",
    description: "Paris, the capital of France, is known as the city of love and lights. From the iconic Eiffel Tower to charming cafes along the Seine River, the city offers a magical blend of romance, art, and history. Visitors can explore world-class museums like the Louvre, enjoy authentic French cuisine, and experience a rich cultural atmosphere that makes every moment unforgettable.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Tokyo",
    description: "Tokyo is a vibrant city where modern innovation meets ancient tradition. Skyscrapers filled with neon lights stand alongside peaceful temples and cherry blossom parks. Visitors can experience advanced technology, delicious Japanese cuisine, and a unique culture that blends respect, discipline, and creativity, making Tokyo an unforgettable destination.",
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "New York",
    description: "New York City is a global hub of culture, entertainment, and opportunity. Known for its iconic skyline, Times Square, and Central Park, the city never sleeps. Visitors can explore diverse neighborhoods, enjoy Broadway shows, and experience a fast-paced lifestyle filled with energy, diversity, and endless possibilities.",
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Sydney",
    description: "Sydney is a stunning coastal city known for its iconic Opera House and beautiful harbour. With golden beaches, vibrant nightlife, and outdoor adventures, it offers a perfect balance between relaxation and excitement. Visitors can enjoy surfing, explore cultural festivals, and experience Australia's warm and welcoming lifestyle.",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Rome",
    description: "Rome is a historic city filled with ancient ruins, grand architecture, and timeless beauty. From the Colosseum to Vatican City, every corner tells a story of the past. Visitors can immerse themselves in Italian culture, enjoy authentic cuisine, and walk through centuries of history, making it a truly enriching experience.",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Dubai",
    description: "Dubai is a futuristic city known for luxury, innovation, and architectural wonders like the Burj Khalifa. It offers a unique blend of modern lifestyle and traditional Arabian culture. Visitors can enjoy desert safaris, luxury shopping, and world-class entertainment, making it one of the most exciting travel destinations.",
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "London",
    description: "London is a city where history meets modernity. Famous landmarks like Big Ben, Tower Bridge, and Buckingham Palace reflect its rich heritage. Visitors can explore museums, enjoy diverse cuisines, and experience a vibrant cultural scene that makes London one of the most dynamic cities in the world.",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Bali",
    description: "Bali is a tropical paradise known for its lush greenery, serene beaches, and spiritual atmosphere. Visitors can relax in scenic resorts, explore ancient temples, and enjoy a peaceful connection with nature. Its rich culture, traditional dances, and warm hospitality make Bali a perfect getaway destination.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
  }
];

app.get("/api/destinations", (req, res) => {
  res.json(destinations);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});