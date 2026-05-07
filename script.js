// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.closest('.faq-item');
    const isOpen = faqItem.hasAttribute('open');

    // Close all other FAQ items
    document.querySelectorAll('.faq-item[open]').forEach(item => {
      if (item !== faqItem) {
        item.removeAttribute('open');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      }
    });

    // Toggle current item
    if (isOpen) {
      faqItem.removeAttribute('open');
      button.setAttribute('aria-expanded', 'false');
    } else {
      faqItem.setAttribute('open', '');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});

// Menu Toggle for Mobile
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    console.log('Menu toggle clicked'); // Placeholder for future mobile menu
  });
}

// Smooth scroll fallback for older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href !== '#') {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
