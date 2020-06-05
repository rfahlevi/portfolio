const toggleMenu = document.querySelector('.toggle-menu input');
const nav = document.querySelector('nav ul');

toggleMenu.addEventListener('click', function() {
    nav.classList.toggle('slide');
});