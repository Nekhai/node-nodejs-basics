import fs from "fs";

export const create = async () => {
  const text = "I am fresh and young";
  const path = "./files/fresh.txt";

  fs.writeFile(path, text, { flag: "wx" }, (error) => {
    if (error) {
      console.log("FS operation failed");
    }
  });
};
