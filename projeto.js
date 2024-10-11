function Pesquisar() {
    const termoPesquisa = document.getElementById("campopesquisa").value.trim();
  
    if (termoPesquisa === "") {
      alert("[ERROR] Por favor, digite um nome válido.");
    } else {
      alert("Parabéns! Esse personagem é um dos principais: " + termoPesquisa + '!');
    }
  }