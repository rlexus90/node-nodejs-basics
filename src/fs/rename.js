import * as fs from "node:fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const initPath = path.dirname(fileURLToPath(import.meta.url));
const oldFile = path.join(initPath, "files", "wrongFilename.txt");
const newFile = path.join(initPath, "files", "properFilename.md");

const rename = async () => {
  fs.access(newFile)
    .then(() => {
      const err = Error("FS operation failed");
      console.error(err);
    })
    .catch(async () => {
      fs.access(oldFile)
        .then(() => {
          fs.rename(oldFile, newFile);
          console.log("file renamed");
        })
        .catch(() => {
          const err = Error("FS operation failed");
          console.error(err);
        });
    });
};

await rename();
