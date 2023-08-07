const contadorSpan = document.getElementById("contador");

// Verificar se o contador já existe no armazenamento local
if (localStorage.getItem("contadorAcessos")) {
  const contadorAtual = parseInt(localStorage.getItem("contadorAcessos"));
  contadorSpan.textContent = contadorAtual;
} else {
  // Caso o contador não exista no armazenamento local, criar um novo contador
  localStorage.setItem("contadorAcessos", "0");
  contadorSpan.textContent = "0";
}

// Incrementar o contador quando o site for acessado
const novoContador = parseInt(contadorSpan.textContent) + 1;
localStorage.setItem("contadorAcessos", novoContador.toString());
contadorSpan.textContent = novoContador;

// Atualizar o contador quando a página for fechada ou recarregada
window.addEventListener("beforeunload", () => {
  const contadorAtual = parseInt(localStorage.getItem("contadorAcessos"));
  if (contadorAtual > 0) {
    const novoContador = contadorAtual - 1;
    localStorage.setItem("contadorAcessos", novoContador.toString());
  }
});
