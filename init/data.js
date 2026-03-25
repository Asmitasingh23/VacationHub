const listings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views.",
    image: {
      filename: "beachfront-cottage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Trending",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "modern-loft",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "IconicCities",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin surrounded by nature.",
    image: {
      filename: "mountain-retreat",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa among vineyards.",
    image: {
      filename: "tuscany-villa",
      url: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Farms",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A nature lover's paradise.",
    image: {
      filename: "treehouse-portland",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Trending",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach in this luxury condo.",
    image: {
      filename: "cancun-condo",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Trending",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene Lake Tahoe.",
    image: {
      filename: "lake-tahoe-cabin",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse.",
    image: {
      filename: "la-penthouse",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "IconicCities",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in the Swiss Alps.",
    image: {
      filename: "swiss-chalet",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "Mountains",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild and witness the Great Migration up close.",
    image: {
      filename: "safari-lodge",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "Farms",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in Amsterdam's iconic canal district.",
    image: {
      filename: "amsterdam-house",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "IconicCities",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for an unforgettable vacation experience.",
    image: {
      filename: "fiji-island",
      url: "https://images.unsplash.com/photo-1694967832949-09984640b143?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "Trending",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint thatched-roof cottage.",
    image: {
      filename: "cotswolds-cottage",
      url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Farms",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone in the heart of Boston.",
    image: {
      filename: "boston-brownstone",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "IconicCities",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the shores of Bali in this bungalow with a private pool.",
    image: {
      filename: "bali-bungalow",
      url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "Trending",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Rockies.",
    image: {
      filename: "banff-cabin",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "Mountains",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into 1920s glamour in this stylish South Beach apartment.",
    image: {
      filename: "miami-art-deco",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "Rooms",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Luxurious villa with a private infinity pool in tropical Phuket.",
    image: {
      filename: "phuket-villa",
      url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "Trending",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in the Scottish Highlands in this massive stone castle.",
    image: {
      filename: "scotland-castle",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "Castles",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert with a private pool.",
    image: {
      filename: "dubai-oasis",
      url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "IconicCities",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description: "Unplug in this cozy log cabin surrounded by natural beauty.",
    image: {
      filename: "montana-log-cabin",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear Mediterranean waters on a Greek island.",
    image: {
      filename: "greece-villa",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category: "Trending",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the Costa Rican forest.",
    image: {
      filename: "costa-rica-treehouse",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Camping",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this restored cottage.",
    image: {
      filename: "charleston-cottage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    category: "Rooms",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore vibrant Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "tokyo-apartment",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "IconicCities",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description: "Spend your days by the lake in the scenic White Mountains.",
    image: {
      filename: "nh-lakefront",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category: "Camping",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in this overwater villa with stunning Indian Ocean views.",
    image: {
      filename: "maldives-overwater",
      url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "Trending",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski resort chalet.",
    image: {
      filename: "aspen-ski-chalet",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast. Surf and relax.",
    image: {
      filename: "cr-beach-house",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Trending",
  },
  {
    title: "Glass Dome Under Northern Lights",
    description:
      "Sleep under the stars and witness the Aurora Borealis in Finland.",
    image: {
      filename: "finland-dome",
      url: "https://images.unsplash.com/photo-1645550626925-b2265b308686?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3200,
    location: "Lapland",
    country: "Finland",
    category: "Arctic",
  },
  {
    title: "Luxury Houseboat on the Seine",
    description: "Wake up to the rocking water and a view of the Eiffel Tower.",
    image: {
      filename: "paris-houseboat",
      url: "https://images.unsplash.com/photo-1559599238-308793637427?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Paris",
    country: "France",
    category: "Trending",
  },
  {
    title: "Cliffside Infinity Villa",
    description: "Architectural masterpiece perched on a cliff in Santorini.",
    image: {
      filename: "santorini-cliffside",
      url: "https://images.unsplash.com/photo-1571406252241-db0280bd36cd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4500,
    location: "Santorini",
    country: "Greece",
    category: "Trending",
  },
  {
    title: "Traditional Ryokan Stay",
    description:
      "Immerse yourself in Japanese culture with a private outdoor onsen.",
    image: {
      filename: "kyoto-ryokan",
      url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Kyoto",
    country: "Japan",
    category: "Rooms",
  },
  {
    title: "Vineyard Farmhouse",
    description: "Rustic farmhouse including wine tasting sessions at sunset.",
    image: {
      filename: "napa-vineyard",
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Napa Valley",
    country: "United States",
    category: "Farms",
  },
  {
    title: "Modern Desert Mirror House",
    description:
      "A unique mirrored house reflecting the Joshua Tree landscape.",
    image: {
      filename: "desert-mirror-house",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Joshua Tree",
    country: "United States",
    category: "Trending",
  },
  {
    title: "Floating Villa with Slide",
    description:
      "Perfect for families! Private slide into the turquoise lagoon.",
    image: {
      filename: "borabora-slide",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Bora Bora",
    country: "French Polynesia",
    category: "Trending",
  },
  {
    title: "Cozy A-Frame Forest Cabin",
    description:
      "A picture-perfect A-frame cabin deep in the German pine woods.",
    image: {
      filename: "aframe-germany",
      url: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Black Forest",
    country: "Germany",
    category: "Mountains",
  },
  {
    title: "Moroccan Riad with Courtyard",
    description: "An oasis of calm in the Medina with a central plunge pool.",
    image: {
      filename: "marrakesh-riad",
      url: "https://images.unsplash.com/photo-1599653555286-7e0bc0fc8c63?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1100,
    location: "Marrakesh",
    country: "Morocco",
    category: "IconicCities",
  },
  {
    title: "Medieval Castle in the Alps",
    description: "Centuries-old castle with stone walls and modern luxury.",
    image: {
      filename: "austria-castle",
      url: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Salzburg",
    country: "Austria",
    category: "Castles",
  },
  {
    title: "Transparent Glamping Dome",
    description: "360-degree views of the Wadi Rum rugged landscape.",
    image: {
      filename: "wadi-rum-dome",
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Wadi Rum",
    country: "Jordan",
    category: "Camping",
  },
  {
    title: "Luxury Jungle Treehouse",
    description: "A three-story bamboo masterpiece in the Bali rainforest.",
    image: {
      filename: "bali-jungle-house",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60",
    },
    price: 1350,
    location: "Bali",
    country: "Indonesia",
    category: "Trending",
  },
  {
    title: "Floating Glass Villa",
    description: "Transparent villa with a private boat for reef exploration.",
    image: {
      filename: "reef-floating-villa",
      url: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=60",
    },
    price: 7500,
    location: "Bora Bora",
    country: "French Polynesia",
    category: "Trending",
  },
  {
    title: "Minimalist Desert Pod",
    description: "Solar-powered pod in the heart of the Atacama desert.",
    image: {
      filename: "atacama-pod",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Atacama",
    country: "Chile",
    category: "Trending",
  },
  {
    title: "Snowy Igloo Retreat",
    description: "Spend the night in a hand-carved snow igloo in Zermatt.",
    image: {
      filename: "zermatt-igloo",
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 850,
    location: "Zermatt",
    country: "Switzerland",
    category: "Mountains",
  },
  {
    title: "Vintage Sailboat Stay",
    description: "A classic 1950s yacht anchored in a private cove.",
    image: {
      filename: "amalfi-yacht",
      url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Amalfi Coast",
    country: "Italy",
    category: "Trending",
  },
  {
    title: "Lavender Farmhouse",
    description: "Stay in an 18th-century farmhouse surrounded by lavender.",
    image: {
      filename: "provence-farmhouse",
      url: "https://plus.unsplash.com/premium_photo-1733760125610-3b5ebc834623?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1250,
    location: "Provence",
    country: "France",
    category: "Farms",
  },
  {
    title: "Luxury Cave Suite",
    description: "A modern hotel suite built directly into volcanic rock.",
    image: {
      filename: "santorini-cave",
      url: "https://images.unsplash.com/photo-1636925983269-c98a1e89a676?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3800,
    location: "Santorini",
    country: "Greece",
    category: "Rooms",
  },
  {
    title: "Bamboo Bird's Nest",
    description: "Bird's nest bamboo pod offering jungle canopy views.",
    image: {
      filename: "tulum-bamboo",
      url: "https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1150,
    location: "Tulum",
    country: "Mexico",
    category: "Trending",
  },
  {
    title: "Countryside Windmill",
    description: "Converted traditional windmill with 360-degree viewing deck.",
    image: {
      filename: "uk-windmill",
      url: "https://plus.unsplash.com/premium_photo-1661914833428-7e071c7b0b87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1400,
    location: "Norfolk",
    country: "United Kingdom",
    category: "Farms",
  },
  {
    title: "Modern Glass Cabin",
    description: "Minimalist glass cabin designed to blend into the forest.",
    image: {
      filename: "oslo-glass-cabin",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Oslo",
    country: "Norway",
    category: "Mountains",
  },
];
module.exports = { data: listings };
