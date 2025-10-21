module.exports = {
  gerarMensagemPersonalizada: (nome, idade, apelido) => {
    let faixaEtaria;
    

    if (idade < 12) {
      faixaEtaria = "criança";
    } else if (idade < 18) {
      faixaEtaria = "adolescente";
    } else {
      faixaEtaria = "adulto";
    }

    
      
    return `Olá, ${nome} ou ${apelido}! Você é um(a) ${faixaEtaria}`;
  }
};