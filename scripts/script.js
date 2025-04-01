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
