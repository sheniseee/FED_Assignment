const urgentSection = document.getElementById("urgentSection");
const urgentTitleEl = document.querySelector(".urgent-title");
const urgentSubEl = document.querySelector(".urgent-sub");

const recentListEl = document.querySelector(".recent-list");
const viewAllBtn = document.getElementById("viewAllBtn"); // may not exist, handled safely

const badgeEl =
  document.getElementById("notifBadge") ||
  document.querySelector(".notification-badge");

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

function escapeHtml(str = "") {
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[m]));
}

function badgeClassFromTag(tagText = "") {
  const t = String(tagText).toLowerCase();
  if (t.includes("expire") || t.includes("soon") || t.includes("due")) return "danger";
  if (t.includes("low") || t.includes("running")) return "warn";
  return "warn";
}

function renderUrgent(notif) {
  if (!urgentSection || !urgentTitleEl || !urgentSubEl) return;

  if (!notif) {
    urgentSection.style.display = "none";
    return;
  }

  urgentSection.style.display = "block";
  urgentTitleEl.textContent = notif.title || "Urgent notification";
  urgentSubEl.textContent = notif.message || "";
}

function renderRecent(notifs) {
  if (!recentListEl) return;

  
  const placeholder = recentListEl.querySelector(".recent-empty");
  if (placeholder) placeholder.remove();

  recentListEl.querySelectorAll(".ncard").forEach((el) => el.remove());

  // empty state
  if (!notifs || notifs.length === 0) {
    const empty = document.createElement("div");
    empty.className = "recent-empty";
    empty.style.padding = "12px";
    empty.style.color = "#444";
    empty.style.fontSize = "13px";
    empty.textContent = "No recent notifications.";
    recentListEl.insertBefore(empty, viewAllBtn || null);
    if (viewAllBtn) viewAllBtn.style.display = "none";
    return;
  }

  notifs.forEach((n) => {
    const tagHtml = n.tagText ? `
      <div class="badge-row">
        <span class="badge ${badgeClassFromTag(n.tagText)}">${escapeHtml(n.tagText)}</span>
      </div>
    ` : "";

    const card = document.createElement("a");
    card.className = "ncard";
    card.href = "#";
    card.dataset.id = n.id;

    // make read cards look read
    if (n.read) card.classList.add("read");

    card.innerHTML = `
      <div class="ncard-body">
        <label class="ncheck">
          <input type="checkbox" class="read-check" ${n.read ? "checked" : ""} />
          <span class="check-ui"></span>
        </label>

        <div class="ncontent">
          <div class="ncard-title">${escapeHtml(n.title || "")}</div>
          <div class="ncard-sub">${escapeHtml(n.message || "")}</div>
          ${tagHtml}
          <div class="ncard-time">${escapeHtml(timeAgo(n.createdAt))}</div>
        </div>
      </div>
    `;

    // checkbox to mark as read/unread
    const cb = card.querySelector(".read-check");
    if (cb) {
      cb.addEventListener("click", (e) => {
        e.stopPropagation();
      });

      cb.addEventListener("change", async (e) => {
        const isRead = e.target.checked;

        try {
          await db.collection("notification").doc(n.id).update({ read: isRead });
          card.classList.toggle("read", isRead);
        } catch (err) {
          console.error("Failed to update read status:", err);
          e.target.checked = !isRead; 
        }
      });
    }

    recentListEl.insertBefore(card, viewAllBtn || null);
  });

  // this page shows all, so viewAll button is optional
  if (viewAllBtn) viewAllBtn.style.display = "none";
}

auth.onAuthStateChanged((user) => {
  if (!user) return;

  const col = db.collection("notification");

  col.orderBy("dateTime", "desc").onSnapshot((snap) => {
    const notifs = snap.docs.map((d) => {
      const data = d.data();
      return {
        id: d.id,
        title: data.title,
        message: data.details,
        createdAt: data.dateTime,
        read: data.read === true,
        tagText: data.tagText || "",
      };
    });

    renderRecent(notifs);
  });

  // my badges here show the unread notifs count
  col.where("read", "==", false).onSnapshot((snap) => {
    if (!badgeEl) return;
    badgeEl.textContent = String(snap.size);
    badgeEl.style.display = snap.size > 0 ? "inline-flex" : "none";
  });

  // this urgent banner shows the latest high priority notifs
  col.orderBy("dateTime", "desc").limit(1).onSnapshot((snap) => {
    if (snap.empty) return renderUrgent(null);

    const data = snap.docs[0].data();
    renderUrgent({
      title: data.title,
      message: data.details,
    });
  });
});


