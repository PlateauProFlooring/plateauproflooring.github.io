document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('DOMContentLoaded', () => {
    // ... (Your existing JavaScript code for nav toggle, dropdowns, footer year, testimonial slider) ...

    // Gallery Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const itemCategories = item.getAttribute('data-category').split(' '); // Split categories by space

                if (filterValue === 'all' || itemCategories.includes(filterValue)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const dropdowns = document.querySelectorAll('.main-nav .dropdown');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        // Close any open dropdowns when toggling main menu
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    });

    // Dropdown functionality for mobile (click to open/close)
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a:first-child');
        dropdownLink.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) { // Only on mobile
                e.preventDefault(); // Prevent navigating to services.html immediately
                dropdown.classList.toggle('active');
                // Close other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
            }
        });
    });

    // Close mobile nav when a link is clicked (optional, but good UX)
    navList.querySelectorAll('a:not(.dropdown-content a)').forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });


    // Update current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Basic Testimonial Slider (very simple, no actual "slide" animation)
    // For a real slider, you'd use a library like Swiper.js or build more complex JS
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((item, i) => {
            item.style.display = (i === index) ? 'block' : 'none';
        });
    }

    if (testimonials.length > 0) {
        showTestimonial(currentTestimonial);
        // Auto-advance testimonials every 5 seconds
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000); // Change testimonial every 5 seconds
    }
});