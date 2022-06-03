import fs from "fs";

export const list = async () => {
  path = "./files";

  fs.readdir(path, (error, items) => {
    try {
      if (error) {
        throw new Error("FS operation failed");
      } else {
        items.forEach((item) => console.log(item));
      }
    } catch (err) {
      console.error(err.message);
    }
  });
};

list();
