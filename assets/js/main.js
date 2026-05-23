/* Espaço Gamer - interações do site
   Este arquivo concentra os comportamentos em JavaScript para facilitar manutenção. */

const siteConfig = window.siteConfig || {
  whatsappDigits: '5518997023732',
  whatsappDisplay: '+55 (18) 99702-3732',
  whatsappText: 'Olá! Vim pelo site do Espaço Gamer e gostaria de mais informações.',
  email: 'espacogamer.lan@gmail.com',
  instagramUser: 'espac0gamer',
  instagramUrl: 'https://www.instagram.com/espac0gamer/',
  city: 'Presidente Prudente - SP'
};

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

const createWhatsAppLink = (message) => {
  const text = encodeURIComponent(message || siteConfig.whatsappText || 'Olá!');
  return `https://wa.me/${siteConfig.whatsappDigits}?text=${text}`;
};

function injectInteractiveStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .site-header.is-scrolled {
      background: rgba(5, 5, 5, 0.96);
      box-shadow: 0 14px 32px rgba(0, 0, 0, 0.28);
    }

    .reveal-on-scroll {
      opacity: 0;
      transform: translateY(18px);
      transition: opacity .55s ease, transform .55s ease;
    }

    .reveal-on-scroll.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .highlight-card,
    .post-card,
    .service-card,
    .contact-card,
    .info-box,
    .gallery-card,
    .image-frame {
      transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease;
    }

    .highlight-card:hover,
    .post-card:hover,
    .service-card:hover,
    .contact-card:hover,
    .info-box:hover,
    .gallery-card:hover,
    .image-frame:hover {
      transform: translateY(-3px);
      border-color: rgba(255, 203, 47, .32);
      box-shadow: 0 20px 50px rgba(0, 0, 0, .36);
    }

    .filter-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 0 0 18px;
    }

    .filter-button {
      border: 1px solid rgba(255,255,255,.10);
      background: rgba(255,255,255,.035);
      color: var(--text, #fff);
      border-radius: 999px;
      padding: 10px 14px;
      font: inherit;
      font-weight: 700;
      cursor: pointer;
      transition: background .2s ease, border-color .2s ease, color .2s ease;
    }

    .filter-button:hover,
    .filter-button.is-active {
      background: rgba(255, 203, 47, .15);
      border-color: rgba(255, 203, 47, .42);
      color: var(--accent, #ffcb2f);
    }

    .floating-whatsapp,
    .back-to-top {
      position: fixed;
      z-index: 50;
      right: 18px;
      border: 0;
      border-radius: 999px;
      box-shadow: 0 16px 34px rgba(0, 0, 0, .34);
      font-weight: 800;
      cursor: pointer;
      transition: transform .22s ease, opacity .22s ease;
    }

    .floating-whatsapp {
      bottom: 18px;
      min-height: 52px;
      padding: 0 18px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, var(--accent, #ffcb2f), var(--accent-strong, #f3a300));
      color: #090909;
    }

    .back-to-top {
      bottom: 82px;
      width: 46px;
      height: 46px;
      background: rgba(15, 15, 15, .92);
      color: #fff;
      border: 1px solid rgba(255,255,255,.12);
      opacity: 0;
      pointer-events: none;
    }

    .back-to-top.is-visible {
      opacity: 1;
      pointer-events: auto;
    }

    .floating-whatsapp:hover,
    .back-to-top:hover {
      transform: translateY(-2px);
    }

    .lightbox {
      position: fixed;
      inset: 0;
      z-index: 80;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 22px;
      background: rgba(0, 0, 0, .86);
    }

    .lightbox.is-open {
      display: flex;
    }

    .lightbox__content {
      width: min(1040px, 100%);
      position: relative;
    }

    .lightbox__image {
      width: 100%;
      max-height: 84vh;
      object-fit: contain;
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,.14);
      background: #050505;
    }

    .lightbox__caption {
      margin: 12px 54px 0 0;
      color: #d8d8d8;
      line-height: 1.5;
    }

    .lightbox__close {
      position: absolute;
      top: -14px;
      right: -14px;
      width: 42px;
      height: 42px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,.18);
      background: #111;
      color: #fff;
      font-size: 1.35rem;
      cursor: pointer;
    }

    .gallery-card img,
    .post-card-cover img,
    .image-frame img {
      cursor: zoom-in;
    }

    .copy-toast {
      position: fixed;
      left: 50%;
      bottom: 22px;
      z-index: 90;
      transform: translateX(-50%) translateY(18px);
      opacity: 0;
      pointer-events: none;
      background: rgba(15,15,15,.96);
      border: 1px solid rgba(255,255,255,.12);
      color: #fff;
      border-radius: 999px;
      padding: 11px 16px;
      box-shadow: 0 16px 34px rgba(0,0,0,.34);
      transition: opacity .2s ease, transform .2s ease;
    }

    .copy-toast.is-visible {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    .promo-callout {
      margin: 20px 0 0;
      padding: 18px;
      border-radius: 20px;
      background: linear-gradient(135deg, rgba(255, 203, 47, .13), rgba(255,255,255,.035));
      border: 1px solid rgba(255, 203, 47, .22);
    }

    .promo-callout strong {
      color: var(--accent, #ffcb2f);
    }

    @media (max-width: 720px) {
      .floating-whatsapp {
        left: 14px;
        right: 14px;
        bottom: 14px;
        width: auto;
      }

      .back-to-top {
        right: 14px;
        bottom: 78px;
      }

      .lightbox {
        padding: 12px;
      }

      .lightbox__close {
        top: 8px;
        right: 8px;
      }
    }
  `;
  document.head.appendChild(style);
}

function setupConfigBindings() {
  $$('[data-whatsapp-link]').forEach((element) => {
    const customText = element.getAttribute('data-whatsapp-text');
    element.setAttribute('href', createWhatsAppLink(customText));
    element.setAttribute('target', '_blank');
    element.setAttribute('rel', 'noopener');
  });

  $$('[data-whatsapp-number]').forEach((element) => {
    element.textContent = siteConfig.whatsappDisplay || '+55 (18) 99702-3732';
  });

  $$('[data-email-link]').forEach((element) => {
    element.setAttribute('href', `mailto:${siteConfig.email}`);
  });

  $$('[data-email-text]').forEach((element) => {
    element.textContent = siteConfig.email || 'espacogamer.lan@gmail.com';
  });

  $$('[data-instagram-link]').forEach((element) => {
    element.setAttribute('href', siteConfig.instagramUrl || 'https://www.instagram.com/espac0gamer/');
    element.setAttribute('target', '_blank');
    element.setAttribute('rel', 'noopener');
  });

  $$('[data-instagram-user]').forEach((element) => {
    element.textContent = `@${siteConfig.instagramUser || 'espac0gamer'}`;
  });

  $$('[data-city]').forEach((element) => {
    element.textContent = siteConfig.city || 'Presidente Prudente - SP';
  });

  $$('[data-current-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
}

function setupMobileMenu() {
  const menuToggle = $('.menu-toggle');
  const siteNav = $('.site-nav');

  if (!menuToggle || !siteNav) return;

  menuToggle.setAttribute('aria-expanded', 'false');

  const closeMenu = () => {
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  $$('.site-nav a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!siteNav.classList.contains('open')) return;
    if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

function setupHeaderOnScroll() {
  const header = $('.site-header');
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 18);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

function setupScrollReveal() {
  const items = $$('section, .highlight-card, .post-card, .service-card, .contact-card, .info-box, .gallery-card, .image-frame')
    .filter((item) => !item.classList.contains('hero-showcase'));

  if (!items.length || !('IntersectionObserver' in window)) return;

  items.forEach((item) => item.classList.add('reveal-on-scroll'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach((item) => observer.observe(item));
}

function setupServiceFilters() {
  const productSearch = $('#productSearch');
  const cards = $$('.searchable-card');
  const filterBar = $('.filter-bar');

  if (!cards.length) return;

  const categoryMap = [
    { label: 'Todos', query: '' },
    { label: 'Informática', query: 'informatica pc internet' },
    { label: 'Manutenção', query: 'manutenção upgrade limpeza formatacao' },
    { label: 'Jogos', query: 'entretenimento videogame fliperama gameplay' },
    { label: 'Escritório', query: 'escritorio curriculo impressão xerox' },
    { label: 'Lanches', query: 'conveniencia agua refrigerante salgadinhos pipoca' }
  ];

  let activeFilter = '';

  const normalize = (value) => (value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const applyFilters = () => {
    const searchTerm = normalize(productSearch ? productSearch.value : '');
    const filterTerm = normalize(activeFilter);

    cards.forEach((card) => {
      const data = normalize(`${card.dataset.search || ''} ${card.textContent || ''}`);
      const matchesSearch = !searchTerm || data.includes(searchTerm);
      const matchesFilter = !filterTerm || filterTerm.split(' ').some((term) => data.includes(term));
      card.style.display = matchesSearch && matchesFilter ? '' : 'none';
    });
  };

  if (filterBar && !$('.filter-buttons', filterBar.parentElement)) {
    const wrapper = document.createElement('div');
    wrapper.className = 'filter-buttons';

    categoryMap.forEach((category, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `filter-button${index === 0 ? ' is-active' : ''}`;
      button.textContent = category.label;
      button.addEventListener('click', () => {
        activeFilter = category.query;
        $$('.filter-button', wrapper).forEach((item) => item.classList.remove('is-active'));
        button.classList.add('is-active');
        applyFilters();
      });
      wrapper.appendChild(button);
    });

    filterBar.prepend(wrapper);
  }

  if (productSearch) {
    productSearch.addEventListener('input', applyFilters);
  }
}

function setupLightbox() {
  const images = $$('main .gallery-card img, main .post-card-cover img, main .image-frame img, main .post-cover img');
  if (!images.length) return;

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox__content" role="dialog" aria-modal="true" aria-label="Imagem ampliada">
      <button class="lightbox__close" type="button" aria-label="Fechar imagem">×</button>
      <img class="lightbox__image" alt="" />
      <p class="lightbox__caption"></p>
    </div>
  `;
  document.body.appendChild(lightbox);

  const image = $('.lightbox__image', lightbox);
  const caption = $('.lightbox__caption', lightbox);
  const closeButton = $('.lightbox__close', lightbox);

  const openLightbox = (sourceImage) => {
    image.src = sourceImage.currentSrc || sourceImage.src;
    image.alt = sourceImage.alt || 'Imagem da Espaço Gamer';
    caption.textContent = sourceImage.alt || '';
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    closeButton.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
    image.removeAttribute('src');
  };

  images.forEach((img) => {
    img.addEventListener('click', () => openLightbox(img));
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });
}

function setupFloatingButtons() {
  const whatsapp = document.createElement('a');
  whatsapp.className = 'floating-whatsapp';
  whatsapp.href = createWhatsAppLink('Olá! Vim pelo site do Espaço Gamer e gostaria de mais informações.');
  whatsapp.target = '_blank';
  whatsapp.rel = 'noopener';
  whatsapp.textContent = 'Falar no WhatsApp';
  document.body.appendChild(whatsapp);

  const backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.type = 'button';
  backToTop.setAttribute('aria-label', 'Voltar ao topo');
  backToTop.textContent = '↑';
  document.body.appendChild(backToTop);

  const updateBackToTop = () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 450);
  };

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  updateBackToTop();
  window.addEventListener('scroll', updateBackToTop, { passive: true });
}

function setupCopyContact() {
  const toast = document.createElement('div');
  toast.className = 'copy-toast';
  toast.textContent = 'Copiado';
  document.body.appendChild(toast);

  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(() => toast.classList.remove('is-visible'), 1800);
  };

  $$('[data-whatsapp-number], [data-email-text], [data-instagram-user]').forEach((element) => {
    element.title = 'Clique para copiar';
    element.style.cursor = 'copy';
    element.addEventListener('click', async (event) => {
      event.preventDefault();
      const text = element.textContent.trim();
      if (!text) return;

      try {
        await navigator.clipboard.writeText(text);
        showToast('Contato copiado');
      } catch {
        showToast(text);
      }
    });
  });
}

function setupPromotionCallout() {
  const isHome = document.body.contains($('.hero-showcase'));
  const isBlog = location.pathname.endsWith('blog.html') || location.pathname.endsWith('/blog');
  const hasPromoLink = $('a[href="blog/post-6.html"], a[href="../blog/post-6.html"]');

  if (!hasPromoLink || (!isHome && !isBlog)) return;

  const target = isHome ? $('.intro-section .container') : $('.page-hero .container');
  if (!target || $('.promo-callout', target)) return;

  const callout = document.createElement('div');
  callout.className = 'promo-callout';
  callout.innerHTML = `
    <strong>Quarta-feira Maluca:</strong>
    confira a promoção com horas em dobro e condições especiais para aproveitar a Espaço Gamer.
    <div class="inline-actions" style="margin-top: 14px;">
      <a class="btn btn-primary" href="blog/post-6.html">Ver promoção</a>
    </div>
  `;

  target.appendChild(callout);
}

function setupKeyboardFocus() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') document.body.classList.add('using-keyboard');
  });
  document.addEventListener('mousedown', () => document.body.classList.remove('using-keyboard'));
}

function init() {
  injectInteractiveStyles();
  setupConfigBindings();
  setupMobileMenu();
  setupHeaderOnScroll();
  setupScrollReveal();
  setupServiceFilters();
  setupLightbox();
  setupFloatingButtons();
  setupCopyContact();
  setupPromotionCallout();
  setupKeyboardFocus();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
