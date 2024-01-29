import { stdout, stdin } from 'process';
import { Transform } from 'stream';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const str = chunk.toString().split('').reverse().join('');
      this.push('Result: ' + str);
      callback();
    },
  });

  stdout.write(
    'Program started, enter your text' + '\n' + 'To exit press CTRL+C' + '\n'
  );

  stdin.pipe(transformStream).pipe(stdout);
};

await transform();
