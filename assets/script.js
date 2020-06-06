// Navbar 
const toggleMenu = document.querySelector('.toggle-menu input');
const nav = document.querySelector('nav ul');

toggleMenu.addEventListener('click', function() {
    nav.classList.toggle('slide');
});
// Navbar

// Smooth Scrolling
    // Event pada saat link di klik
    $('.page-scroll').on('click', function(e) {
        // Ambil isi href
        const tujuan = $(this).attr('href');
        // Tangkap elemen ybs
        const elemenTujuan = $(tujuan);
        // Pindahkan Scroll
        $('html, body').animate({
            scrollTop: elemenTujuan.offset().top - 60
        }, 800);

        e.preventDefault();
    });
// Smooth Scrolling

// Parallax
$(window).on('load', function() {
    $('.parallax').each(function(i) {
        setTimeout(function() {
            $('.parallax').eq(i).addClass('show-parallax');
        }, 50 * i);
    });
});
// Parallax