// Vendor Rental Agreement – Firestore
// Uses existing firebase.js (db, auth, firebase)

function el(id) { return document.getElementById(id); }
function txt(id) { return (el(id)?.innerText || "").trim(); }
function set(id, v) { if (el(id)) el(id).innerText = v ?? ""; }
function status(msg) { if (el("raStatus")) el("raStatus").textContent = msg || ""; }

function collectAgreement() {
  return {
    operatorName: txt("operatorName"),
    tenantName: txt("tenantName"),
    stallInfo: txt("stallInfo"),
    tradeType: txt("tradeType"),
    startDate: txt("startDate"),
    endDate: txt("endDate"),

    renewalStatus: txt("renewalStatus"),
    renewalDate: txt("renewalDate"),

    monthlyRent: txt("monthlyRent"),
    deposit: txt("deposit"),
    operatorSig: txt("operatorSig"),
    operatorSigDate: txt("operatorSigDate"),
    tenantSig: txt("tenantSig"),
    tenantSigDate: txt("tenantSigDate"),
  };
}


function fillAgreement(data) {
  if (!data) return;
  set("operatorName", data.operatorName);
  set("tenantName", data.tenantName);
  set("stallInfo", data.stallInfo);
  set("tradeType", data.tradeType);
  set("startDate", data.startDate);
  set("endDate", data.endDate);
  set("renewalStatus", data.renewalStatus);
  set("renewalDate", data.renewalDate);
  set("monthlyRent", data.monthlyRent);
  set("deposit", data.deposit);
  set("operatorSig", data.operatorSig);
  set("operatorSigDate", data.operatorSigDate);
  set("tenantSig", data.tenantSig);
  set("tenantSigDate", data.tenantSigDate);
}

async function saveAgreement(uid) {
  try {
    status("Saving...");
    await db.collection("vendorAgreements").doc(uid).set({
      ...collectAgreement(),
      ownerUid: uid,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
    status("Saved");
  } catch (e) {
    console.error(e);
    status("Save failed, please try again.");
  }
}

async function loadAgreement(uid) {
  try {
    status("Loading...");
    const snap = await db.collection("vendorAgreements").doc(uid).get();
    if (snap.exists) {
      fillAgreement(snap.data());
      status("Loaded");
    } else {
      status("No saved agreement yet.");
    }
  } catch (e) {
    console.error(e);
    status("Load failed");
  }
}

auth.onAuthStateChanged(user => {
  if (!user) {
    status("Please log in.");
    return;
  }
  loadAgreement(user.uid);
  el("raSaveBtn")?.addEventListener("click", () => saveAgreement(user.uid));
});
