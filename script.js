const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const sections = document.querySelectorAll('section');
const navBarLinks = document.querySelectorAll('header nav ul li a');
const navbar = document.querySelector('.navbar');

// Toggle navigation links when the hamburger icon is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Hide navigation links on click
navBarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Combined scroll event listener
window.onscroll = () => {
    // Highlight active section
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navBarLinks.forEach(links => {
                links.classList.remove('nav-active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('nav-active');
            });
        }
    });

    // Change navigation color on scroll for mobile and laptop screens
    const scrollY = window.scrollY;
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    const isLaptop = window.matchMedia("(min-width: 1025px)").matches; 

    if (isMobile) {
        // For mobile screens
        if (scrollY > 50) {
            navbar.style.backgroundColor = '#fff'; 
            navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; 
            navbar.style.borderBottom = '2px solid rgba(0, 0, 0, 0.1)'; 

            // Change nav links color to white
            navBarLinks.forEach(link => {
                link.style.color = 'white'; 
            });

            // Change hamburger menu icon color to black
            const hamburgerSpans = document.querySelectorAll('.hamburger span');
            hamburgerSpans.forEach(span => {
                span.style.backgroundColor = 'black'; 
            });
        } else {
            navbar.style.backgroundColor = 'transparent'; 
            navbar.style.boxShadow = 'none'; 
            navbar.style.borderBottom = 'none'; 

            // Revert nav links color to original
            navBarLinks.forEach(link => {
                link.style.color = '#e0e0e0';
            });

            // Revert hamburger menu icon color to white
            const hamburgerSpans = document.querySelectorAll('.hamburger span');
            hamburgerSpans.forEach(span => {
                span.style.backgroundColor = 'white'; 
            });
        }
    } else if (isLaptop) {
        // For laptop screens
        if (scrollY > 50) {
            navbar.classList.add('fadeInDown');
            navbar.style.backgroundColor = '#fff';
            navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; 
            navbar.style.borderBottom = '2px solid rgba(0, 0, 0, 0.1)';

            navBarLinks.forEach(link => {
                link.style.color = 'black';
            });
        } else {
            navbar.classList.remove('fadeInDown');
            navbar.style.backgroundColor = 'transparent';
            navbar.style.boxShadow = 'none'; 
            navbar.style.borderBottom = 'none';

            navBarLinks.forEach(link => {
                link.style.color = '#e0e0e0'; 
            });
        }
    }
    
   
    calcScrollValue();
};

// Scroll progress function
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#54dfd1 ${scrollValue}%, #3C3D41 ${scrollValue}%)`;
};

window.onload = calcScrollValue;






