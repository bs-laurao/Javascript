module.exports = {
    gerarMensagemLogin: (login, senha) => {
        if (login === 'Laura' && senha === '123456') {
            acesso = 'Liberado';
        } else {
            acesso = 'Negado';
        }
        return `Olá, ${login}! Seu acesso foi  ${acesso}.`;
    }
};