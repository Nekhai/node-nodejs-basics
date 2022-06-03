import fs from "fs";
import { createGzip } from "zlib";

export const compress = async () => {
  const path = "./files/";
  const readStream = fs.createReadStream(`${path}fileToCompress.txt`);
  const writeStream = fs.createWriteStream(`${path}archive.gz`);

  readStream.pipe(createGzip()).pipe(writeStream);
};

compress();
