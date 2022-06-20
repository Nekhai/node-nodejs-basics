import fs from "fs";

export const create = async () => {
  const text = "I am fresh and young";
  const path = "./files/fresh.txt";

  fs.writeFile(path, text, { flag: "wx" }, (error) => {
    try {
      if (error) {
        throw new Error("FS operation failed");
      }
    } catch (err) {
      console.error(err.message);
    }
  });
};

create();
