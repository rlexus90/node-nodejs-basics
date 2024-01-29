import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdout, stdin } from 'process';

const initPath = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(initPath, 'files', 'fileToWrite.txt');

const write = async () => {
  const writableStream = fs.createWriteStream(filePath);
  stdout.write('Program started. For exit press CTRL+C\n');
  stdin.on('data', (data) => writableStream.write(data));
};

await write();
