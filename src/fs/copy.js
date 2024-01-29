import * as fs from "node:fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const initPath = path.dirname(fileURLToPath(import.meta.url));
const folderPath = path.join(initPath, "files");
const newForderPath = path.join(initPath, "files_copy");

const copy = async () => {
  fs.access(newForderPath)
    .then(() => {
      const err = Error("FS operation failed");
      console.error(err);
    })
    .catch(async () => {
      fs.mkdir(newForderPath);
      const files = await fs.readdir(folderPath);
      files.forEach((file) =>
        fs.copyFile(path.join(folderPath, file), path.join(newForderPath, file))
      );
      console.log("folder copied");
    });
};

await copy();
