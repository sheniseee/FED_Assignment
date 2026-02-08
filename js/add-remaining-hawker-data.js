// ================================================================================
// ADDITIONAL ANALYTICS DATA FOR REMAINING HAWKER CENTRES
// ================================================================================
// This adds data for: Chomp Chomp, Tekka Centre, Old Airport Road
// Run this in browser console: addRemainingHawkerData()
// ================================================================================

const ADDITIONAL_ANALYTICS_DATA = {
  
  // Sales Analytics Data
  sales: [
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
      hawkerCentre: "Old Airport Road Food Centre",
      stall: "Nam Sing Hokkien Fried Mee",
      popularItems: [
        { name: "Hokkien Fried Mee", count: 289 },
        { name: "Char Kway Teow", count: 256 },
        { name: "Fried Oyster Omelette", count: 234 },
        { name: "Carrot Cake (White)", count: 198 },
        { name: "Carrot Cake (Black)", count: 176 }
      ],
      peakHours: [11, 12, 18, 19],
      avgOrderValue: 6.20,
      dailyOrders: 175
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
    }
  ],

  // Customer Satisfaction Data
  satisfaction: [
    {
      hawkerCentre: "Chomp Chomp Food Centre",
      stall: "Aloysius BBQ Chicken Wings",
      feedback: [
        { name: "Alex Tan", comment: "Best BBQ wings in Singapore!", rating: 5, date: "2026-02-02" },
        { name: "Sarah Koh", comment: "Crispy and flavorful", rating: 5, date: "2026-02-01" },
        { name: "Michael Lee", comment: "Always consistent quality", rating: 5, date: "2026-01-31" },
        { name: "Jessica Wong", comment: "Love the sauce!", rating: 4, date: "2026-01-30" },
        { name: "David Chen", comment: "Worth the queue", rating: 5, date: "2026-01-29" },
        { name: "Emily Goh", comment: "Perfectly charred", rating: 5, date: "2026-01-28" },
        { name: "Ryan Lim", comment: "Not too greasy", rating: 4, date: "2026-01-27" }
      ],
      complaints: [
        { name: "Karen Ng", comment: "Wings were too small today", rating: 2, date: "2026-01-26" },
        { name: "Bob Lee", comment: "Waited 45 minutes", rating: 3, date: "2026-01-24" }
      ],
      avgRating: 4.7,
      totalReviews: 412
    },
    {
      hawkerCentre: "Chomp Chomp Food Centre",
      stall: "Chomp Chomp Satay",
      feedback: [
        { name: "Ahmad Ali", comment: "Authentic satay taste", rating: 5, date: "2026-02-02" },
        { name: "Linda Tan", comment: "Tender and juicy meat", rating: 5, date: "2026-02-01" },
        { name: "Jason Koh", comment: "Peanut sauce is perfect", rating: 5, date: "2026-01-31" },
        { name: "Michelle Lim", comment: "Best satay I've had", rating: 5, date: "2026-01-30" },
        { name: "Steven Wong", comment: "Great char flavor", rating: 4, date: "2026-01-29" },
        { name: "Rachel Goh", comment: "Generous portions", rating: 5, date: "2026-01-28" }
      ],
      complaints: [
        { name: "Peter Tan", comment: "Some sticks were burnt", rating: 2, date: "2026-01-25" },
        { name: "Mary Chen", comment: "Peanut sauce too sweet", rating: 3, date: "2026-01-23" },
        { name: "John Lim", comment: "Long waiting time", rating: 3, date: "2026-01-22" }
      ],
      avgRating: 4.6,
      totalReviews: 389
    },
    {
      hawkerCentre: "Tekka Centre",
      stall: "Allauddin's Briyani",
      feedback: [
        { name: "Ravi Kumar", comment: "Authentic Indian briyani", rating: 5, date: "2026-02-02" },
        { name: "Siti Rahman", comment: "Very fragrant rice", rating: 5, date: "2026-02-01" },
        { name: "Kumar Singh", comment: "Tender mutton", rating: 5, date: "2026-01-31" },
        { name: "Lisa Tan", comment: "Love the spices", rating: 4, date: "2026-01-30" },
        { name: "David Wong", comment: "Generous portion", rating: 5, date: "2026-01-29" },
        { name: "Priya Nair", comment: "Best briyani in Tekka", rating: 5, date: "2026-01-28" },
        { name: "Hassan Abdullah", comment: "Reminds me of home", rating: 5, date: "2026-01-27" },
        { name: "Jennifer Koh", comment: "Great value", rating: 4, date: "2026-01-26" }
      ],
      complaints: [
        { name: "Karen Lee", comment: "Too spicy for me", rating: 2, date: "2026-01-24" },
        { name: "Bob Tan", comment: "Rice was dry", rating: 3, date: "2026-01-22" }
      ],
      avgRating: 4.8,
      totalReviews: 456
    },
    {
      hawkerCentre: "Tekka Centre",
      stall: "Bismillah Biryani",
      feedback: [
        { name: "Fatimah Ali", comment: "Excellent chicken briyani", rating: 5, date: "2026-02-02" },
        { name: "Rajesh Kumar", comment: "Murtabak is amazing!", rating: 5, date: "2026-02-01" },
        { name: "Sarah Ibrahim", comment: "Very authentic taste", rating: 5, date: "2026-01-31" },
        { name: "Ahmed Hassan", comment: "Love the ayam penyet", rating: 5, date: "2026-01-30" },
        { name: "Michelle Tan", comment: "Crispy and flavorful", rating: 4, date: "2026-01-29" },
        { name: "Kumar Patel", comment: "Best murtabak ever", rating: 5, date: "2026-01-28" }
      ],
      complaints: [
        { name: "Peter Wong", comment: "Portion smaller than before", rating: 3, date: "2026-01-25" },
        { name: "Linda Chen", comment: "Too oily", rating: 2, date: "2026-01-23" }
      ],
      avgRating: 4.7,
      totalReviews: 378
    },
    {
      hawkerCentre: "Old Airport Road Food Centre",
      stall: "Nam Sing Hokkien Fried Mee",
      feedback: [
        { name: "Kevin Lim", comment: "Best hokkien mee!", rating: 5, date: "2026-02-02" },
        { name: "Grace Tan", comment: "Perfect wok hei", rating: 5, date: "2026-02-01" },
        { name: "Ben Wong", comment: "Not too wet, just right", rating: 5, date: "2026-01-31" },
        { name: "Sharon Koh", comment: "Love the prawns", rating: 4, date: "2026-01-30" },
        { name: "Marcus Ng", comment: "Very flavorful", rating: 5, date: "2026-01-29" },
        { name: "Jennifer Lee", comment: "Generous ingredients", rating: 5, date: "2026-01-28" },
        { name: "Daniel Goh", comment: "Worth the wait", rating: 4, date: "2026-01-27" }
      ],
      complaints: [
        { name: "Helen Teo", comment: "Too much oil", rating: 2, date: "2026-01-24" },
        { name: "Roy Chen", comment: "Noodles were mushy", rating: 2, date: "2026-01-22" }
      ],
      avgRating: 4.6,
      totalReviews: 402
    },
    {
      hawkerCentre: "Marsiling Mall Hawker Centre",
      stall: "Chang Ji Noodles",
      feedback: [
        { name: "Alice Tan", comment: "Fresh and tasty noodles", rating: 5, date: "2026-02-02" },
        { name: "Brian Lim", comment: "Love the wanton", rating: 5, date: "2026-02-01" },
        { name: "Catherine Ng", comment: "Very affordable", rating: 4, date: "2026-01-31" },
        { name: "Dennis Wong", comment: "Quick service", rating: 4, date: "2026-01-30" },
        { name: "Evelyn Koh", comment: "Soup is flavorful", rating: 5, date: "2026-01-29" },
        { name: "Frank Chen", comment: "Consistent quality", rating: 5, date: "2026-01-28" }
      ],
      complaints: [
        { name: "Gary Teo", comment: "Noodles too soft", rating: 3, date: "2026-01-25" },
        { name: "Helen Lim", comment: "Not enough toppings", rating: 3, date: "2026-01-23" }
      ],
      avgRating: 4.5,
      totalReviews: 298
    }
  ],

  // Inspection/Hygiene History Data
  inspectionHistory: [
    {
      hawkerCentre: "Chomp Chomp Food Centre",
      stall: "Aloysius BBQ Chicken Wings",
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "B" },
        { year: 2025, grade: "B" }
      ],
      trends: [
        "Minor cleanliness issues",
        "Improved ventilation needed",
        "Good food handling practices"
      ],
      lastInspection: "2025-12-10",
      nextInspection: "2026-03-10"
    },
    {
      hawkerCentre: "Chomp Chomp Food Centre",
      stall: "Chomp Chomp Satay",
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: [
        "Excellent hygiene standards",
        "Proper grilling techniques",
        "Clean workspace maintained"
      ],
      lastInspection: "2025-11-25",
      nextInspection: "2026-02-25"
    },
    {
      hawkerCentre: "Tekka Centre",
      stall: "Allauddin's Briyani",
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: [
        "Exemplary food safety",
        "Proper temperature control",
        "Regular equipment maintenance"
      ],
      lastInspection: "2025-12-05",
      nextInspection: "2026-03-05"
    },
    {
      hawkerCentre: "Tekka Centre",
      stall: "Bismillah Biryani",
      grades: [
        { year: 2021, grade: "B" },
        { year: 2022, grade: "B" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: [
        "Significant improvement",
        "Better waste management",
        "Staff hygiene training completed"
      ],
      lastInspection: "2025-11-30",
      nextInspection: "2026-02-28"
    },
    {
      hawkerCentre: "Old Airport Road Food Centre",
      stall: "Nam Sing Hokkien Fried Mee",
      grades: [
        { year: 2021, grade: "B" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "B" },
        { year: 2025, grade: "B" }
      ],
      trends: [
        "Oil disposal issues",
        "Needs better ventilation",
        "Food storage adequate"
      ],
      lastInspection: "2025-12-08",
      nextInspection: "2026-03-08"
    },
    {
      hawkerCentre: "Marsiling Mall Hawker Centre",
      stall: "Chang Ji Noodles",
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: [
        "Consistently high standards",
        "Excellent cleanliness",
        "Good pest control"
      ],
      lastInspection: "2025-11-20",
      nextInspection: "2026-02-20"
    }
  ]
};

// ================================================================================
// Function to Add Remaining Hawker Data
// ================================================================================

async function addRemainingHawkerData() {
  if (typeof db === 'undefined') {
    console.error('Firebase not initialized. Make sure firebase-config.js is loaded.');
    return;
  }

  try {
    console.log('Starting to add remaining hawker centre data...');
    
    // Add sales data
    console.log('Adding sales data...');
    for (const sale of ADDITIONAL_ANALYTICS_DATA.sales) {
      await db.collection('analytics_sales').add(sale);
      console.log(`✓ Added sales data for ${sale.stall}`);
    }

    // Add satisfaction data
    console.log('Adding satisfaction data...');
    for (const sat of ADDITIONAL_ANALYTICS_DATA.satisfaction) {
      await db.collection('analytics_satisfaction').add(sat);
      console.log(`✓ Added satisfaction data for ${sat.stall}`);
    }

    // Add inspection history data
    console.log('Adding inspection history...');
    for (const hist of ADDITIONAL_ANALYTICS_DATA.inspectionHistory) {
      await db.collection('analytics_inspections').add(hist);
      console.log(`✓ Added inspection history for ${hist.stall}`);
    }

    console.log('✅ All remaining hawker centre data added successfully!');
    alert('Additional data for Chomp Chomp, Tekka Centre, Old Airport Road, and Marsiling added!');

  } catch (error) {
    console.error('Error adding data:', error);
    alert('Error adding data. Check console for details.');
  }
}

// ================================================================================
// Expose Function Globally
// ================================================================================

window.ADDITIONAL_ANALYTICS_DATA = ADDITIONAL_ANALYTICS_DATA;
window.addRemainingHawkerData = addRemainingHawkerData;

console.log('Additional Analytics Data Module Loaded');
console.log('Run addRemainingHawkerData() to add data for remaining hawker centres');
