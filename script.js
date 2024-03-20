document.addEventListener("DOMContentLoaded", function() {
    // Update the copyright element with the current year
    const currentYear = new Date().getFullYear();

    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        copyrightElement.textContent += currentYear;
    }

    // FadeIn Effect for articles and .banners:

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.05 // Adjust as needed
    };

    // Callback function to handle intersection changes
    function handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }

    // Create a new IntersectionObserver
    const observer = new IntersectionObserver(handleIntersect, options);

    // Select all articles
    const article = document.querySelectorAll('article');

    // Observe each banner
    article.forEach(article => {
        observer.observe(article);
    });

    // Select all articles
    const banner = document.querySelectorAll('.banner');

    // Observe each banner
    banner.forEach(banner => {
        observer.observe(banner);
    });
});


// Toggles contact details overlay
function toggleOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'flex' : 'none';


        var overlayContent = document.createElement("div")
        overlayContent.className = "overlay_content";
        overlayContent.innerHTML = `
            <div id="contact_logo">
                <i class="fa-solid fa-droplet"></i>
            </div>
            <div id="contact_details">
                <h2>flemming vilhelmsen</h2>
                <h4>gurrelund vvs</h4>
                <br>
                <p>tel. 28 57 44 29</p>
                <p>fv@gurrelundvvs.dk</p>
                <p>Gurrevej 534, 3080 Tikøb</p>
            </div>
            <i id="close_button" class="fa-solid fa-circle-xmark" onclick="toggleOverlay()"></i>
        `;
        overlay.innerHTML = ""; // Clear previous content
        overlay.append(overlayContent);
}

// Scroll to behaviour for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


// For mobile menu
function toggleMenu() {
    menuDiv = document.getElementById("mobile_menu")
    menuButton = document.getElementById("menu_button")
    // Display the menu
    menuDiv.style.display = (menuDiv.style.display === 'none' || menuDiv.style.display === '') ? 'flex' : 'none';

    if (menuButton.className === "fa-solid fa-bars") {
        menuButton.className = "fa-solid fa-circle-xmark";
        console.log("on")
    } else {
        menuButton.className = "fa-solid fa-bars";
        console.log("off")
    }
}



