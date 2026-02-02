// ===============================
// SMOOTH SCROLL FOR NAV LINKS
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ===============================
// HERO FADE-IN ON LOAD
// ===============================

window.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-text");
  const heroImage = document.querySelector(".hero-image");

  heroText.style.opacity = 0;
  heroText.style.transform = "translateY(20px)";
  heroImage.style.opacity = 0;
  heroImage.style.transform = "translateY(20px)";

  setTimeout(() => {
    heroText.style.transition = "all 0.8s ease";
    heroImage.style.transition = "all 0.8s ease";

    heroText.style.opacity = 1;
    heroText.style.transform = "translateY(0)";
    heroImage.style.opacity = 1;
    heroImage.style.transform = "translateY(0)";
  }, 200);
});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(".section");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
}

revealElements.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ===============================
// CONTACT FORM VALIDATION
// ===============================

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = this.querySelector('input[type="email"]');
    const messageInput = this.querySelector("textarea");

    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!email || !message) {
      alert("Please complete all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you! Your message has been received.");

    emailInput.value = "";
    messageInput.value = "";
  });
}
