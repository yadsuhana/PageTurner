document.addEventListener('DOMContentLoaded', () => {
  // Alert on Add to Cart buttons
  const addToCartButtons = document.querySelectorAll('.product-detail-section button');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Book added to your cart!');
    });
  });

  // Form submission handling for Contact page
  const contactForm = document.querySelector('form[aria-label="Contact form"]');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message. We will get back to you shortly!');
      contactForm.reset();
    });
  }

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(err => {
          console.log('ServiceWorker registration failed: ', err);
        });
    });
  }
});
