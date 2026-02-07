// ================================================================================
// COMPLETE INSPECTION HISTORY FOR ALL 48 STALLS
// ================================================================================
// This adds inspection history for EVERY stall in hawker-data.js
// Run: addCompleteInspectionHistory()
// ================================================================================

const COMPLETE_INSPECTION_HISTORY = {
  
  // Maxwell Food Centre (8 stalls)
  "Maxwell Food Centre": {
    "Tian Tian Chicken Rice": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Excellent hygiene standards", "Proper food storage", "Clean environment"],
      lastInspection: "2025-11-20",
      nextInspection: "2026-02-20"
    },
    "Zhen Zhen Porridge": {
      grades: [
        { year: 2021, grade: "B" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Improved over time", "Good cleanliness", "Regular staff training"],
      lastInspection: "2025-12-10",
      nextInspection: "2026-03-10"
    },
    "Rojak Popiah & Cockle": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "B" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Consistent standards", "Good food handling", "Clean workspace"],
      lastInspection: "2025-11-15",
      nextInspection: "2026-02-15"
    },
    "China Street Fritters": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "B" },
        { year: 2025, grade: "B" }
      ],
      trends: ["Oil disposal issues", "Needs better ventilation", "Otherwise clean"],
      lastInspection: "2025-12-05",
      nextInspection: "2026-03-05"
    },
    "Fuzhou Oyster Cake": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Excellent seafood handling", "Proper storage", "Clean equipment"],
      lastInspection: "2025-11-28",
      nextInspection: "2026-02-28"
    },
    "Jin Hua Fish Head Bee Hoon": {
      grades: [
        { year: 2021, grade: "B" },
        { year: 2022, grade: "B" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Significant improvement", "Better organization", "Good hygiene"],
      lastInspection: "2025-12-01",
      nextInspection: "2026-03-01"
    },
    "Maxwell Fuzhou Oyster Cake": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "B" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Generally excellent", "Minor issues resolved", "Proper cleaning"],
      lastInspection: "2025-11-22",
      nextInspection: "2026-02-22"
    },
    "Liao Fan Hong Kong Soya Sauce": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Michelin standards maintained", "Excellent cleanliness", "Professional setup"],
      lastInspection: "2025-11-10",
      nextInspection: "2026-02-10"
    }
  },

  // Marsiling Mall Hawker Centre (8 stalls)
  "Marsiling Mall Hawker Centre": {
    "Ah Seng Durian": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Proper fruit handling", "Clean display area", "Good temperature control"],
      lastInspection: "2025-12-15",
      nextInspection: "2026-03-15"
    },
    "Chang Ji Noodles": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "B" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Consistently good", "Clean preparation area", "Proper storage"],
      lastInspection: "2025-12-08",
      nextInspection: "2026-03-08"
    },
    "Delicious Laksa": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "B" }
      ],
      trends: ["Needs minor improvements", "Good overall hygiene", "Clean cooking area"],
      lastInspection: "2025-12-12",
      nextInspection: "2026-03-12"
    },
    "Eastern Mee Pok": {
      grades: [
        { year: 2021, grade: "B" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Improved standards", "Good noodle storage", "Clean workspace"],
      lastInspection: "2025-11-25",
      nextInspection: "2026-02-25"
    },
    "Fong's Roasted Delight": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Excellent roasting hygiene", "Proper meat handling", "Clean equipment"],
      lastInspection: "2025-11-18",
      nextInspection: "2026-02-18"
    },
    "Good Taste Chicken Rice": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "B" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Recovered well", "Good food safety", "Clean preparation"],
      lastInspection: "2025-12-03",
      nextInspection: "2026-03-03"
    },
    "Hainanese Curry Rice": {
      grades: [
        { year: 2021, grade: "B" },
        { year: 2022, grade: "B" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Much improved", "Better organization", "Good standards now"],
      lastInspection: "2025-11-30",
      nextInspection: "2026-02-28"
    },
    "Marsiling Satay": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Excellent grilling hygiene", "Proper meat storage", "Clean setup"],
      lastInspection: "2025-12-20",
      nextInspection: "2026-03-20"
    }
  },

  // Kampung Admiralty Hawker Centre (8 stalls)
  "Kampung Admiralty Hawker Centre": {
    "Admiralty Fish Soup": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Excellent seafood handling", "Proper refrigeration", "Clean workspace"],
      lastInspection: "2025-11-12",
      nextInspection: "2026-02-12"
    },
    "Big Prawn Noodle": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "B" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Generally good standards", "Proper seafood handling", "Clean workspace"],
      lastInspection: "2025-11-25",
      nextInspection: "2026-02-25"
    },
    "Chicken Rice Stall": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Consistently excellent", "Good poultry handling", "Clean setup"],
      lastInspection: "2025-12-08",
      nextInspection: "2026-03-08"
    },
    "Delicious Fried Hokkien Mee": {
      grades: [
        { year: 2021, grade: "B" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Improved significantly", "Good wok hygiene", "Proper ventilation"],
      lastInspection: "2025-11-20",
      nextInspection: "2026-02-20"
    },
    "Kampung Spirit Co": {
      grades: [
        { year: 2021, grade: "B" },
        { year: 2022, grade: "B" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Improved cleanliness", "Better waste management", "Staff training completed"],
      lastInspection: "2025-12-01",
      nextInspection: "2026-03-01"
    },
    "Muslim Food Stall": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Excellent halal standards", "Proper meat handling", "Clean preparation"],
      lastInspection: "2025-11-15",
      nextInspection: "2026-02-15"
    },
    "Nasi Lemak Corner": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "B" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Minor issue resolved", "Good coconut milk handling", "Clean workspace"],
      lastInspection: "2025-12-10",
      nextInspection: "2026-03-10"
    },
    "Western Delights": {
      grades: [
        { year: 2021, grade: "B" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Improved grilling standards", "Good food safety", "Clean equipment"],
      lastInspection: "2025-11-28",
      nextInspection: "2026-02-28"
    }
  },

  // Chomp Chomp Food Centre (8 stalls)
  "Chomp Chomp Food Centre": {
    "Aloysius BBQ Chicken Wings": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "B" },
        { year: 2025, grade: "B" }
      ],
      trends: ["Minor cleanliness issues", "Improved ventilation needed", "Good food handling"],
      lastInspection: "2025-12-10",
      nextInspection: "2026-03-10"
    },
    "BBQ Sambal Stingray": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Excellent standards", "Proper BBQ setup", "Clean grilling area"],
      lastInspection: "2025-11-15",
      nextInspection: "2026-02-15"
    },
    "Chomp Chomp Satay": {
      grades: [
        { year: 2021, grade: "B" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Much improved", "Proper meat storage", "Good hygiene"],
      lastInspection: "2025-11-18",
      nextInspection: "2026-02-18"
    },
    "Fried Carrot Cake": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "B" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Recovered standards", "Good oil management", "Clean wok area"],
      lastInspection: "2025-12-05",
      nextInspection: "2026-03-05"
    },
    "Grilled Seafood": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Excellent seafood handling", "Proper storage", "Clean grilling station"],
      lastInspection: "2025-11-22",
      nextInspection: "2026-02-22"
    },
    "Hoover Rojak": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Excellent fruit handling", "Clean preparation", "Good sauce storage"],
      lastInspection: "2025-12-01",
      nextInspection: "2026-03-01"
    },
    "Soon Heng Pork Ribs": {
      grades: [
        { year: 2021, grade: "B" },
        { year: 2022, grade: "B" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Significant improvement", "Better meat handling", "Clean workspace"],
      lastInspection: "2025-11-28",
      nextInspection: "2026-02-28"
    },
    "Traditional Oyster Omelette": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "B" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Minor issue corrected", "Good seafood practices", "Clean equipment"],
      lastInspection: "2025-12-12",
      nextInspection: "2026-03-12"
    }
  },

  // Tekka Centre (8 stalls)
  "Tekka Centre": {
    "Allauddin's Briyani": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Exemplary food safety", "Proper temperature control", "Regular equipment maintenance"],
      lastInspection: "2025-12-05",
      nextInspection: "2026-03-05"
    },
    "Bismillah Biryani": {
      grades: [
        { year: 2021, grade: "B" },
        { year: 2022, grade: "B" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Significant improvement", "Better waste management", "Staff hygiene training"],
      lastInspection: "2025-11-30",
      nextInspection: "2026-02-28"
    },
    "Deen's Murtabak": {
      grades: [
        { year: 2021, grade: "B" },
        { year: 2022, grade: "B" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Improved significantly", "Better oil management", "Clean workspace"],
      lastInspection: "2025-11-28",
      nextInspection: "2026-02-28"
    },
    "Indian Muslim Food": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Consistently excellent", "Good spice storage", "Clean preparation"],
      lastInspection: "2025-12-08",
      nextInspection: "2026-03-08"
    },
    "Tekka Fish Soup": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "B" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Recovered well", "Proper fish handling", "Clean soup station"],
      lastInspection: "2025-11-20",
      nextInspection: "2026-02-20"
    },
    "Thasevi Food": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Excellent curry preparation", "Good vegetable handling", "Clean workspace"],
      lastInspection: "2025-12-15",
      nextInspection: "2026-03-15"
    },
    "Victory Restaurant": {
      grades: [
        { year: 2021, grade: "B" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Improved standards", "Good multi-dish handling", "Clean kitchen"],
      lastInspection: "2025-11-25",
      nextInspection: "2026-02-25"
    },
    "Zam Zam Restaurant": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Famous for cleanliness", "Excellent murtabak hygiene", "Proper meat storage"],
      lastInspection: "2025-12-01",
      nextInspection: "2026-03-01"
    }
  },

  // Old Airport Road Food Centre (8 stalls)
  "Old Airport Road Food Centre": {
    "Fried Oyster Omelette": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Excellent oyster handling", "Proper refrigeration", "Clean wok area"],
      lastInspection: "2025-11-18",
      nextInspection: "2026-02-18"
    },
    "Fried Prawn Noodles": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "B" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Minor issue resolved", "Good prawn handling", "Clean preparation"],
      lastInspection: "2025-12-03",
      nextInspection: "2026-03-03"
    },
    "Haig Road Putu Piring": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Excellent coconut handling", "Clean steaming equipment", "Good hygiene"],
      lastInspection: "2025-11-22",
      nextInspection: "2026-02-22"
    },
    "Hwa Kee Noodles": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "B" },
        { year: 2024, grade: "C" },
        { year: 2025, grade: "C" }
      ],
      trends: ["Poor food handling", "Pest control issues", "Improper waste disposal"],
      lastInspection: "2025-12-15",
      nextInspection: "2026-03-15"
    },
    "Nam Sing Hokkien Fried Mee": {
      grades: [
        { year: 2021, grade: "B" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "B" },
        { year: 2025, grade: "B" }
      ],
      trends: ["Oil disposal issues", "Needs better ventilation", "Food storage adequate"],
      lastInspection: "2025-12-08",
      nextInspection: "2026-03-08"
    },
    "Old Airport Road Wanton Mee": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Consistently excellent", "Good noodle handling", "Clean workspace"],
      lastInspection: "2025-11-25",
      nextInspection: "2026-02-25"
    },
    "Roast Paradise": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "A" }
      ],
      trends: ["Excellent roasting standards", "Proper meat storage", "Clean setup"],
      lastInspection: "2025-12-01",
      nextInspection: "2026-03-01"
    },
    "Soon Lee Hong Kong Roasted": {
      grades: [
        { year: 2021, grade: "A" },
        { year: 2022, grade: "A" },
        { year: 2023, grade: "A" },
        { year: 2024, grade: "A" },
        { year: 2025, grade: "B" }
      ],
      trends: ["Minor ventilation issue", "Generally good standards", "Clean workspace"],
      lastInspection: "2025-12-10",
      nextInspection: "2026-03-10"
    }
  }
};

// ================================================================================
// Function to Add ALL Inspection History to Firebase
// ================================================================================

async function addCompleteInspectionHistory() {
  if (typeof db === 'undefined') {
    console.error('Firebase not initialized!');
    return;
  }

  try {
    console.log('Adding complete inspection history for all 48 stalls...');
    let count = 0;

    for (const [hawkerCentre, stalls] of Object.entries(COMPLETE_INSPECTION_HISTORY)) {
      console.log(`\nProcessing ${hawkerCentre}...`);
      
      for (const [stallName, data] of Object.entries(stalls)) {
        const inspectionData = {
          hawkerCentre,
          stall: stallName,
          grades: data.grades,
          trends: data.trends,
          lastInspection: data.lastInspection,
          nextInspection: data.nextInspection
        };

        await db.collection('analytics_inspections').add(inspectionData);
        count++;
        console.log(`  ✓ Added: ${stallName}`);
      }
    }

    console.log(`\n✅ SUCCESS! Added inspection history for all ${count} stalls!`);
    alert(`Complete! Added inspection history for ${count} stalls across 6 hawker centres.`);

  } catch (error) {
    console.error('Error adding inspection history:', error);
    alert('Error adding data. Check console.');
  }
}

// ================================================================================
// Function to Check What Data Exists
// ================================================================================

async function checkInspectionData() {
  const snapshot = await db.collection('analytics_inspections').get();
  console.log(`Total inspection records: ${snapshot.docs.length}`);
  
  const byHawker = {};
  snapshot.docs.forEach(doc => {
    const data = doc.data();
    if (!byHawker[data.hawkerCentre]) {
      byHawker[data.hawkerCentre] = [];
    }
    byHawker[data.hawkerCentre].push(data.stall);
  });
  
  console.log('\nBreakdown by hawker centre:');
  for (const [centre, stalls] of Object.entries(byHawker)) {
    console.log(`${centre}: ${stalls.length} stalls`);
    stalls.forEach(s => console.log(`  - ${s}`));
  }
}

// ================================================================================
// Expose Functions
// ================================================================================

window.COMPLETE_INSPECTION_HISTORY = COMPLETE_INSPECTION_HISTORY;
window.addCompleteInspectionHistory = addCompleteInspectionHistory;
window.checkInspectionData = checkInspectionData;

console.log('Complete Inspection History Module Loaded');
console.log('Run addCompleteInspectionHistory() to add data for all 48 stalls');
console.log('Run checkInspectionData() to see what data exists');
