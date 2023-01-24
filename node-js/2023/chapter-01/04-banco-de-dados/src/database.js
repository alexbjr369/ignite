export class Database {
  #database = {};

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

    return data;
  }
}
