// ================================================================================
// Hawker Centre and Stall Data for Digital Hawker
// ================================================================================

const HAWKER_CENTRES = {
  "Maxwell Food Centre": {
    address: "1 Kadayanallur St, Singapore 069184",
    contact: "6225 5632",
    stalls: [
      { id: "MFC-001", name: "Tian Tian Chicken Rice" },
      { id: "MFC-002", name: "Zhen Zhen Porridge" },
      { id: "MFC-003", name: "Rojak Popiah & Cockle" },
      { id: "MFC-004", name: "China Street Fritters" },
      { id: "MFC-005", name: "Fuzhou Oyster Cake" },
      { id: "MFC-006", name: "Jin Hua Fish Head Bee Hoon" },
      { id: "MFC-007", name: "Maxwell Fuzhou Oyster Cake" },
      { id: "MFC-008", name: "Liao Fan Hong Kong Soya Sauce" }
    ]
  },
  "Marsiling Mall Hawker Centre": {
    address: "4 Marsiling Ln, Singapore 730004",
    contact: "6269 1234",
    stalls: [
      { id: "MMHC-001", name: "Ah Seng Durian" },
      { id: "MMHC-002", name: "Chang Ji Noodles" },
      { id: "MMHC-003", name: "Delicious Laksa" },
      { id: "MMHC-004", name: "Eastern Mee Pok" },
      { id: "MMHC-005", name: "Fong's Roasted Delight" },
      { id: "MMHC-006", name: "Good Taste Chicken Rice" },
      { id: "MMHC-007", name: "Hainanese Curry Rice" },
      { id: "MMHC-008", name: "Marsiling Satay" }
    ]
  },
  "Kampung Admiralty Hawker Centre": {
    address: "676 Woodlands Drive 71, Singapore 730676",
    contact: "6514 5678",
    stalls: [
      { id: "KAHC-001", name: "Admiralty Fish Soup" },
      { id: "KAHC-002", name: "Big Prawn Noodle" },
      { id: "KAHC-003", name: "Chicken Rice Stall" },
      { id: "KAHC-004", name: "Delicious Fried Hokkien Mee" },
      { id: "KAHC-005", name: "Kampung Spirit Co" },
      { id: "KAHC-006", name: "Muslim Food Stall" },
      { id: "KAHC-007", name: "Nasi Lemak Corner" },
      { id: "KAHC-008", name: "Western Delights" }
    ]
  },
  "Chomp Chomp Food Centre": {
    address: "20 Kensington Park Rd, Singapore 557269",
    contact: "6245 8899",
    stalls: [
      { id: "CCFC-001", name: "Aloysius BBQ Chicken Wings" },
      { id: "CCFC-002", name: "BBQ Sambal Stingray" },
      { id: "CCFC-003", name: "Chomp Chomp Satay" },
      { id: "CCFC-004", name: "Fried Carrot Cake" },
      { id: "CCFC-005", name: "Grilled Seafood" },
      { id: "CCFC-006", name: "Hoover Rojak" },
      { id: "CCFC-007", name: "Soon Heng Pork Ribs" },
      { id: "CCFC-008", name: "Traditional Oyster Omelette" }
    ]
  },
  "Tekka Centre": {
    address: "665 Buffalo Rd, Singapore 210665",
    contact: "6295 5678",
    stalls: [
      { id: "TC-001", name: "Allauddin's Briyani" },
      { id: "TC-002", name: "Bismillah Biryani" },
      { id: "TC-003", name: "Deen's Murtabak" },
      { id: "TC-004", name: "Indian Muslim Food" },
      { id: "TC-005", name: "Tekka Fish Soup" },
      { id: "TC-006", name: "Thasevi Food" },
      { id: "TC-007", name: "Victory Restaurant" },
      { id: "TC-008", name: "Zam Zam Restaurant" }
    ]
  },
  "Old Airport Road Food Centre": {
    address: "51 Old Airport Rd, Singapore 390051",
    contact: "6440 1234",
    stalls: [
      { id: "OARFC-001", name: "Fried Oyster Omelette" },
      { id: "OARFC-002", name: "Fried Prawn Noodles" },
      { id: "OARFC-003", name: "Haig Road Putu Piring" },
      { id: "OARFC-004", name: "Hwa Kee Noodles" },
      { id: "OARFC-005", name: "Nam Sing Hokkien Fried Mee" },
      { id: "OARFC-006", name: "Old Airport Road Wanton Mee" },
      { id: "OARFC-007", name: "Roast Paradise" },
      { id: "OARFC-008", name: "Soon Lee Hong Kong Roasted" }
    ]
  }
};

// ================================================================================
// Helper Functions
// ================================================================================

/**
 * Get stalls for a specific hawker centre
 * @param {string} hawkerCentreName - Name of the hawker centre
 * @returns {Array} Array of stall objects with id and name
 */
function getStallsForHawkerCentre(hawkerCentreName) {
  const centre = HAWKER_CENTRES[hawkerCentreName];
  return centre ? centre.stalls : [];
}

/**
 * Get hawker centre information
 * @param {string} hawkerCentreName - Name of the hawker centre
 * @returns {Object|null} Hawker centre object or null if not found
 */
function getHawkerCentreInfo(hawkerCentreName) {
  return HAWKER_CENTRES[hawkerCentreName] || null;
}

/**
 * Get all hawker centre names
 * @returns {Array} Array of hawker centre names
 */
function getAllHawkerCentreNames() {
  return Object.keys(HAWKER_CENTRES);
}

/**
 * Find stall by name across all hawker centres
 * @param {string} stallName - Name of the stall
 * @returns {Object|null} Object with hawkerCentre and stall info
 */
function findStallByName(stallName) {
  for (const [centreName, centreData] of Object.entries(HAWKER_CENTRES)) {
    const stall = centreData.stalls.find(s => s.name === stallName);
    if (stall) {
      return {
        hawkerCentre: centreName,
        stall: stall,
        address: centreData.address,
        contact: centreData.contact
      };
    }
  }
  return null;
}

// ================================================================================
// Console Helper
// ================================================================================
console.log('Hawker Centre Data Loaded');
console.log(`${Object.keys(HAWKER_CENTRES).length} hawker centres available`);
console.log('Use getStallsForHawkerCentre("Maxwell Food Centre") to see stalls');

// ================================================================================
// Export for ES6 modules (if needed)
// ================================================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    HAWKER_CENTRES, 
    getStallsForHawkerCentre, 
    getHawkerCentreInfo,
    getAllHawkerCentreNames,
    findStallByName
  };
}
