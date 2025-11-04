module.exports = {
  gerarMensagemPersonalizada: (login, senha) => {
    let acesso;

    if (login === "Laura" && senha === "12345") {
    acesso = "Logado";

    } else {
        acesso = "Negado";
    }

    return `Olá, ${login}, seu acesso foi: ${acesso}!`;
  }
};
