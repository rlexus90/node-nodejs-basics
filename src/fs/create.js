import * as fs from "node:fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const text = "I am fresh and young";
const initPath = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(initPath, "files", "fresh.txt");

const create = async () => {
  fs.access(filePath)
    .then(() => {
      const err = Error("FS operation failed");
      console.log(err);
    })
    .catch(() => {
      fs.writeFile(filePath, text);
      console.log("file created");
    });
};

await create();
