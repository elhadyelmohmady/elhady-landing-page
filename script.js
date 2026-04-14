// ========================================
// Elhady Landing Page - Script
// ========================================

let currentLang = 'ar';

// Language Toggle
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const html = document.documentElement;

    if (currentLang === 'en') {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        document.body.setAttribute('dir', 'ltr');
    } else {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        document.body.setAttribute('dir', 'rtl');
    }

    // Update all translatable elements
    document.querySelectorAll('[data-ar][data-en]').forEach(el => {
        const text = el.getAttribute(`data-${currentLang}`);
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = text;
        } else {
            el.innerHTML = text;
        }
    });

    // Update lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.textContent = currentLang === 'ar' ? 'EN' : 'عربي';
    });
}

// Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('mobileMenuBtn');
    menu.classList.toggle('active');
    btn.classList.toggle('active');
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('mobileMenuBtn');
    menu.classList.remove('active');
    btn.classList.remove('active');
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll reveal animation
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.feature-card, .step, .offers-text, .offers-visual, .download-text'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (anchor) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Init
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
});
