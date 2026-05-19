const siteConfig = window.siteConfig || {};

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

const makeWhatsAppLink = (message) => {
  const text = encodeURIComponent(message || siteConfig.whatsappText || 'Olá!');
  return `https://wa.me/${siteConfig.whatsappDigits}?text=${text}`;
};

document.querySelectorAll('[data-whatsapp-link]').forEach((element) => {
  const customText = element.getAttribute('data-whatsapp-text');
  element.setAttribute('href', makeWhatsAppLink(customText));
  element.setAttribute('target', '_blank');
  element.setAttribute('rel', 'noopener');
});

document.querySelectorAll('[data-whatsapp-number]').forEach((element) => {
  element.textContent = siteConfig.whatsappDisplay || '';
});

document.querySelectorAll('[data-email-link]').forEach((element) => {
  element.setAttribute('href', `mailto:${siteConfig.email}`);
  if (!element.textContent.trim()) {
    element.textContent = siteConfig.email || '';
  }
});

document.querySelectorAll('[data-email-text]').forEach((element) => {
  element.textContent = siteConfig.email || '';
});

document.querySelectorAll('[data-instagram-link]').forEach((element) => {
  element.setAttribute('href', siteConfig.instagramUrl || '#');
  element.setAttribute('target', '_blank');
  element.setAttribute('rel', 'noopener');
  if (!element.textContent.trim()) {
    element.textContent = `@${siteConfig.instagramUser || ''}`;
  }
});

document.querySelectorAll('[data-instagram-user]').forEach((element) => {
  element.textContent = `@${siteConfig.instagramUser || ''}`;
});

document.querySelectorAll('[data-city]').forEach((element) => {
  element.textContent = siteConfig.city || '';
});

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const productSearch = document.getElementById('productSearch');
const searchableCards = document.querySelectorAll('.searchable-card');

if (productSearch && searchableCards.length) {
  productSearch.addEventListener('input', (event) => {
    const term = event.target.value.toLowerCase().trim();

    searchableCards.forEach((card) => {
      const data = (card.dataset.search || card.textContent || '').toLowerCase();
      card.style.display = data.includes(term) ? '' : 'none';
    });
  });
}
