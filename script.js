// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Automatically update copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// WhatsApp configuration
// Add your WhatsApp number with country code, without + or spaces.
// Example format: 919876543210
const WHATSAPP_NUMBER = "";

// Contact form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !service || !message) {
    formMessage.textContent = "Please complete all fields.";
    return;
  }

  if (!WHATSAPP_NUMBER) {
    formMessage.textContent =
      "Contact form demo is ready. WhatsApp number needs to be configured before enquiries can be sent.";
    return;
  }

  const text = `Hello Anjali Cloud & Web Solutions!

Name: ${name}
Email: ${email}
Service: ${service}
Project Details: ${message}`;

  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  window.open(whatsappURL, "_blank");

  formMessage.textContent =
    "WhatsApp enquiry opened. Please send the message to complete your enquiry.";

  contactForm.reset();
});
