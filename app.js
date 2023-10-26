const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.querySelector('.side-menu');

menuToggle.addEventListener('click', () => {
    sideMenu.style.transform = sideMenu.style.transform === 'translateX(0)' ? 'translateX(-100%)' : 'translateX(0)';
});
