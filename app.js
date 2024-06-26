const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    setTimeout(() => {
      const responseMessage = document.getElementById("responseMessage");
      responseMessage.style.display = "block";
      responseMessage.innerHTML = `<p>Thank you, ${name}! Your message has been sent successfully.</p>`;

      document.getElementById("contactForm").reset();
    }, 500);
  });
