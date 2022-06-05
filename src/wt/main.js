import os from "os";
import { Worker } from "worker_threads";

export const performCalculations = async () => {
  const cpusCount = os.cpus().length;

  function newWorker(n) {
    return new Promise((resolve, reject) => {
      const worker = new Worker("./worker.js", {
        workerData: 10 + n,
      });
      worker.on("message", resolve);
      worker.on("error", reject);
      worker.on("exit", (code) => {
        if (code !== 0) {
          console.log("error");
        }
      });
    });
  }

  function arrPromises() {
    let arr = [];

    for (let i = 0; i < cpusCount; i++) {
      arr.push(newWorker(i));
    }

    return arr;
  }

  const promiseAll = await Promise.allSettled(arrPromises());

  console.log(
    promiseAll.map((item) =>
      item.status === "fulfilled"
        ? { status: "resolved", data: item.value }
        : { status: "error", data: null }
    )
  );
};

performCalculations();
