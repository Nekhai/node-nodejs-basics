import fs from "fs";

export const list = async () => {
  fs.readdir("./files", (error, items) => {
    if (error) {
      console.log("FS operation failed");
    } else {
      items.forEach((item) => console.log(item));
    }
  });
};
