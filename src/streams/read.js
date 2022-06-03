import fs from "fs";

export const read = async () => {
  const stream = fs.createReadStream("./files/fileToRead.txt");
  const dest = process.stdout;
  stream.pipe(dest);
};

read();
