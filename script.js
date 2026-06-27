const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const filterButtons = document.querySelectorAll("[data-filter]");
const repoCards = document.querySelectorAll(".repo-card");

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const setRepoFilter = (filter) => {
  repoCards.forEach((card) => {
    const scopes = card.dataset.scope || "";
    card.classList.toggle("is-hidden", filter !== "all" && !scopes.includes(filter));
  });

  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setRepoFilter(button.dataset.filter));
});

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
