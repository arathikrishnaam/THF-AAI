document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const menuToggle = document.createElement('div');
    menuToggle.innerHTML = '☰';
    menuToggle.style.display = 'none';
    menuToggle.style.cursor = 'pointer';
    menuToggle.style.fontSize = '24px';
    menuToggle.style.color = 'white';

    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
        const nav = document.querySelector('nav');
        nav.style.display = 'none';

        menuToggle.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
        });

        document.querySelector('header').insertBefore(menuToggle, document.querySelector('nav'));
    }
});
