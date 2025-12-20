function goToSlide(index) {
  const slides = document.querySelectorAll(".slide");
  slides[index].scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  if (!form) return;

  form.addEventListener("submit", function () {
    successMessage.style.display = "block";

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  });
});



