document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in-left');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('scrolled');
        } else {
            element.classList.remove('scrolled');
        }
    });
});
