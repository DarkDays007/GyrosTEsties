// ========================================
// VARIABLES
// ========================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');
const contactForm = document.getElementById('contactForm');

// ========================================
// HAMBURGER MENU TOGGLE
// ========================================

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// ========================================
// CLOSE MENU WHEN CLICKING NAVIGATION LINKS
// ========================================

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ========================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// ========================================

document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ========================================
// ACTIVE NAVIGATION LINK ON SCROLL
// ========================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========================================
// NAVBAR BACKGROUND ON SCROLL
// ========================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// SCROLL TO TOP BUTTON
// ========================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// CONTACT FORM SUBMISSION
// ========================================

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !message) {
            showNotification('Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία!', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Παρακαλώ εισάγετε έγκυρο email!', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Το μήνυμά σας στάλθηκε με επιτυχία! Θα επικοινωνήσουμε σύντομα μαζί σας.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would send this data to a server
        console.log('Form Data:', { name, email, phone, message });
    });
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================

function showNotification(message, type = 'success') {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: white;
            padding: 1.5rem 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            gap: 1rem;
            max-width: 400px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        
        .notification-success {
            border-left: 4px solid #27ae60;
        }
        
        .notification-error {
            border-left: 4px solid #e74c3c;
        }
        
        .notification i:first-child {
            font-size: 1.5rem;
        }
        
        .notification-success i:first-child {
            color: #27ae60;
        }
        
        .notification-error i:first-child {
            color: #e74c3c;
        }
        
        .notification span {
            flex: 1;
            color: #34495e;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: #95a5a6;
            cursor: pointer;
            font-size: 1.2rem;
            padding: 0;
            transition: color 0.3s ease;
        }
        
        .notification-close:hover {
            color: #34495e;
        }
        
        @media (max-width: 480px) {
            .notification {
                right: 10px;
                left: 10px;
                max-width: none;
            }
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        style.id = 'notification-styles';
        document.head.appendChild(style);
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Close button handler
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.menu-item, .info-card, .feature-item');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// ========================================
// LOADING SCREEN (OPTIONAL)
// ========================================

window.addEventListener('load', () => {
    // Remove loading class if you add one
    document.body.classList.add('loaded');
});

// ========================================
// PREVENT SCROLL RESTORATION ON PAGE LOAD
// ========================================

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// ========================================
// KEYBOARD ACCESSIBILITY
// ========================================

// Close menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ========================================
// CONSOLE MESSAGE (OPTIONAL FUN TOUCH)
// ========================================

console.log('%cΤο Γυράδικο 🥙', 'font-size: 24px; font-weight: bold; color: #e67e22;');
console.log('%cΑυθεντικές Ελληνικές Γεύσεις από το 1997', 'font-size: 14px; color: #34495e;');
console.log('%cΕνδιαφέρεστε για το πώς δουλεύει αυτή η ιστοσελίδα; Επικοινωνήστε μαζί μας!', 'font-size: 12px; color: #95a5a6;');

// ========================================
// PERFORMANCE MONITORING (OPTIONAL)
// ========================================

// Log page load time
window.addEventListener('load', () => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`⚡ Page loaded in ${loadTime}ms`);
});

// ========================================
// LAZY LOADING IMAGES (OPTIONAL)
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// SERVICE WORKER REGISTRATION (OPTIONAL - FOR PWA)
// ========================================

// Uncomment to enable service worker for offline functionality
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('✅ Service Worker registered successfully:', registration.scope);
            })
            .catch(error => {
                console.log('❌ Service Worker registration failed:', error);
            });
    });
}
*/

// ========================================
// ANALYTICS TRACKING (PLACEHOLDER)
// ========================================

// Add your analytics code here
// Example: Google Analytics, Facebook Pixel, etc.

function trackEvent(category, action, label) {
    console.log('📊 Event tracked:', { category, action, label });
    
    // Example for Google Analytics
    // gtag('event', action, {
    //     'event_category': category,
    //     'event_label': label
    // });
}

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('Button', 'Click', btn.textContent);
    });
});

// Track menu item views (when they come into viewport)
const menuObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const itemName = entry.target.querySelector('.item-name')?.textContent;
            if (itemName) {
                trackEvent('Menu', 'View', itemName);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.menu-item').forEach(item => {
    menuObserver.observe(item);
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Format phone number
function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{4})(\d{3})(\d{3})$/);
    if (match) {
        return match[1] + ' ' + match[2] + ' ' + match[3];
    }
    return phoneNumber;
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Website initialized successfully!');
    
    // Add any initialization code here
    
    // Example: Log viewport size
    console.log(`📱 Viewport: ${window.innerWidth}x${window.innerHeight}`);
});

// ========================================
// ERROR HANDLING
// ========================================

window.addEventListener('error', (e) => {
    console.error('⚠️ JavaScript Error:', e.message);
    // You could send this to an error tracking service
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (e) => {
    console.error('⚠️ Unhandled Promise Rejection:', e.reason);
});
