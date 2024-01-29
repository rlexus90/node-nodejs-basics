import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {stdout} from 'process';

const initPath = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(initPath, 'files', 'fileToRead.txt');

const read = async () => {
const readStream = fs.createReadStream(filePath);
stdout.write(`start reading \n`);
readStream.on('data',(data)=>stdout.write(data));
readStream.on('close',()=>stdout.write('\n end reading'));
};

await read();