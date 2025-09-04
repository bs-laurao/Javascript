//importando o modulo http
const http = require('http');

//criando o servidor que responde com "Hello World" para todas as requisições
http.createServer((req, res) => {
//definindo o cabeçalho da resposta com status 200 e tipo de conteúdo 
res.writeHead(200, {'Content-Type': 'text/plain'});
//enviando a resposta "Hello World"
res.end('Olá mundo !');
}
//addicionando um log no console para cada requisicao recebida
).listen(8080);