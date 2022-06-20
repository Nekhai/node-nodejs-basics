import fs from "fs";

export const write = async () => {
  const stream = fs.createWriteStream("./files/fileToWrite.txt");
  const terminal = process.stdin;
  terminal.pipe(stream);
};

write();
