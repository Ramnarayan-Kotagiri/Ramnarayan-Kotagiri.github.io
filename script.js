(() => {
const { twinBlocks, projects, publications, capabilities } = window.portfolioData;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const menuButton = $('[data-menu-button]');
const nav = $('[data-nav]');
const setMenu = (open) => {
  menuButton?.setAttribute('aria-expanded', String(open));
  menuButton?.querySelector('.sr-only')?.replaceChildren(document.createTextNode(open ? 'Close navigation' : 'Open navigation'));
  nav?.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
};
menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
$$('[data-nav] a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
window.addEventListener('resize', () => { if (window.innerWidth > 760) setMenu(false); });

const header = $('[data-header]');
const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 18);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
$('[data-year]').textContent = new Date().getFullYear();

const stage = $('[data-twin-stage]');
$$('[data-layer]').forEach((button) => button.addEventListener('click', () => {
  $$('[data-layer]').forEach((item) => {
    const active = item === button;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  stage.dataset.layer = button.dataset.layer;
}));

const selectBlock = (id) => {
  const block = twinBlocks[id];
  if (!block) return;
  $$('.field-block').forEach((item) => item.classList.toggle('is-selected', item.dataset.block === id));
  $('[data-block-name]').textContent = block.name;
  Object.entries(block).forEach(([key, value]) => {
    const field = `[data-field="${key}"]`;
    if ($(field)) $(field).textContent = value;
  });
};
$$('.field-block').forEach((block) => {
  block.addEventListener('click', () => selectBlock(block.dataset.block));
  block.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectBlock(block.dataset.block); }
  });
});

const featuredTarget = $('[data-featured-projects]');
featuredTarget.innerHTML = projects.filter((project) => project.featured).map((project, index) => `
  <article class="project-card">
    <span class="project-number">0${index + 1}</span>
    <div class="project-title"><span>${project.status}</span><h3>${project.title}</h3></div>
    <div class="project-copy"><p>${project.summary}</p><div class="tags">${project.technologies.map((tech) => `<span>${tech}</span>`).join('')}</div></div>
    ${project.code ? `<a class="project-link" href="${project.code}" target="_blank" rel="noopener" aria-label="View ${project.title} code">↗</a>` : '<span aria-hidden="true"></span>'}
  </article>`).join('');

const archiveTarget = $('[data-project-archive]');
const archiveProjects = projects.filter((project) => !project.featured && project.code);
const renderArchive = (query = '') => {
  const normalized = query.trim().toLowerCase();
  const matches = archiveProjects.filter((project) => [project.title, project.type, project.status, ...project.technologies].join(' ').toLowerCase().includes(normalized));
  archiveTarget.innerHTML = matches.length ? matches.map((project) => `<div class="archive-row"><a href="${project.code}" target="_blank" rel="noopener">${project.title}</a><span>${project.type}</span><span>${project.technologies.join(' · ')}</span><a href="${project.code}" target="_blank" rel="noopener" aria-label="Open ${project.title}">↗</a></div>`).join('') : '<p class="archive-empty">No matching public projects.</p>';
};
renderArchive();
$('[data-project-search]')?.addEventListener('input', (event) => renderArchive(event.target.value));

$('[data-publications]').innerHTML = publications.map((publication) => `<article class="publication"><div class="publication-meta">${publication.venue}<br>${publication.year}</div><h3>${publication.title}</h3><p>${publication.description}</p><a class="publication-link" href="${publication.url}" target="_blank" rel="noopener" aria-label="Read ${publication.title}">↗</a></article>`).join('');
$('[data-capabilities]').innerHTML = capabilities.map((capability) => `<article class="capability"><span class="capability-icon">${capability.icon}</span><h3>${capability.title}</h3><p>${capability.copy}</p><div class="tags">${capability.tech.map((tech) => `<span>${tech}</span>`).join('')}</div></article>`).join('');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    const registrations = await navigator.serviceWorker.getRegistrations();
    registrations.forEach((registration) => registration.unregister());
    if ('caches' in window) (await caches.keys()).forEach((key) => caches.delete(key));
  });
}
})();
