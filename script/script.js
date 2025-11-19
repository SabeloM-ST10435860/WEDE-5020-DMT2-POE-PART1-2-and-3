
// This show the clients details when you click on the logo

const clientDescriptions = {
                "Inn-Connect Telecoms": "Inn-Connect Telecoms is a leading telecom provider offering connectivity, cloud PBX, and VoIP solutions.",
                "Kande Properties": "Kande Properties specializes in real estate development, property management, and smart building solutions.",
                "East Side Academy": "East Side Academy is a top-performing educational institution integrating smart-class technology.",
                "Sabelo Logistics": "Sabelo Logistics delivers transport, fleet management, and digital tracking services across South Africa.",
                "Zero Bank": "Zero Bank is a digital-first financial institution offering secure online banking and cloud-powered financial services."
            };

            const modal = document.getElementById("clientModal");
            const clientName = document.getElementById("clientName");
            const clientDetails = document.getElementById("clientDetails");
            const closeBtn = document.querySelector(".close-btn");

            document.querySelectorAll(".Clients figure").forEach(fig => {
                fig.addEventListener("click", () => {
                    const name = fig.getAttribute("data-client");
                    clientName.textContent = name;
                    clientDetails.textContent = clientDescriptions[name] || "No additional details available.";
                    modal.style.display = "flex";
                });
            });

            closeBtn.onclick = () => modal.style.display = "none";

            window.onclick = (e) => {
                if(e.target === modal) modal.style.display = "none";
            };

// This highlits the current page you are viewing
            const currentPage = window.location.pathname.split('/').pop();

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
    if (link.href.includes(currentPage)) {
        link.classList.add('active');
    }
});

// Get all service cards
const serviceCards = document.querySelectorAll('.service-card');



// SUCCESS POPUP LOGIC
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // stop real submit for now

    document.getElementById("success-popup").style.display = "flex";

    // clear fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
});

document.getElementById("close-popup").onclick = () => {
    document.getElementById("success-popup").style.display = "display";
};

// Toggle mobile menu
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("active");
});
