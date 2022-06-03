import fs from "fs";

export const read = async () => {
  const path = "./files/fileToRead.txt";

  fs.readFile(path, "utf8", (error, data) => {
    try {
      if (error) {
        throw new Error("FS operation failed");
      } else {
        console.log(data);
      }
    } catch (err) {
      console.error(err.message);
    }
  });
};

read();
