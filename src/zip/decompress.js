import fs from "fs";
import { createGunzip } from "zlib";

export const decompress = async () => {
  const path = "./files/";
  const writeStream = fs.createWriteStream(`${path}fileToCompress.txt`);
  const readStream = fs.createReadStream(`${path}archive.gz`);

  readStream.pipe(createGunzip()).pipe(writeStream);
};

decompress();
