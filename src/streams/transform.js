import { Transform, pipeline } from "stream";

export const transform = async () => {
  const terminal = process.stdin;
  const dest = process.stdout;

  const transformStream = new Transform({
    transform(chunk, enc, cb) {
      const reverseChunk = chunk.toString().trim().split("").reverse().join("");

      cb(null, reverseChunk + "\n");
    },
  });

  pipeline(terminal, transformStream, dest, (err) => {
    console.log(err);
  });
};

transform();
