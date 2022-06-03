import fs from "fs";

export const copy = async () => {
  const errMassege = "FS operation failed";

  const throwError = (error) => {
    if (error) {
      throw new Error(errMassege);
    }
  };

  const path = "./files";
  const distName = "files_copy";

  fs.mkdir(distName, (error) => {
    try {
      throwError(error);
      fs.readdir(path, (error, items) => {
        try {
          throwError(error);
          items.forEach((item) =>
            fs.copyFile(`${path}/${item}`, `./${distName}/${item}`, (error) => {
              try {
                throwError(error);
              } catch (err) {
                console.error(err.message);
              }
            })
          );
        } catch (err) {
          console.error(err.message);
        }
      });
    } catch (err) {
      console.error(err.message);
    }
  });
};

copy();
