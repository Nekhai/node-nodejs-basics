import fs from "fs";

export const remove = async () => {
  fs.unlink("./files/fileToRemove.txt", (error) => {
    if (error) {
      console.log("FS operation failed");
    }
  });
};
