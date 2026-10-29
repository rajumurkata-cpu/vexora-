
const hero = document.querySelector(".hero");
const title = document.querySelector("h1");
const button = document.querySelector(".btn");
const nav = document.querySelector("nav");

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (event) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Neon glow follows the mouse
hero.addEventListener("mousemove", function (event) {
  const x = (event.clientX / window.innerWidth) * 100;
  const y = (event.clientY / window.innerHeight) * 100;

  hero.style.background = `
    radial-gradient(
      circle at ${x}% ${y}%,
      #063b6580,
      #030712 55%
    )
  `;
});

hero.addEventListener("mouseleave", function () {
  hero.style.background = `
    radial-gradient(ellipse at 75% 40%,
      #063b6544, transparent 55%),
    #030712
  `;
});

// Button click effect
button.addEventListener("click", function () {
  button.style.boxShadow = "0 0 25px #00c8ff88";
  setTimeout(() => {
    button.style.boxShadow = "none";
  }, 800);
});

// Intro animation
hero.style.opacity = "0";

window.addEventListener("load", function () {
  hero.style.transition = "opacity 1.2s ease";
  hero.style.opacity = "1";
});

console.log("VEXORA website is ready!");
