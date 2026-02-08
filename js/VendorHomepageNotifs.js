// VendorHomeNotifs.js

const badgeEl = document.getElementById("notifBadge") || document.querySelector(".notification-badge");
const listEl = document.getElementById("homeNotifList");

function escapeHtml(str = "") {
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[m]));
}

function timeAgo(ts) {
  if (!ts) return "";
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  const mins = Math.floor((Date.now() - d.getTime()) / 60000);

  if (mins < 1) return "Updated just now";
  if (mins < 60) return `Updated ${mins} minutes ago`;

  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `Updated ${hrs} hour${hrs > 1 ? "s" : ""} ago`;

  const days = Math.floor(hrs / 24);
  return `Updated ${days} day${days > 1 ? "s" : ""} ago`;
}

function renderHomeNotifs(notifs) {
  if (!listEl) return;

  if (!notifs || notifs.length === 0) {
    listEl.innerHTML = `
      <div class="notif-card" style="opacity:.8;">
        <div class="notif-head">No notifications</div>
        <div class="notif-sub">You're all caught up.</div>
      </div>
    `;
    return;
  }

  listEl.innerHTML = notifs.map((n) => `
    <div class="notif-card">
      <div class="notif-head">${escapeHtml(n.title || "")}</div>
      <div class="notif-sub">${escapeHtml(n.details || "")}</div>
      <div class="notif-time">${escapeHtml(timeAgo(n.dateTime))}</div>
    </div>
  `).join("");
}

function setBadge(count) {
  if (!badgeEl) return;
  badgeEl.textContent = String(count);
  badgeEl.style.display = count > 0 ? "inline-flex" : "none";
}

auth.onAuthStateChanged((user) => {
  if (!user) return;

  const col = db.collection("notification");

  // this acts as a preview to show latest 3 on homepage
  col.orderBy("dateTime", "desc").limit(3).onSnapshot((snap) => {
    const notifs = snap.docs.map(d => d.data());
    renderHomeNotifs(notifs);
  });

  col.onSnapshot((snap) => {
    setBadge(snap.size);
  });
});
