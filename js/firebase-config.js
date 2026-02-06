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

// Console helper for testing
console.log('Firebase initialized for Digital Hawker');
console.log('Available helpers: InspectionDB, LoggingDB');
console.log('Test with: InspectionDB.getAll().then(console.log)');