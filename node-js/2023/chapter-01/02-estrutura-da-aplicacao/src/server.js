import http from 'node:http';

const server = http.createServer((req, res) => {
  const { method, url } = req;

  console.log(method, url); // result: GET /

  return res.end('Hello World!');
});

server.listen(3333);
