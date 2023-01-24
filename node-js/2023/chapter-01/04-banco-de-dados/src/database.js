import fs from 'node:fs/promises';

const databasePath = new URL('db.json', import.meta.url);

export class Database {
  #database = {};

  constructor() {
    fs.readFile(databasePath, 'utf8')
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        // se não existir o arquivo, ele será criado
        this.#persist();
      });
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database));
  }

  select(table) {
    const data = this.#database[table] ?? [];
    return data;
  }

  insert(table, data) {
    // se já existe um array 'table' na tabela 'database'
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push();
    } else {
      this.#database[table] = [data];
    }

    this.#persist();

    return data;
  }
}
