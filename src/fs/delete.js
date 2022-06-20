import fs from "fs";

export const remove = async () => {
  const path = "./files/fileToRemove.txt";

  fs.unlink(path, (error) => {
    try {
      if (error) {
        throw new Error("FS operation failed");
      }
    } catch (err) {
      console.error(err.message);
    }
  });
};

remove();
