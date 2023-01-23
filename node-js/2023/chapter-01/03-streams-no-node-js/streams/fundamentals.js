import { Readable } from 'node:stream';

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null); // não há mais informações a serem enviadas da stream
      } else {
        const buff = Buffer.from(String(i)); // qual informação queremos converter para o formato buffer
        this.push(buff);
      }
    }, 1000);
  }
}

new OneToHundredStream().pipe(process.stdout);
