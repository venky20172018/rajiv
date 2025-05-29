
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-button');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('show');
        
        // Animate hamburger icon
        const hamburgers = mobileMenuBtn.querySelectorAll('.hamburger');
        hamburgers.forEach((hamburger, index) => {
            if (mobileNav.classList.contains('show')) {
                if (index === 0) {
                    hamburger.style.transform = 'rotate(45deg) translate(5px, 5px)';
                } else if (index === 1) {
                    hamburger.style.opacity = '0';
                } else {
                    hamburger.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                }
            } else {
                hamburger.style.transform = 'none';
                hamburger.style.opacity = '1';
            }
        });
    });

    // Close mobile menu when clicking on links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('show');
            const hamburgers = mobileMenuBtn.querySelectorAll('.hamburger');
            hamburgers.forEach(hamburger => {
                hamburger.style.transform = 'none';
                hamburger.style.opacity = '1';
            });
        });
    });

    // Gallery Modal
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryModal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const modalClose = document.getElementById('modal-close');

    // Open modal when clicking on gallery items
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-image');
            modalImage.src = imageSrc;
            galleryModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    function closeModal() {
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    modalClose.addEventListener('click', closeModal);
    
    // Close modal when clicking on background
    galleryModal.addEventListener('click', function(e) {
        if (e.target === galleryModal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && galleryModal.style.display === 'flex') {
            closeModal();
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form Submission
    const enrollmentForm = document.getElementById('enrollment-form');
    
    enrollmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Simple validation
        const requiredFields = ['parentName', 'childName', 'phone', 'childAge', 'grade'];
        let isValid = true;
        
        requiredFields.forEach(field => {
            const input = this.querySelector(`[name="${field}"]`);
            if (!formObject[field] || formObject[field].trim() === '') {
                input.style.borderColor = '#ef4444';
                isValid = false;
            } else {
                input.style.borderColor = '#d1d5db';
            }
        });
        
        if (isValid) {
            // Show success message
            alert('Thank you for your interest! We will contact you soon.');
            
            // Reset form
            this.reset();
            
            // Log form data (in a real application, you would send this to a server)
            console.log('Form submitted:', formObject);
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .program-card, .testimonial-card, .gallery-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Header background change on scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'white';
            header.style.backdropFilter = 'none';
        }
    });

    // Add loading state for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // If image is already cached and loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Utility function for debouncing
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

// Optimized scroll handling
const handleScroll = debounce(function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'white';
        header.style.backdropFilter = 'none';
    }
}, 10);

window.addEventListener('scroll', handleScroll);
