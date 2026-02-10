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

// Initial hidden state
revealElements.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const form = document.querySelector(".contact-form");


// ===============================
// CONTACT FORM VALIDATION
// ===============================

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault(); 

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent successfully.");
        form.reset();
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }

    } catch (error) {
      alert("Network error. Please try again.");
    }
  });
}




