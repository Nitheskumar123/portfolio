
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".text", {
        strings: ["FRONTEND DEVELOPER", "WEB DEVELOPER"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
    const menuLink = document.querySelector('.menu');
    const nav = document.querySelector('.nav');

    menuLink.addEventListener('click', function () {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });

});

