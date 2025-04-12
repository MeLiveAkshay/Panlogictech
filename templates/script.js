// script.js
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out to PanLogic! We will contact you soon.');
    this.reset();
  });
  