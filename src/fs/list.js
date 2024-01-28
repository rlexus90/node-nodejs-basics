import * as fs from "node:fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const initPath = path.dirname(fileURLToPath(import.meta.url));
const folderPath = path.join(initPath, "files");

const list = async () => {
  try {
    const files = await fs.readdir(folderPath);
    console.log(files);
  } catch {
    const err = Error("FS operation failed");
    console.error(err);
  }
};

await list();
