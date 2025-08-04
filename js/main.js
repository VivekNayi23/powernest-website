document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Smooth Scroll
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      navMenu.classList.remove("active");
      document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Scroll Animation
  const revealElements = document.querySelectorAll(".fade-in");
  const revealOnScroll = () => {
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.85) {
        el.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // Contact Form
  document.querySelector(".contact-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Thanks! Your message has been sent.");
    e.target.reset();
  });

  // Modals
  const modals = document.querySelectorAll(".modal");

  // Ensure all modals are hidden at start
  modals.forEach(modal => {
    modal.style.display = "none";
  });

  // Open modal on button click
  document.querySelectorAll(".see-more-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "flex";
      }
    });
  });

  // Close modal on X click
  document.querySelectorAll(".close").forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
      const modal = closeBtn.closest(".modal");
      if (modal) {
        modal.style.display = "none";
      }
    });
  });

  // Close modal on outside click
  window.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });
});
