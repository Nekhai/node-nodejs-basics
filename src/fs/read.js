import fs from "fs";

export const read = async () => {
  fs.readFile("./files/fileToRead.txt", "utf8", (error, data) => {
    if (error) {
      console.log("FS operation failed");
    } else {
      console.log(data);
    }
  });
};
