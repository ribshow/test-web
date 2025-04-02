const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

document
  .getElementById("form-register")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Pegando os dados enviados no imput
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Exibe os dados no pop-up
    document.getElementById(
      "popup-content"
    ).innerHTML = `<span class="text-black">Nome</span>: ${name}<br>Email: ${email}<br>Senha: ${password}`;
    document.getElementById("popup").classList.remove("hidden");
  });

// fechar o pop-up
function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
