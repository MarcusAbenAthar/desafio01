const btn = document.querySelector(".btn");
const inputNumero = document.querySelector(".inputNumero");
const inputResposta = document.querySelector(".inputResposta");
const erro = document.querySelector(".error");
let valor;

btn.addEventListener("click", function () {
  valor = 0;
  if (
    inputNumero.value == "" ||
    isNaN(inputNumero.value) ||
    inputNumero.value < 0
  ) {
    erro.innerHTML = "Preencha o campo com números positivos.";
    inputNumero.value = "";
    inputResposta.value = "";
  } else {
    erro.innerHTML = "";
    if (inputNumero.value > 0) {
      for (let i = 0; i < inputNumero.value; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
          valor += i;
        }
      }
      inputResposta.value = valor;
    }
  }
});
