import * as fs from "node:fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const initPath = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(initPath, "files",'fileToRead.txt');

const read = async () => {
try{
	const content = await fs.readFile(filePath,({encoding:'utf-8'}));
	console.log(content);
}catch{
	const err = Error("FS operation failed");
	console.error(err);
}
};

await read();