document.addEventListener("DOMContentLoaded", function () {
  function revealOnScroll() {
    document.querySelectorAll('.card, .fade-in').forEach(el => {
      let winHeight = window.innerHeight;
      if (el.getBoundingClientRect().top < winHeight * 0.88) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
