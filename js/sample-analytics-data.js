// ================================================================================
// Sample Analytics Data Generator for Digital Hawker
// ================================================================================

const SAMPLE_ANALYTICS_DATA = {
  
  // Sales Analytics Data
  sales: [
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
    }
  ],

  // Customer Satisfaction Data
  satisfaction: [
    {
      hawkerCentre: "Maxwell Food Centre",
      stall: "Tian Tian Chicken Rice",
      feedback: [
        { name: "John Tan", comment: "Best chicken rice in Singapore!", rating: 5, date: "2026-01-28" },
        { name: "Sarah Lim", comment: "Always fresh and tasty!", rating: 5, date: "2026-01-27" },
        { name: "Mike Chen", comment: "Quick service, good food", rating: 4, date: "2026-01-26" },
        { name: "Lisa Wong", comment: "Clean and well-maintained", rating: 5, date: "2026-01-25" },
        { name: "David Ng", comment: "Reasonable prices", rating: 4, date: "2026-01-24" },
        { name: "Emily Koh", comment: "Friendly staff", rating: 5, date: "2026-01-23" },
        { name: "Ryan Goh", comment: "Authentic Hainanese taste", rating: 5, date: "2026-01-22" },
        { name: "Jenny Lee", comment: "Worth the queue!", rating: 4, date: "2026-01-21" }
      ],
      complaints: [
        { name: "Karen Lee", comment: "Rice was too salty today", rating: 2, date: "2026-01-22" },
        { name: "Bob Tan", comment: "Waiting time was long", rating: 3, date: "2026-01-20" },
        { name: "Amy Chong", comment: "Chicken was dry", rating: 2, date: "2026-01-18" }
      ],
      avgRating: 4.6,
      totalReviews: 328
    },
    {
      hawkerCentre: "Kampung Admiralty Hawker Centre",
      stall: "Kampung Spirit Co",
      feedback: [
        { name: "Ahmad Ibrahim", comment: "Excellent laksa!", rating: 5, date: "2026-01-28" },
        { name: "Priya Sharma", comment: "Spicy and delicious", rating: 5, date: "2026-01-27" },
        { name: "James Loh", comment: "Generous portions", rating: 4, date: "2026-01-26" },
        { name: "Rachel Goh", comment: "Very authentic taste", rating: 5, date: "2026-01-25" },
        { name: "William Tan", comment: "Great value for money", rating: 4, date: "2026-01-24" },
        { name: "Melissa Koh", comment: "Love the coconut gravy!", rating: 5, date: "2026-01-23" },
        { name: "Daniel Ong", comment: "Best laksa in the north", rating: 5, date: "2026-01-22" }
      ],
      complaints: [
        { name: "Peter Ng", comment: "Soup was too spicy", rating: 2, date: "2026-01-21" },
        { name: "Mary Chen", comment: "Portion smaller than before", rating: 3, date: "2026-01-19" }
      ],
      avgRating: 4.7,
      totalReviews: 245
    },
    {
      hawkerCentre: "Old Airport Road Food Centre",
      stall: "Hwa Kee Noodles",
      feedback: [
        { name: "Kevin Lim", comment: "Char kway teow is perfect", rating: 5, date: "2026-01-28" },
        { name: "Grace Tan", comment: "Smoky wok hei!", rating: 5, date: "2026-01-27" },
        { name: "Ben Wong", comment: "Not too oily, just right", rating: 4, date: "2026-01-26" },
        { name: "Sharon Koh", comment: "Good portions", rating: 4, date: "2026-01-25" },
        { name: "Marcus Ng", comment: "Tasty and affordable", rating: 5, date: "2026-01-24" }
      ],
      complaints: [
        { name: "Helen Teo", comment: "Too much oil today", rating: 2, date: "2026-01-20" },
        { name: "Roy Chen", comment: "Noodles were soggy", rating: 2, date: "2026-01-18" },
        { name: "Linda Goh", comment: "Waited 30 minutes", rating: 3, date: "2026-01-17" }
      ],
      avgRating: 4.3,
      totalReviews: 189
    }
  ],

  // Inspection/Hygiene History Data
  inspectionHistory: [
    {
      hawkerCentre: "Old Airport Road Food Centre",
      stall: "Hwa Kee Noodles",
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "B" },
        { year: 2024, grade: "C" },
        { year: 2025, grade: "C" }
      ],
      trends: [
        "Poor food handling",
        "Pest control issues",
        "Improper waste disposal"
      ],
      lastInspection: "2025-12-15",
      nextInspection: "2026-03-15"
    },
    {
      hawkerCentre: "Maxwell Food Centre",
      stall: "Tian Tian Chicken Rice",
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: [
        "Excellent hygiene standards",
        "Proper food storage",
        "Clean environment"
      ],
      lastInspection: "2025-11-20",
      nextInspection: "2026-02-20"
    },
    {
      hawkerCentre: "Kampung Admiralty Hawker Centre",
      stall: "Kampung Spirit Co",
      grades: [
        { year: 2021, grade: "B" },
        { year: 2022, grade: "B" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: [
        "Improved cleanliness",
        "Better waste management",
        "Staff training completed"
      ],
      lastInspection: "2025-12-01",
      nextInspection: "2026-03-01"
    }
  ]
};

// ================================================================================
// Function to Populate Firebase with Sample Data
// ================================================================================

async function populateAnalyticsData() {
  if (typeof db === 'undefined') {
    console.error('Firebase not initialized. Make sure firebase-config.js is loaded.');
    return;
  }

  try {
    console.log('Starting to populate analytics data...');
    
    // Check if data already exists
    const existingCheck = await db.collection('analytics_sales').limit(1).get();
    if (!existingCheck.empty) {
      console.log('Analytics data already exists. Skipping...');
      return;
    }

    // Add sales data
    console.log('Adding sales data...');
    for (const sale of SAMPLE_ANALYTICS_DATA.sales) {
      await db.collection('analytics_sales').add(sale);
    }
    console.log(`✓ Added ${SAMPLE_ANALYTICS_DATA.sales.length} sales records`);

    // Add satisfaction data
    console.log('Adding satisfaction data...');
    for (const sat of SAMPLE_ANALYTICS_DATA.satisfaction) {
      await db.collection('analytics_satisfaction').add(sat);
    }
    console.log(`✓ Added ${SAMPLE_ANALYTICS_DATA.satisfaction.length} satisfaction records`);

    // Add inspection history data
    console.log('Adding inspection history...');
    for (const hist of SAMPLE_ANALYTICS_DATA.inspectionHistory) {
      await db.collection('analytics_inspections').add(hist);
    }
    console.log(`✓ Added ${SAMPLE_ANALYTICS_DATA.inspectionHistory.length} inspection records`);

    console.log('✓ All sample analytics data added successfully!');
    alert('Sample analytics data has been populated in Firebase!');

  } catch (error) {
    console.error('Error adding sample data:', error);
    alert('Error adding sample data. Check console for details.');
  }
}

// ================================================================================
// Helper Functions to Retrieve Data
// ================================================================================

/**
 * Get sales data for a specific stall
 */
async function getSalesData(hawkerCentre, stall = null) {
  let query = db.collection('analytics_sales')
    .where('hawkerCentre', '==', hawkerCentre);
  
  if (stall && stall !== 'All Stalls') {
    query = query.where('stall', '==', stall);
  }
  
  const snapshot = await query.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

/**
 * Get satisfaction data for a specific stall
 */
async function getSatisfactionData(hawkerCentre, stall = null) {
  let query = db.collection('analytics_satisfaction')
    .where('hawkerCentre', '==', hawkerCentre);
  
  if (stall && stall !== 'All Stalls') {
    query = query.where('stall', '==', stall);
  }
  
  const snapshot = await query.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

/**
 * Get inspection history for a specific stall
 */
async function getInspectionHistory(hawkerCentre, stall) {
  const snapshot = await db.collection('analytics_inspections')
    .where('hawkerCentre', '==', hawkerCentre)
    .where('stall', '==', stall)
    .get();
  
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// ================================================================================
// Expose Functions Globally
// ================================================================================

window.SAMPLE_ANALYTICS_DATA = SAMPLE_ANALYTICS_DATA;
window.populateAnalyticsData = populateAnalyticsData;
window.getSalesData = getSalesData;
window.getSatisfactionData = getSatisfactionData;
window.getInspectionHistory = getInspectionHistory;

console.log('Sample Analytics Data Module Loaded');
console.log('Run populateAnalyticsData() to add sample data to Firebase');
