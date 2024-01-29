import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import crypto from "node:crypto";

const initPath = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(initPath, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const hash = crypto.createHash("sha256");
  const stream = fs.createReadStream(filePath);

  stream.on("data", (data) => hash.update(data));
  stream.on("end", () => {
    console.log(hash.digest("hex"));
  });
};

await calculateHash();