import fs from "fs";

export const rename = async () => {
  const path = "./files/wrongFilename.txt";
  const dest = "./files/wrongFilename.txt";

  fs.rename(path, dest, (error) => {
    try {
      if (error) {
        throw new Error("FS operation failed");
      }
    } catch (err) {
      console.error(err.message);
    }
  });
};

rename();
