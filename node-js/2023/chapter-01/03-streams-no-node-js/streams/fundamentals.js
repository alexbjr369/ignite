import { Readable, Writable, Transform } from 'node:stream';

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

class InvertNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString() * -1);

    // callback(new Error('Number not valid!'), transformed);
    callback(null, Buffer.from(String(transformed)));
  }
}

class MultiplyByTenStream extends Writable {
  // apenas processa o dado, nunca transforma o dado
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString() * 10));
    callback();
  }
}

new OneToHundredStream()
  .pipe(new InvertNumberStream())
  .pipe(new MultiplyByTenStream());
