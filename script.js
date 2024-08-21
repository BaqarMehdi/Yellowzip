document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
});