
// ========================================
// Firebase Configuration for Digital Hawker
// ========================================

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtB5-SjjekUXiAl80c5AQ7cx2VMrXusJw",
  authDomain: "digital-hawker-web.firebaseapp.com",
  projectId: "digital-hawker-web",
  storageBucket: "digital-hawker-web.firebasestorage.app",
  messagingSenderId: "135976498248",
  appId: "1:135976498248:web:0209fb615ccba6810d547d",
  measurementId: "G-L04BJHVL0P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Services
const db = firebase.firestore();
const auth = firebase.auth();

// Enable offline persistence (optional but recommended)
db.enablePersistence()
  .catch((err) => {
    if (err.code == 'failed-precondition') {
      console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
    } else if (err.code == 'unimplemented') {
      console.warn('The current browser does not support offline persistence');
    }
  });

// ========================================
// Inspection Database Helper Functions
// ========================================
const InspectionDB = {
  /**
   * Get all inspections
   */
  async getAll() {
    try {
      const snapshot = await db.collection('inspections')
        .orderBy('date', 'desc')
        .get();
      
      return snapshot.docs.map(doc => ({
        firestoreId: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting inspections:', error);
      throw error;
    }
  },

  /**
   * Get inspections by date range
   */
  async getByDateRange(startDate, endDate) {
    try {
      const snapshot = await db.collection('inspections')
        .where('date', '>=', startDate)
        .where('date', '<=', endDate)
        .orderBy('date', 'desc')
        .get();
      
      return snapshot.docs.map(doc => ({
        firestoreId: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting inspections by date range:', error);
      throw error;
    }
  },

  /**
   * Add new inspection
   */
  async add(inspectionData) {
    try {
      const docRef = await db.collection('inspections').add({
        ...inspectionData,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      
      console.log('Inspection added with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('Error adding inspection:', error);
      throw error;
    }
  },

  /**
   * Update existing inspection
   */
  async update(firestoreId, inspectionData) {
    try {
      await db.collection('inspections').doc(firestoreId).update({
        ...inspectionData,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      
      console.log('Inspection updated:', firestoreId);
    } catch (error) {
      console.error('Error updating inspection:', error);
      throw error;
    }
  },

  /**
   * Delete inspection
   */
  async delete(firestoreId) {
    try {
      await db.collection('inspections').doc(firestoreId).delete();
      console.log('Inspection deleted:', firestoreId);
    } catch (error) {
      console.error('Error deleting inspection:', error);
      throw error;
    }
  },

  /**
   * Listen to real-time updates
   */
  onSnapshot(callback) {
    return db.collection('inspections')
      .orderBy('date', 'desc')
      .onSnapshot(
        (snapshot) => {
          const inspections = snapshot.docs.map(doc => ({
            firestoreId: doc.id,
            ...doc.data()
          }));
          callback(inspections);
        },
        (error) => {
          console.error('Error in real-time listener:', error);
        }
      );
  }
};

// ========================================
// Inspection Logging Helper Functions
// ========================================
const LoggingDB = {
  /**
   * Add inspection log
   */
  async add(logData) {
    try {
      const docRef = await db.collection('inspectionLogs').add({
        ...logData,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      
      console.log('Log added with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('Error adding log:', error);
      throw error;
    }
  },

  /**
   * Get logs for a specific stall
   */
  async getByStall(hawkerCentre, stall) {
    try {
      const snapshot = await db.collection('inspectionLogs')
        .where('hawkerCentre', '==', hawkerCentre)
        .where('stall', '==', stall)
        .orderBy('timestamp', 'desc')
        .get();
      
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate()
      }));
    } catch (error) {
      console.error('Error getting logs by stall:', error);
      throw error;
    }
  }
};

// ========================================
// Stall Menu Helper Functions
// ========================================
// Firestore collection: 'menu'
// Document shape (MenuItem):
// - stallID: <StallID>
// - itemCode: <ItemCode>
// - itemDesc: <ItemDesc>
// - itemPrice: <ItemPrice> (number)
// - itemCategory: <ItemCategory> (e.g. 'Popular', 'Rice', 'Noodles', etc.)
// - createdAt / updatedAt: Firestore timestamps
const MenuDB = {
  /**
   * Get all menu items for a stall
   * (No orderBy in query so docs without itemCode are still returned; sorted in memory.)
   */
  async getByStall(stallID) {
    try {
      const snapshot = await db.collection('menu')
        .where('stallID', '==', stallID)
        .get();

      const items = snapshot.docs.map(doc => ({
        firestoreId: doc.id,
        ...doc.data()
      }));
      items.sort((a, b) => (a.itemCode || '').localeCompare(b.itemCode || ''));
      return items;
    } catch (error) {
      console.error('Error getting menu items for stall:', error);
      throw error;
    }
  },

  /**
   * Get menu items for a stall filtered by category
   */
  async getByStallAndCategory(stallID, itemCategory) {
    try {
      const snapshot = await db.collection('menu')
        .where('stallID', '==', stallID)
        .where('itemCategory', '==', itemCategory)
        .orderBy('itemCode')
        .get();

      return snapshot.docs.map(doc => ({
        firestoreId: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting menu items by stall and category:', error);
      throw error;
    }
  },

  /**
   * Add new menu item
   * menuItemData should contain:
   * { stallID, itemCode, itemDesc, itemPrice, itemCategory }
   */
  async add(menuItemData) {
    try {
      const docRef = await db.collection('menu').add({
        ...menuItemData,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      console.log('Menu item added with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('Error adding menu item:', error);
      throw error;
    }
  },

  /**
   * Update existing menu item
   */
  async update(firestoreId, menuItemData) {
    try {
      await db.collection('menu').doc(firestoreId).update({
        ...menuItemData,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      console.log('Menu item updated:', firestoreId);
    } catch (error) {
      console.error('Error updating menu item:', error);
      throw error;
    }
  },

  /**
   * Delete menu item
   */
  async delete(firestoreId) {
    try {
      await db.collection('menu').doc(firestoreId).delete();
      console.log('Menu item deleted:', firestoreId);
    } catch (error) {
      console.error('Error deleting menu item:', error);
      throw error;
    }
  },

  /**
   * Real-time listener for a stall's menu
   * (No orderBy in query so docs without itemCode are still returned; sorted in memory.)
   */
  onSnapshotByStall(stallID, callback) {
    return db.collection('menu')
      .where('stallID', '==', stallID)
      .onSnapshot(
        (snapshot) => {
          const items = snapshot.docs.map(doc => ({
            firestoreId: doc.id,
            ...doc.data()
          }));
          items.sort((a, b) => (a.itemCode || '').localeCompare(b.itemCode || ''));
          callback(items);
        },
        (error) => {
          console.error('Error in menu real-time listener:', error);
        }
      );
  }
};

// ========================================
// Stalls Helper Functions
// ========================================
// Firestore collection: 'stalls'
// Document shape: stallID (string), stallName (string), stallDesc (string),
// stallRating (string), stallTime (string), image (string, e.g. base64 data URL)
const StallsDB = {
  /**
   * Get all stalls
   */
  async getAll() {
    try {
      const snapshot = await db.collection('stalls').get();
      return snapshot.docs.map(doc => ({
        firestoreId: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting stalls:', error);
      throw error;
    }
  },

  /**
   * Get a stall by stallID
   */
  async getByStallId(stallID) {
    try {
      const snapshot = await db.collection('stalls')
        .where('stallID', '==', stallID)
        .get();
      if (snapshot.empty) return null;
      const doc = snapshot.docs[0];
      return { firestoreId: doc.id, ...doc.data() };
    } catch (error) {
      console.error('Error getting stall by stallID:', error);
      throw error;
    }
  },

  /**
   * Add new stall
   */
  async add(stallData) {
    try {
      const docRef = await db.collection('stalls').add({
        ...stallData,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      console.log('Stall added with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('Error adding stall:', error);
      throw error;
    }
  },

  /**
   * Update existing stall
   */
  async update(firestoreId, stallData) {
    try {
      await db.collection('stalls').doc(firestoreId).update({
        ...stallData,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      console.log('Stall updated:', firestoreId);
    } catch (error) {
      console.error('Error updating stall:', error);
      throw error;
    }
  },

  /**
   * Delete stall
   */
  async delete(firestoreId) {
    try {
      await db.collection('stalls').doc(firestoreId).delete();
      console.log('Stall deleted:', firestoreId);
    } catch (error) {
      console.error('Error deleting stall:', error);
      throw error;
    }
  },

  /**
   * Real-time listener for all stalls
   */
  onSnapshot(callback) {
    return db.collection('stalls').onSnapshot(
      (snapshot) => {
        const stalls = snapshot.docs.map(doc => ({
          firestoreId: doc.id,
          ...doc.data()
        }));
        callback(stalls);
      },
      (error) => {
        console.error('Error in stalls real-time listener:', error);
      }
    );
  }
};

// Console helper for testing
console.log('Firebase initialized for Digital Hawker');
console.log('Available helpers: InspectionDB, LoggingDB, MenuDB, StallsDB');
console.log('Test with: InspectionDB.getAll().then(console.log)');




