// Update the copyright element with the current year
document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    console.log(currentYear)

    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        copyrightElement.textContent += currentYear;
    }
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


