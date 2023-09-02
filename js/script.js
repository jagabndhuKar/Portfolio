//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon'); // Use a dot before 'menu-icon' to select by class
let navbar = document.querySelector('.navebar'); // Correct the class name 'navebar' to 'navbar'
let footer = document.querySelector('.footer');

menuIcon.onclick = () => { // Use 'onclick' instead of 'onclicK'
    menuIcon.classList.toggle('bx-x'); // Correct the comma to a period before 'classList'
    navbar.classList.toggle('active');
};


// Select all sections and navigation links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Add a scroll event listener to the window
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach((sec) => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all navigation links
            navLinks.forEach((link) => {
                link.classList.remove('active');
            });
             
            // active sectons for animatio on scroll

            sec.classList.add('show-animate');

            // Add 'active' class to the corresponding navigation link
            let correspondingLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        } else{
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');

    // Toggle the 'sticky' class based on scroll position
    header.classList.toggle('sticky', top > 100);

    menuIcon.classList.remove('bx-x'); // Correct the comma to a period before 'classList'
    navbar.classList.remove('active');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};