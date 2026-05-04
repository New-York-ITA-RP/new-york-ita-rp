const CONFIG = {
  members: 250,
  version: "v1.0.0"
};

document.getElementById("membersCount").textContent = CONFIG.members + "+";
document.getElementById("serverVersion").textContent = CONFIG.version;

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("active"));

const cards = document.querySelectorAll(".faction-card, .shop-card, .step-grid div");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.animate([
        {opacity:0, transform:"translateY(25px)"},
        {opacity:1, transform:"translateY(0)"}
      ], {duration:600, easing:"ease-out", fill:"forwards"});
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.15});
cards.forEach(card => observer.observe(card));
