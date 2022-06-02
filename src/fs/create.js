import fs from "fs";

export const create = async () => {
  const text = "I am fresh and young";
  const path = "./files/fresh.txt";

  try {
    fs.writeFileSync(path, text, { flag: "wx" }, (error) => {
      if (error) {
        throw error;
      }
    });
  } catch (error) {
    console.log("FS operation failed");
  }
};
