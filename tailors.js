document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu');
    const navList = document.querySelector('.nav-common ul');

    menuIcon.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    // Close the mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-common ul li a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navList.classList.remove('show');
        });
    });
});