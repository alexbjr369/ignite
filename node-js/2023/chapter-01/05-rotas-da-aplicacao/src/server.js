import http from 'node:http';

import { json } from './middlewares/json.js';
import { routes } from './routes.js';

// 1. query parameters
// parâmetros nomeados que enviamos na requisição (http://localhost:333/users?userId=1&name=John)
//
// 2. route parameters:
// 3. request body:

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  const route = routes.find((route) => {
    return route.method === method && route.path === url;
  });

  if (route) {
    return route.handler(req, res);
  }

  return res.writeHead(404).end();
});

server.listen(3333);
