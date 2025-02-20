function showModal() {
    let modal = document.querySelector('.responsive-sm');
    if (modal) {
        modal.classList.toggle('view');
    }
}
let scrollTimeout;
window.onscroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top + 80 >= offset && top < offset + height) {
                navLinks.forEach(link => link.classList.remove('active'));

                document.querySelectorAll(`nav a[href="#${id}"]`).forEach(link => {
                    link.classList.add('active');
                });
            }
        });
    }, 100); // Adjust delay for smooth performance
};
