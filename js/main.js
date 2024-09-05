document.addEventListener("DOMContentLoaded", function() {
  // Get navigation and toggle elements
  const nav = document.querySelector("#nav");
  const navBtn = document.querySelector("#nav-btn");
  const navBtnImg = document.querySelector("#nav-btn-img");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const btnCreative = document.getElementById('btn-switch-creative');
  const btnDeveloper = document.getElementById('btn-switch-developer');
  const skillsCreative = document.querySelector('.about-skills-creative');
  const skillsDeveloper = document.querySelector('.about-skills-developer');

  // Initialize sections' display states for toggling skills
  skillsCreative.classList.add('visible');
  skillsDeveloper.classList.remove('visible');

  // Preloader functionality
  function hidePreloader() {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = 0;
    setTimeout(() => { preloader.style.display = "none"; }, 500); // Ensure smooth fade out
  }

  window.addEventListener("load", function () {
    setTimeout(hidePreloader, 1700);
  });

  // Hamburger menu toggle
  navBtn.onclick = () => {
    if (nav.classList.contains("open")) {
      navBtnImg.src = "img/icons/open.svg";
      nav.classList.remove("open");
    } else {
      navBtnImg.src = "img/icons/close.svg";
      nav.classList.add("open");
    }
  };

  // Navigation link activation based on scroll position
  function activateLinkOnScroll() {
    let currentSection = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", activateLinkOnScroll);
  activateLinkOnScroll();

  // Toggle between Creative and Developer skill sets
  function toggleSkills() {
    skillsCreative.classList.toggle('visible');
    skillsDeveloper.classList.toggle('visible');
  }

  btnCreative.addEventListener('click', toggleSkills);
  btnDeveloper.addEventListener('click', toggleSkills);

  // Changing hero heading text on click
  defaultName=true;
  document.getElementById("heroHeading").onclick = function() {
    const heroHeading = this;
    const greeting = document.getElementById("heroGreeting");

    heroHeading.classList.add("fade");
    setTimeout(() => {
      if (defaultName) {
        greeting.textContent = "SOMETIMES, I'M";
        greeting.style.color = "var(--secondary-accent)";
        heroHeading.textContent = "Hyx.";
        heroHeading.style.color = "var(--primary-accent)";
        defaultName = false;
      } else {
        greeting.textContent = "My Name is";
        greeting.style.color = "var(--primary-accent)";
        heroHeading.textContent = "Christian Moises";
        heroHeading.style.color = "var(--secondary-accent)";
        defaultName = true;
      }
      heroHeading.classList.remove("fade");
    }, 250); // Animation timing
  };

  // Sticky header functionality
  const header = document.querySelector("#header");
  const goToTop = document.querySelector("#goToTop");
  const hero = document.querySelector("#home");
  const triggerHeight = hero.offsetHeight - 170;

  window.addEventListener("scroll", function () {
    if (window.scrollY > triggerHeight) {
      header.classList.add("header-sticky");
      goToTop.classList.add("reveal");
    } else {
      header.classList.remove("header-sticky");
      goToTop.classList.remove("reveal");
    }
  });

  // Initialize AOS for animations
  AOS.init({ once: true });
});
