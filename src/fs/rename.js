import fs from "fs";

export const rename = async () => {
  fs.rename(
    "./files/wrongFilename.txt",
    "./files/properFilename.md",
    (error) => {
      if (error) {
        console.log("FS operation failed");
      }
    }
  );
};
