import { fork } from "child_process";

export const spawnChildProcess = async (args) => {
  const child = fork("./files/script.js", args);
};

const arg = process.argv.slice(2);

spawnChildProcess(arg);
