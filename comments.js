// Importa o módulo HTTP nativo do Node.js
const http = require('http');

// Define o hostname e a porta em que o servidor será executado
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Cria o servidor HTTP
const server = http.createServer((req, res) => {
  // Define o cabeçalho da resposta HTTP
  res.statusCode = 200; // Status OK
  res.setHeader('Content-Type', 'text/plain');

  // Envia a resposta com uma mensagem simples
  res.end('Hello, World!\n');
});

// Faz o servidor escutar na porta especificada
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
