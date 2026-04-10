const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

const productSearch = document.getElementById('productSearch');
const searchableCards = document.querySelectorAll('.searchable-card');

if (productSearch && searchableCards.length) {
  productSearch.addEventListener('input', (event) => {
    const term = event.target.value.toLowerCase().trim();

    searchableCards.forEach((card) => {
      const name = card.dataset.name || '';
      card.style.display = name.includes(term) ? '' : 'none';
    });
  });
}
