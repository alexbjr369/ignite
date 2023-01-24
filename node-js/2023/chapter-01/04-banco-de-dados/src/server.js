import http from 'node:http';
import { Database } from './database.js';
import { json } from './middlewares/json.js';

const database = new Database();

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  if (method === 'GET' && url === '/users') {
    const users = database.select('users');

    return res.end(JSON.stringify(users));
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = req.body;

    const users = {
      id: 1,
      name,
      email,
    };

    database.insert('users', users);

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
