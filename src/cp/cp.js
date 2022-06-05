import { fork } from "child_process";

export const spawnChildProcess = async (args) => {
  const child = fork("./files/script.js", args);

  // child.stdout.on("data", (data) => {
  //   console.log("stdout: " + data);
  // });

  //   child.stderr.on("data", function (data) {
  //     console.log("stderr: " + data);
  //   });

  //   child.on("close", function (code) {
  //     console.log("child process exited with code " + code);
  //   });
};

const args = process.argv.slice(2);

spawnChildProcess(args);
