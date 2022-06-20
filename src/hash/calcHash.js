import crypto from "crypto";
import fs from "fs";

export const calculateHash = async () => {
  const path = "./files/fileToCalculateHashFor.txt";

  fs.readFile(path, (error, data) => {
    const hash = crypto.createHash("sha256").update(data).digest("hex");
    console.log(hash);
  });
};

calculateHash();
