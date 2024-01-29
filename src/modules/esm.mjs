import * as path from'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from "url";
import  './files/c.js';
import a from './files/a.json'  assert { type: "json" };
import b from './files/b.json'  assert { type: "json" };


const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const file = fileURLToPath(import.meta.url);
const dir = path.dirname(file);

console.log(`Path to current file is ${file}`);
console.log(`Path to current directory is ${dir}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

