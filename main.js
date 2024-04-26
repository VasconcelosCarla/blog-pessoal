document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const headerHeight = document.querySelector('header').offsetHeight;
        const navHeight = document.querySelector('nav').offsetHeight;

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - headerHeight - navHeight,
            behavior: 'smooth'
        });
    });
});