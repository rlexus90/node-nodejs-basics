import * as fs from "node:fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const initPath = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(initPath, "files", "fileToRemove.txt");

const remove = async () => {
  fs.access(file)
    .then(() => {
      fs.rm(file);
      console.log("file deleted");
    })
    .catch(() => {
      const err = Error("FS operation failed");
      console.error(err);
    });
};

await remove();
