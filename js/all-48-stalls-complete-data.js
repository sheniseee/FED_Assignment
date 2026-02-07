// ================================================================================
// COMPLETE SALES & SATISFACTION DATA FOR ALL 48 STALLS
// ================================================================================
// This generates realistic data for every single stall in the system
// Run: addAllStallsData()
// ================================================================================

const ALL_48_STALLS_DATA = {
  
  // ============================================================================
  // SALES DATA - ALL 48 STALLS
  // ============================================================================
  sales: [
    // Maxwell Food Centre (8 stalls)
    {
      hawkerCentre: "Maxwell Food Centre",
      stall: "Tian Tian Chicken Rice",
      popularItems: [
        { name: "Chicken Rice", count: 325 },
        { name: "Roasted Chicken", count: 243 },
        { name: "Soy Sauce Chicken", count: 210 },
        { name: "White Chicken", count: 193 },
        { name: "Mixed Chicken Plate", count: 150 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 5.50,
      dailyOrders: 180
    },
    {
      hawkerCentre: "Maxwell Food Centre",
      stall: "Zhen Zhen Porridge",
      popularItems: [
        { name: "Century Egg Porridge", count: 198 },
        { name: "Fish Porridge", count: 176 },
        { name: "Pork Porridge", count: 154 },
        { name: "Mixed Porridge", count: 132 },
        { name: "Chicken Porridge", count: 118 }
      ],
      peakHours: [7, 8, 12, 13],
      avgOrderValue: 4.20,
      dailyOrders: 140
    },
    {
      hawkerCentre: "Maxwell Food Centre",
      stall: "Rojak Popiah & Cockle",
      popularItems: [
        { name: "Traditional Rojak", count: 234 },
        { name: "Vegetable Popiah", count: 198 },
        { name: "Cockle Rojak", count: 167 },
        { name: "Egg Popiah", count: 145 },
        { name: "Mixed Rojak Special", count: 123 }
      ],
      peakHours: [11, 12, 18, 19],
      avgOrderValue: 4.80,
      dailyOrders: 135
    },
    {
      hawkerCentre: "Maxwell Food Centre",
      stall: "China Street Fritters",
      popularItems: [
        { name: "You Tiao (Fried Dough)", count: 289 },
        { name: "Ham Chim Peng", count: 234 },
        { name: "Sesame Ball", count: 198 },
        { name: "Curry Puff", count: 176 },
        { name: "Fried Wonton", count: 145 }
      ],
      peakHours: [7, 8, 9, 12],
      avgOrderValue: 3.50,
      dailyOrders: 165
    },
    {
      hawkerCentre: "Maxwell Food Centre",
      stall: "Fuzhou Oyster Cake",
      popularItems: [
        { name: "Oyster Cake", count: 256 },
        { name: "Prawn Cake", count: 198 },
        { name: "Mixed Seafood Cake", count: 167 },
        { name: "Fish Cake", count: 134 },
        { name: "Special Oyster Set", count: 112 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 5.20,
      dailyOrders: 130
    },
    {
      hawkerCentre: "Maxwell Food Centre",
      stall: "Jin Hua Fish Head Bee Hoon",
      popularItems: [
        { name: "Fish Head Bee Hoon Soup", count: 278 },
        { name: "Sliced Fish Bee Hoon", count: 223 },
        { name: "Mixed Seafood Bee Hoon", count: 189 },
        { name: "Fried Fish Bee Hoon", count: 156 },
        { name: "Fish Fillet Bee Hoon", count: 134 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 6.00,
      dailyOrders: 145
    },
    {
      hawkerCentre: "Maxwell Food Centre",
      stall: "Maxwell Fuzhou Oyster Cake",
      popularItems: [
        { name: "Classic Oyster Cake", count: 245 },
        { name: "Crispy Oyster Cake", count: 198 },
        { name: "Prawn Oyster Cake", count: 167 },
        { name: "Squid Oyster Cake", count: 143 },
        { name: "Deluxe Oyster Cake", count: 121 }
      ],
      peakHours: [11, 12, 18, 19],
      avgOrderValue: 5.50,
      dailyOrders: 125
    },
    {
      hawkerCentre: "Maxwell Food Centre",
      stall: "Liao Fan Hong Kong Soya Sauce",
      popularItems: [
        { name: "Soy Sauce Chicken Rice", count: 398 },
        { name: "BBQ Pork Rice", count: 334 },
        { name: "Roasted Pork Rice", count: 289 },
        { name: "Mixed Meat Rice", count: 245 },
        { name: "Noodles with Chicken", count: 198 }
      ],
      peakHours: [11, 12, 13, 18, 19],
      avgOrderValue: 4.50,
      dailyOrders: 220
    },

    // Marsiling Mall Hawker Centre (8 stalls)
    {
      hawkerCentre: "Marsiling Mall Hawker Centre",
      stall: "Ah Seng Durian",
      popularItems: [
        { name: "Mao Shan Wang Durian", count: 156 },
        { name: "D24 Durian", count: 134 },
        { name: "Red Prawn Durian", count: 112 },
        { name: "Golden Phoenix", count: 98 },
        { name: "XO Durian", count: 87 }
      ],
      peakHours: [14, 15, 16, 20, 21],
      avgOrderValue: 25.00,
      dailyOrders: 65
    },
    {
      hawkerCentre: "Marsiling Mall Hawker Centre",
      stall: "Chang Ji Noodles",
      popularItems: [
        { name: "Wanton Mee", count: 278 },
        { name: "Fishball Noodles", count: 245 },
        { name: "Dumpling Noodles", count: 198 },
        { name: "Minced Meat Noodles", count: 167 },
        { name: "Mixed Noodles", count: 145 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 5.00,
      dailyOrders: 160
    },
    {
      hawkerCentre: "Marsiling Mall Hawker Centre",
      stall: "Delicious Laksa",
      popularItems: [
        { name: "Traditional Laksa", count: 267 },
        { name: "Seafood Laksa", count: 189 },
        { name: "Chicken Laksa", count: 143 },
        { name: "Vegetarian Laksa", count: 98 },
        { name: "Extra Spicy Laksa", count: 87 }
      ],
      peakHours: [11, 12, 13, 18],
      avgOrderValue: 5.80,
      dailyOrders: 130
    },
    {
      hawkerCentre: "Marsiling Mall Hawker Centre",
      stall: "Eastern Mee Pok",
      popularItems: [
        { name: "Dry Mee Pok", count: 234 },
        { name: "Soup Mee Pok", count: 198 },
        { name: "Fishball Mee Pok", count: 176 },
        { name: "Mushroom Mee Pok", count: 154 },
        { name: "Special Mee Pok", count: 132 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 4.50,
      dailyOrders: 145
    },
    {
      hawkerCentre: "Marsiling Mall Hawker Centre",
      stall: "Fong's Roasted Delight",
      popularItems: [
        { name: "Roasted Duck Rice", count: 256 },
        { name: "Char Siew Rice", count: 223 },
        { name: "Roasted Pork Rice", count: 198 },
        { name: "Mixed Meat Rice", count: 176 },
        { name: "Soy Chicken Rice", count: 145 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 6.20,
      dailyOrders: 155
    },
    {
      hawkerCentre: "Marsiling Mall Hawker Centre",
      stall: "Good Taste Chicken Rice",
      popularItems: [
        { name: "Chicken Rice", count: 289 },
        { name: "Roasted Chicken", count: 234 },
        { name: "Steamed Chicken", count: 198 },
        { name: "Mixed Chicken", count: 167 },
        { name: "Chicken Chop", count: 134 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 5.00,
      dailyOrders: 165
    },
    {
      hawkerCentre: "Marsiling Mall Hawker Centre",
      stall: "Hainanese Curry Rice",
      popularItems: [
        { name: "Curry Chicken Rice", count: 245 },
        { name: "Curry Fish Rice", count: 198 },
        { name: "Fried Chicken Cutlet", count: 176 },
        { name: "Pork Chop Rice", count: 154 },
        { name: "Mixed Curry Rice", count: 132 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 5.50,
      dailyOrders: 140
    },
    {
      hawkerCentre: "Marsiling Mall Hawker Centre",
      stall: "Marsiling Satay",
      popularItems: [
        { name: "Chicken Satay (10 sticks)", count: 298 },
        { name: "Pork Satay (10 sticks)", count: 256 },
        { name: "Mutton Satay (10 sticks)", count: 198 },
        { name: "Mixed Satay (20 sticks)", count: 167 },
        { name: "Satay Bundle (50 sticks)", count: 89 }
      ],
      peakHours: [18, 19, 20, 21],
      avgOrderValue: 10.00,
      dailyOrders: 135
    },

    // Kampung Admiralty Hawker Centre (8 stalls)
    {
      hawkerCentre: "Kampung Admiralty Hawker Centre",
      stall: "Admiralty Fish Soup",
      popularItems: [
        { name: "Sliced Fish Soup", count: 278 },
        { name: "Fish Head Soup", count: 234 },
        { name: "Mixed Fish Soup", count: 198 },
        { name: "Fried Fish Soup", count: 167 },
        { name: "Fish Fillet Bee Hoon", count: 145 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 6.50,
      dailyOrders: 150
    },
    {
      hawkerCentre: "Kampung Admiralty Hawker Centre",
      stall: "Big Prawn Noodle",
      popularItems: [
        { name: "Big Prawn Mee", count: 245 },
        { name: "Prawn Mee Soup", count: 189 },
        { name: "Dry Prawn Mee", count: 167 },
        { name: "King Prawn Noodle", count: 143 },
        { name: "Prawn Wonton Mee", count: 121 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 7.50,
      dailyOrders: 125
    },
    {
      hawkerCentre: "Kampung Admiralty Hawker Centre",
      stall: "Chicken Rice Stall",
      popularItems: [
        { name: "Hainanese Chicken Rice", count: 312 },
        { name: "Roasted Chicken Rice", count: 267 },
        { name: "Steamed Chicken Rice", count: 223 },
        { name: "Soy Chicken Rice", count: 189 },
        { name: "Mixed Chicken Rice", count: 156 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 5.00,
      dailyOrders: 175
    },
    {
      hawkerCentre: "Kampung Admiralty Hawker Centre",
      stall: "Delicious Fried Hokkien Mee",
      popularItems: [
        { name: "Fried Hokkien Mee", count: 289 },
        { name: "Prawn Hokkien Mee", count: 234 },
        { name: "Squid Hokkien Mee", count: 198 },
        { name: "Seafood Hokkien Mee", count: 167 },
        { name: "Special Hokkien Mee", count: 145 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 6.00,
      dailyOrders: 160
    },
    {
      hawkerCentre: "Kampung Admiralty Hawker Centre",
      stall: "Kampung Spirit Co",
      popularItems: [
        { name: "Laksa", count: 298 },
        { name: "Mee Rebus", count: 187 },
        { name: "Satay (10 sticks)", count: 156 },
        { name: "Nasi Lemak", count: 134 },
        { name: "Rojak", count: 112 }
      ],
      peakHours: [11, 12, 18, 19],
      avgOrderValue: 6.80,
      dailyOrders: 150
    },
    {
      hawkerCentre: "Kampung Admiralty Hawker Centre",
      stall: "Muslim Food Stall",
      popularItems: [
        { name: "Nasi Briyani", count: 267 },
        { name: "Murtabak", count: 223 },
        { name: "Roti Prata", count: 198 },
        { name: "Nasi Padang", count: 176 },
        { name: "Ayam Penyet", count: 154 }
      ],
      peakHours: [12, 13, 18, 19, 20],
      avgOrderValue: 7.00,
      dailyOrders: 145
    },
    {
      hawkerCentre: "Kampung Admiralty Hawker Centre",
      stall: "Nasi Lemak Corner",
      popularItems: [
        { name: "Nasi Lemak with Chicken", count: 298 },
        { name: "Nasi Lemak with Fish", count: 245 },
        { name: "Nasi Lemak with Rendang", count: 198 },
        { name: "Nasi Lemak with Egg", count: 167 },
        { name: "Special Nasi Lemak", count: 134 }
      ],
      peakHours: [7, 8, 12, 13],
      avgOrderValue: 4.50,
      dailyOrders: 170
    },
    {
      hawkerCentre: "Kampung Admiralty Hawker Centre",
      stall: "Western Delights",
      popularItems: [
        { name: "Chicken Chop", count: 256 },
        { name: "Fish & Chips", count: 223 },
        { name: "Pork Chop", count: 198 },
        { name: "Grilled Chicken", count: 176 },
        { name: "Mixed Grill", count: 145 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 8.50,
      dailyOrders: 135
    },

    // Chomp Chomp Food Centre (8 stalls)
    {
      hawkerCentre: "Chomp Chomp Food Centre",
      stall: "Aloysius BBQ Chicken Wings",
      popularItems: [
        { name: "BBQ Chicken Wings (6pcs)", count: 312 },
        { name: "BBQ Chicken Wings (12pcs)", count: 287 },
        { name: "Satay Chicken (10 sticks)", count: 234 },
        { name: "BBQ Chicken Mid-Wings", count: 198 },
        { name: "Satay Pork (10 sticks)", count: 176 }
      ],
      peakHours: [18, 19, 20, 21],
      avgOrderValue: 12.50,
      dailyOrders: 220
    },
    {
      hawkerCentre: "Chomp Chomp Food Centre",
      stall: "BBQ Sambal Stingray",
      popularItems: [
        { name: "BBQ Stingray", count: 289 },
        { name: "BBQ Chicken Wings", count: 256 },
        { name: "BBQ Squid", count: 203 },
        { name: "Sambal Kangkong", count: 187 },
        { name: "Satay", count: 165 }
      ],
      peakHours: [18, 19, 20, 21],
      avgOrderValue: 8.50,
      dailyOrders: 140
    },
    {
      hawkerCentre: "Chomp Chomp Food Centre",
      stall: "Chomp Chomp Satay",
      popularItems: [
        { name: "Chicken Satay (10 sticks)", count: 356 },
        { name: "Pork Satay (10 sticks)", count: 312 },
        { name: "Mutton Satay (10 sticks)", count: 278 },
        { name: "Chicken Satay (20 sticks)", count: 234 },
        { name: "Mixed Satay (20 sticks)", count: 198 }
      ],
      peakHours: [18, 19, 20, 21],
      avgOrderValue: 11.00,
      dailyOrders: 240
    },
    {
      hawkerCentre: "Chomp Chomp Food Centre",
      stall: "Fried Carrot Cake",
      popularItems: [
        { name: "White Carrot Cake", count: 245 },
        { name: "Black Carrot Cake", count: 223 },
        { name: "Mixed Carrot Cake", count: 189 },
        { name: "Crispy Carrot Cake", count: 167 },
        { name: "Special Carrot Cake", count: 143 }
      ],
      peakHours: [18, 19, 20, 21],
      avgOrderValue: 5.00,
      dailyOrders: 155
    },
    {
      hawkerCentre: "Chomp Chomp Food Centre",
      stall: "Grilled Seafood",
      popularItems: [
        { name: "Grilled Prawns", count: 278 },
        { name: "Grilled Fish", count: 245 },
        { name: "Grilled Squid", count: 212 },
        { name: "Grilled Scallops", count: 189 },
        { name: "Mixed Seafood Platter", count: 167 }
      ],
      peakHours: [18, 19, 20, 21],
      avgOrderValue: 15.00,
      dailyOrders: 145
    },
    {
      hawkerCentre: "Chomp Chomp Food Centre",
      stall: "Hoover Rojak",
      popularItems: [
        { name: "Traditional Rojak", count: 267 },
        { name: "Fruit Rojak", count: 234 },
        { name: "Vegetable Rojak", count: 198 },
        { name: "Seafood Rojak", count: 176 },
        { name: "Special Rojak Mix", count: 154 }
      ],
      peakHours: [18, 19, 20, 21],
      avgOrderValue: 5.50,
      dailyOrders: 165
    },
    {
      hawkerCentre: "Chomp Chomp Food Centre",
      stall: "Soon Heng Pork Ribs",
      popularItems: [
        { name: "Pork Ribs Soup", count: 256 },
        { name: "BBQ Pork Ribs", count: 223 },
        { name: "Braised Pork Ribs", count: 198 },
        { name: "Steamed Pork Ribs", count: 176 },
        { name: "Special Ribs Set", count: 154 }
      ],
      peakHours: [18, 19, 20],
      avgOrderValue: 8.00,
      dailyOrders: 140
    },
    {
      hawkerCentre: "Chomp Chomp Food Centre",
      stall: "Traditional Oyster Omelette",
      popularItems: [
        { name: "Oyster Omelette", count: 289 },
        { name: "Prawn Omelette", count: 234 },
        { name: "Mixed Seafood Omelette", count: 198 },
        { name: "Egg Omelette", count: 167 },
        { name: "Special Omelette", count: 145 }
      ],
      peakHours: [18, 19, 20, 21],
      avgOrderValue: 6.50,
      dailyOrders: 160
    },

    // Tekka Centre (8 stalls)
    {
      hawkerCentre: "Tekka Centre",
      stall: "Allauddin's Briyani",
      popularItems: [
        { name: "Chicken Briyani", count: 345 },
        { name: "Mutton Briyani", count: 298 },
        { name: "Fish Briyani", count: 187 },
        { name: "Prawn Briyani", count: 156 },
        { name: "Vegetable Briyani", count: 123 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 8.50,
      dailyOrders: 190
    },
    {
      hawkerCentre: "Tekka Centre",
      stall: "Bismillah Biryani",
      popularItems: [
        { name: "Chicken Briyani Set", count: 298 },
        { name: "Mutton Briyani Set", count: 267 },
        { name: "Ayam Penyet", count: 234 },
        { name: "Murtabak Chicken", count: 189 },
        { name: "Murtabak Mutton", count: 156 }
      ],
      peakHours: [12, 13, 19, 20],
      avgOrderValue: 9.00,
      dailyOrders: 185
    },
    {
      hawkerCentre: "Tekka Centre",
      stall: "Deen's Murtabak",
      popularItems: [
        { name: "Chicken Murtabak", count: 256 },
        { name: "Mutton Murtabak", count: 198 },
        { name: "Sardine Murtabak", count: 167 },
        { name: "Cheese Murtabak", count: 134 },
        { name: "Special Murtabak", count: 112 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 5.50,
      dailyOrders: 135
    },
    {
      hawkerCentre: "Tekka Centre",
      stall: "Indian Muslim Food",
      popularItems: [
        { name: "Roti Prata Plain", count: 312 },
        { name: "Roti Prata Egg", count: 278 },
        { name: "Roti Prata Cheese", count: 234 },
        { name: "Roti Prata Banana", count: 198 },
        { name: "Thosai", count: 176 }
      ],
      peakHours: [7, 8, 12, 13, 18],
      avgOrderValue: 4.00,
      dailyOrders: 195
    },
    {
      hawkerCentre: "Tekka Centre",
      stall: "Tekka Fish Soup",
      popularItems: [
        { name: "Sliced Fish Soup", count: 267 },
        { name: "Fish Head Soup", count: 223 },
        { name: "Fried Fish Soup", count: 189 },
        { name: "Mixed Fish Soup", count: 167 },
        { name: "Fish Bee Hoon", count: 145 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 6.00,
      dailyOrders: 145
    },
    {
      hawkerCentre: "Tekka Centre",
      stall: "Thasevi Food",
      popularItems: [
        { name: "Fish Head Curry", count: 256 },
        { name: "Chicken Curry", count: 223 },
        { name: "Mutton Curry", count: 198 },
        { name: "Vegetable Curry", count: 176 },
        { name: "Mixed Curry Rice", count: 154 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 7.50,
      dailyOrders: 155
    },
    {
      hawkerCentre: "Tekka Centre",
      stall: "Victory Restaurant",
      popularItems: [
        { name: "Chicken Briyani", count: 234 },
        { name: "Nasi Padang", count: 198 },
        { name: "Fried Rice", count: 176 },
        { name: "Mee Goreng", count: 154 },
        { name: "Roti John", count: 132 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 6.50,
      dailyOrders: 140
    },
    {
      hawkerCentre: "Tekka Centre",
      stall: "Zam Zam Restaurant",
      popularItems: [
        { name: "Murtabak Mutton", count: 298 },
        { name: "Murtabak Chicken", count: 267 },
        { name: "Roti Prata Set", count: 234 },
        { name: "Briyani Chicken", count: 198 },
        { name: "Maggi Goreng", count: 176 }
      ],
      peakHours: [12, 13, 18, 19, 20],
      avgOrderValue: 8.00,
      dailyOrders: 175
    },

    // Old Airport Road Food Centre (8 stalls)
    {
      hawkerCentre: "Old Airport Road Food Centre",
      stall: "Fried Oyster Omelette",
      popularItems: [
        { name: "Oyster Omelette", count: 278 },
        { name: "Prawn Omelette", count: 234 },
        { name: "Mixed Omelette", count: 198 },
        { name: "Egg Omelette", count: 167 },
        { name: "Deluxe Omelette", count: 145 }
      ],
      peakHours: [11, 12, 18, 19],
      avgOrderValue: 6.00,
      dailyOrders: 155
    },
    {
      hawkerCentre: "Old Airport Road Food Centre",
      stall: "Fried Prawn Noodles",
      popularItems: [
        { name: "Prawn Mee Dry", count: 267 },
        { name: "Prawn Mee Soup", count: 234 },
        { name: "Hokkien Prawn Mee", count: 198 },
        { name: "Big Prawn Noodles", count: 176 },
        { name: "Special Prawn Mee", count: 154 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 7.00,
      dailyOrders: 150
    },
    {
      hawkerCentre: "Old Airport Road Food Centre",
      stall: "Haig Road Putu Piring",
      popularItems: [
        { name: "Putu Piring (5pcs)", count: 234 },
        { name: "Putu Piring (10pcs)", count: 189 },
        { name: "Putu Ayu", count: 167 },
        { name: "Ondeh Ondeh", count: 145 },
        { name: "Kueh Lapis", count: 123 }
      ],
      peakHours: [14, 15, 16, 20],
      avgOrderValue: 4.50,
      dailyOrders: 125
    },
    {
      hawkerCentre: "Old Airport Road Food Centre",
      stall: "Hwa Kee Noodles",
      popularItems: [
        { name: "Char Kway Teow", count: 267 },
        { name: "Hokkien Mee", count: 234 },
        { name: "Fried Carrot Cake", count: 198 },
        { name: "Oyster Omelette", count: 176 },
        { name: "Satay Bee Hoon", count: 145 }
      ],
      peakHours: [11, 12, 13, 18],
      avgOrderValue: 5.20,
      dailyOrders: 165
    },
    {
      hawkerCentre: "Old Airport Road Food Centre",
      stall: "Nam Sing Hokkien Fried Mee",
      popularItems: [
        { name: "Hokkien Fried Mee", count: 289 },
        { name: "Prawn Hokkien Mee", count: 213 },
        { name: "Squid Hokkien Mee", count: 187 },
        { name: "Mixed Seafood Mee", count: 156 },
        { name: "Special Hokkien Mee", count: 134 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 6.00,
      dailyOrders: 155
    },
    {
      hawkerCentre: "Old Airport Road Food Centre",
      stall: "Old Airport Road Wanton Mee",
      popularItems: [
        { name: "Dry Wanton Mee", count: 298 },
        { name: "Soup Wanton Mee", count: 256 },
        { name: "Dumpling Noodles", count: 223 },
        { name: "Char Siew Wanton Mee", count: 189 },
        { name: "Special Wanton Mee", count: 167 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 5.00,
      dailyOrders: 175
    },
    {
      hawkerCentre: "Old Airport Road Food Centre",
      stall: "Roast Paradise",
      popularItems: [
        { name: "Roasted Duck Rice", count: 278 },
        { name: "Char Siew Rice", count: 245 },
        { name: "Roasted Pork Rice", count: 212 },
        { name: "Soy Chicken Rice", count: 189 },
        { name: "Mixed Meat Rice", count: 167 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 6.50,
      dailyOrders: 165
    },
    {
      hawkerCentre: "Old Airport Road Food Centre",
      stall: "Soon Lee Hong Kong Roasted",
      popularItems: [
        { name: "Roasted Chicken Rice", count: 256 },
        { name: "Char Siew Rice", count: 223 },
        { name: "Roasted Pork Rice", count: 198 },
        { name: "Duck Rice", count: 176 },
        { name: "Mixed Roast Rice", count: 154 }
      ],
      peakHours: [12, 13, 18, 19],
      avgOrderValue: 6.00,
      dailyOrders: 160
    }
  ],

  // ============================================================================
  // SATISFACTION DATA - ALL 48 STALLS
  // ============================================================================
  satisfaction: [] // Will be generated below
};

// Generate satisfaction data for all stalls programmatically
const satisfactionTemplates = {
  excellent: {
    feedbackCount: 8,
    complaintsCount: 2,
    avgRating: 4.8,
    feedbackComments: [
      { suffix: "Best in Singapore!", rating: 5 },
      { suffix: "Always fresh and delicious", rating: 5 },
      { suffix: "Excellent quality", rating: 5 },
      { suffix: "Very authentic taste", rating: 5 },
      { suffix: "Generous portions", rating: 5 },
      { suffix: "Friendly service", rating: 4 },
      { suffix: "Great value for money", rating: 5 },
      { suffix: "Consistently good", rating: 4 }
    ],
    complaintComments: [
      { suffix: "Had to wait long", rating: 3 },
      { suffix: "Portion smaller today", rating: 3 }
    ]
  },
  good: {
    feedbackCount: 6,
    complaintsCount: 3,
    avgRating: 4.5,
    feedbackComments: [
      { suffix: "Very tasty!", rating: 5 },
      { suffix: "Good quality food", rating: 4 },
      { suffix: "Reasonable prices", rating: 4 },
      { suffix: "Clean and hygienic", rating: 5 },
      { suffix: "Nice flavors", rating: 4 },
      { suffix: "Would recommend", rating: 5 }
    ],
    complaintComments: [
      { suffix: "Too salty", rating: 2 },
      { suffix: "Service was slow", rating: 3 },
      { suffix: "Not as good as before", rating: 3 }
    ]
  },
  average: {
    feedbackCount: 5,
    complaintsCount: 3,
    avgRating: 4.2,
    feedbackComments: [
      { suffix: "Pretty good", rating: 4 },
      { suffix: "Decent food", rating: 4 },
      { suffix: "Satisfying meal", rating: 4 },
      { suffix: "Worth trying", rating: 4 },
      { suffix: "Not bad", rating: 3 }
    ],
    complaintComments: [
      { suffix: "Average quality", rating: 3 },
      { suffix: "Could be better", rating: 3 },
      { suffix: "Overpriced", rating: 2 }
    ]
  }
};

// Helper function to generate satisfaction for a stall
function generateSatisfactionData(hawkerCentre, stall, template) {
  const names = [
    "John Tan", "Sarah Lim", "Mike Chen", "Lisa Wong", "David Ng", 
    "Emily Koh", "Ryan Goh", "Jenny Lee", "Kevin Lim", "Grace Tan",
    "Ahmad Ali", "Priya Sharma", "Kumar Singh", "Siti Rahman",
    "Hassan Ibrahim", "Fatimah Begum", "Raj Kumar", "Aminah Ali"
  ];
  
  const feedback = [];
  const complaints = [];
  
  let dateCounter = 29;
  
  // Generate feedback
  for (let i = 0; i < template.feedbackCount; i++) {
    const comment = template.feedbackComments[i];
    feedback.push({
      name: names[i % names.length],
      comment: `${stall} - ${comment.suffix}`,
      rating: comment.rating,
      date: `2026-01-${dateCounter--}`
    });
  }
  
  // Generate complaints
  for (let i = 0; i < template.complaintsCount; i++) {
    const comment = template.complaintComments[i];
    complaints.push({
      name: names[(template.feedbackCount + i) % names.length],
      comment: comment.suffix,
      rating: comment.rating,
      date: `2026-01-${dateCounter--}`
    });
  }
  
  return {
    hawkerCentre,
    stall,
    feedback,
    complaints,
    avgRating: template.avgRating,
    totalReviews: feedback.length + complaints.length + Math.floor(Math.random() * 100) + 50
  };
}

// Generate satisfaction for all 48 stalls
const allStalls = [
  // Maxwell Food Centre
  { centre: "Maxwell Food Centre", stall: "Tian Tian Chicken Rice", quality: "excellent" },
  { centre: "Maxwell Food Centre", stall: "Zhen Zhen Porridge", quality: "good" },
  { centre: "Maxwell Food Centre", stall: "Rojak Popiah & Cockle", quality: "good" },
  { centre: "Maxwell Food Centre", stall: "China Street Fritters", quality: "average" },
  { centre: "Maxwell Food Centre", stall: "Fuzhou Oyster Cake", quality: "excellent" },
  { centre: "Maxwell Food Centre", stall: "Jin Hua Fish Head Bee Hoon", quality: "good" },
  { centre: "Maxwell Food Centre", stall: "Maxwell Fuzhou Oyster Cake", quality: "good" },
  { centre: "Maxwell Food Centre", stall: "Liao Fan Hong Kong Soya Sauce", quality: "excellent" },
  
  // Marsiling Mall
  { centre: "Marsiling Mall Hawker Centre", stall: "Ah Seng Durian", quality: "excellent" },
  { centre: "Marsiling Mall Hawker Centre", stall: "Chang Ji Noodles", quality: "good" },
  { centre: "Marsiling Mall Hawker Centre", stall: "Delicious Laksa", quality: "good" },
  { centre: "Marsiling Mall Hawker Centre", stall: "Eastern Mee Pok", quality: "average" },
  { centre: "Marsiling Mall Hawker Centre", stall: "Fong's Roasted Delight", quality: "excellent" },
  { centre: "Marsiling Mall Hawker Centre", stall: "Good Taste Chicken Rice", quality: "good" },
  { centre: "Marsiling Mall Hawker Centre", stall: "Hainanese Curry Rice", quality: "good" },
  { centre: "Marsiling Mall Hawker Centre", stall: "Marsiling Satay", quality: "excellent" },
  
  // Kampung Admiralty
  { centre: "Kampung Admiralty Hawker Centre", stall: "Admiralty Fish Soup", quality: "excellent" },
  { centre: "Kampung Admiralty Hawker Centre", stall: "Big Prawn Noodle", quality: "good" },
  { centre: "Kampung Admiralty Hawker Centre", stall: "Chicken Rice Stall", quality: "excellent" },
  { centre: "Kampung Admiralty Hawker Centre", stall: "Delicious Fried Hokkien Mee", quality: "good" },
  { centre: "Kampung Admiralty Hawker Centre", stall: "Kampung Spirit Co", quality: "excellent" },
  { centre: "Kampung Admiralty Hawker Centre", stall: "Muslim Food Stall", quality: "excellent" },
  { centre: "Kampung Admiralty Hawker Centre", stall: "Nasi Lemak Corner", quality: "good" },
  { centre: "Kampung Admiralty Hawker Centre", stall: "Western Delights", quality: "average" },
  
  // Chomp Chomp
  { centre: "Chomp Chomp Food Centre", stall: "Aloysius BBQ Chicken Wings", quality: "excellent" },
  { centre: "Chomp Chomp Food Centre", stall: "BBQ Sambal Stingray", quality: "excellent" },
  { centre: "Chomp Chomp Food Centre", stall: "Chomp Chomp Satay", quality: "excellent" },
  { centre: "Chomp Chomp Food Centre", stall: "Fried Carrot Cake", quality: "good" },
  { centre: "Chomp Chomp Food Centre", stall: "Grilled Seafood", quality: "excellent" },
  { centre: "Chomp Chomp Food Centre", stall: "Hoover Rojak", quality: "excellent" },
  { centre: "Chomp Chomp Food Centre", stall: "Soon Heng Pork Ribs", quality: "good" },
  { centre: "Chomp Chomp Food Centre", stall: "Traditional Oyster Omelette", quality: "good" },
  
  // Tekka Centre
  { centre: "Tekka Centre", stall: "Allauddin's Briyani", quality: "excellent" },
  { centre: "Tekka Centre", stall: "Bismillah Biryani", quality: "excellent" },
  { centre: "Tekka Centre", stall: "Deen's Murtabak", quality: "good" },
  { centre: "Tekka Centre", stall: "Indian Muslim Food", quality: "excellent" },
  { centre: "Tekka Centre", stall: "Tekka Fish Soup", quality: "good" },
  { centre: "Tekka Centre", stall: "Thasevi Food", quality: "excellent" },
  { centre: "Tekka Centre", stall: "Victory Restaurant", quality: "average" },
  { centre: "Tekka Centre", stall: "Zam Zam Restaurant", quality: "excellent" },
  
  // Old Airport Road
  { centre: "Old Airport Road Food Centre", stall: "Fried Oyster Omelette", quality: "excellent" },
  { centre: "Old Airport Road Food Centre", stall: "Fried Prawn Noodles", quality: "good" },
  { centre: "Old Airport Road Food Centre", stall: "Haig Road Putu Piring", quality: "excellent" },
  { centre: "Old Airport Road Food Centre", stall: "Hwa Kee Noodles", quality: "average" },
  { centre: "Old Airport Road Food Centre", stall: "Nam Sing Hokkien Fried Mee", quality: "good" },
  { centre: "Old Airport Road Food Centre", stall: "Old Airport Road Wanton Mee", quality: "excellent" },
  { centre: "Old Airport Road Food Centre", stall: "Roast Paradise", quality: "excellent" },
  { centre: "Old Airport Road Food Centre", stall: "Soon Lee Hong Kong Roasted", quality: "good" }
];

// Generate all satisfaction data
allStalls.forEach(item => {
  const template = satisfactionTemplates[item.quality];
  ALL_48_STALLS_DATA.satisfaction.push(
    generateSatisfactionData(item.centre, item.stall, template)
  );
});

// ================================================================================
// Function to Add ALL Data to Firebase
// ================================================================================

async function addAllStallsData() {
  if (typeof db === 'undefined') {
    console.error('Firebase not initialized!');
    return;
  }

  if (!confirm('This will add sales and satisfaction data for all 48 stalls. Continue?')) {
    return;
  }

  try {
    console.log('Starting to add complete data for all 48 stalls...');
    
    let salesCount = 0;
    let satisfactionCount = 0;

    // Add sales data
    console.log('\n=== ADDING SALES DATA ===');
    for (const sale of ALL_48_STALLS_DATA.sales) {
      await db.collection('analytics_sales').add(sale);
      salesCount++;
      console.log(`✓ ${salesCount}/48 - Sales: ${sale.stall}`);
    }

    // Add satisfaction data
    console.log('\n=== ADDING SATISFACTION DATA ===');
    for (const sat of ALL_48_STALLS_DATA.satisfaction) {
      await db.collection('analytics_satisfaction').add(sat);
      satisfactionCount++;
      console.log(`✓ ${satisfactionCount}/48 - Satisfaction: ${sat.stall}`);
    }

    console.log('\n=== SUCCESS! ===');
    console.log(`Sales data: ${salesCount} stalls`);
    console.log(`Satisfaction data: ${satisfactionCount} stalls`);
    console.log(`Total: ${salesCount + satisfactionCount} records added`);
    
    alert(`Success! Added complete data for all 48 stalls!\n\nSales: ${salesCount}\nSatisfaction: ${satisfactionCount}`);

  } catch (error) {
    console.error('Error adding data:', error);
    alert('Error adding data. Check console for details.');
  }
}

// ================================================================================
// Function to Clear Old Incomplete Data
// ================================================================================

async function clearOldSalesAndSatisfaction() {
  if (!confirm('Delete all existing sales and satisfaction data? This cannot be undone!')) {
    return;
  }

  try {
    console.log('Deleting old sales data...');
    const salesSnapshot = await db.collection('analytics_sales').get();
    const salesBatch = db.batch();
    salesSnapshot.docs.forEach(doc => salesBatch.delete(doc.ref));
    await salesBatch.commit();
    console.log(`✓ Deleted ${salesSnapshot.docs.length} sales records`);
    
    console.log('Deleting old satisfaction data...');
    const satSnapshot = await db.collection('analytics_satisfaction').get();
    const satBatch = db.batch();
    satSnapshot.docs.forEach(doc => satBatch.delete(doc.ref));
    await satBatch.commit();
    console.log(`✓ Deleted ${satSnapshot.docs.length} satisfaction records`);
    
    alert('Old data deleted! Now run addAllStallsData() to add complete data.');
    
  } catch (error) {
    console.error('Error clearing data:', error);
  }
}

// ================================================================================
// Expose Functions
// ================================================================================

window.ALL_48_STALLS_DATA = ALL_48_STALLS_DATA;
window.addAllStallsData = addAllStallsData;
window.clearOldSalesAndSatisfaction = clearOldSalesAndSatisfaction;

console.log('Complete 48 Stalls Data Module Loaded');
console.log('Generated data for all 48 stalls (6 centres × 8 stalls)');
console.log('Run addAllStallsData() to populate Firebase with complete data');
console.log('Optional: Run clearOldSalesAndSatisfaction() first to delete old partial data');
