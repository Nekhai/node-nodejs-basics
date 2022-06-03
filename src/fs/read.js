import fs from "fs";

export const read = async () => {
  fs.readdir("./files", (error, list) => {
    if (error) {
      console.log("FS operation failed");
    } else {
      list.forEach((item) => console.log(item));
    }
  });
};
