function showModal(){
            document.querySelector('.responsive-sm').classList.toggle('view');
        }
        let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top+80 >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));

            // Select only links inside the correct nav
            document.querySelectorAll(`nav a[href="#${id}"]`).forEach(link => {
                link.classList.add('active');
            });
        }
    });
};
