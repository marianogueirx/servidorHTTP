const http = require('http');
const fs = require('fs');
const path = require('path');

// Configurações do servidor
const hostname = '127.0.0.1';
const port = 3000;

// Função para servir arquivos HTML
function servePage(res, filename) {
  const filePath = path.join(__dirname, filename);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end('<h1>Página não encontrada</h1>');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(data);
    }
  });
}

// Criar o servidor
const server = http.createServer((req, res) => {
  const url = req.url;

  // Roteamento básico
  switch (url) {
    case '/':
    case '/index':
    case '/index.html':
      servePage(res, 'index.html');
      break;

    case '/sobre':
    case '/sobre.html':
      servePage(res, 'sobre.html');
      break;

    case '/custos':
    case '/custos.html':
      servePage(res, 'custos.html');
      break;

    case '/procedimentos':
    case '/procedimentos.html':
      servePage(res, 'procedimentos.html');
      break;

    case '/funcionarios':
    case '/funcionarios.html':
      servePage(res, 'funcionarios.html');
      break;

    case '/memorial':
    case '/memorial.html':
      servePage(res, 'memorial.html');
      break;

    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end('<h1>404 - Página não encontrada</h1>');
  }
});

// Iniciar o servidor
server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});

