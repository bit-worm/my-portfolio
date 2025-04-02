// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const navHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Navigation toggle functionality
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    navToggle.classList.toggle('active');
});

// Hide menu on link click (for mobile)
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('show');
            navToggle.classList.remove('active');
        }
    });
});

// Responsive behavior
function checkScreenSize() {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('show');
        navToggle.classList.remove('active');
    }
}

window.addEventListener('resize', checkScreenSize);

// Add fade-in effect to sections as they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});

// when the user scrolls, the header changes from floating
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const header = document.querySelector("header");
  const topRight = document.getElementById("topRight");
  const topNav = document.getElementById("topNav");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.top = "0px";
    header.style.left = "0px";
    header.style.right = "0px";
    header.style.borderBottomRightRadius = "10px";
    header.style.borderBottomLeftRadius = "10px";
    header.style.borderTopRightRadius = "0px";
    header.style.borderTopLeftRadius = "0px";
      if (window.matchMedia("(max-width: 505px)").matches) {
        //topRight.style.top = "100px";
        //topRight.style.right = "10px";
        topRight.classList.remove("top-right");
        topNav.classList.remove("top-nav");
        topRight.classList.add("top-right-scrolled");
        topNav.classList.add("top-nav-scrolled");
      }else {
        topRight.classList.remove("top-right-scrolled");
        topNav.classList.remove("top-nav-scrolled");
        topRight.classList.add("top-right");
        topNav.classList.add("top-nav");
      }
  } else {
    header.style.top = "20px";
    header.style.left = "10px";
    header.style.right = "10px";
    header.style.borderRadius = "10px";
      if (window.matchMedia("(max-width: 505px)").matches) {
        //topRight.style.top = "100px";
        //topRight.style.right = "10px";
        topRight.classList.remove("top-right-scrolled");
        topNav.classList.remove("top-nav-scrolled");
        topRight.classList.add("top-right");
        topNav.classList.add("top-nav");
      }
  }
}
