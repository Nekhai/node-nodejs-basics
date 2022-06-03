export const parseArgs = () => {
  const value = process.argv[3];
  const value2 = process.argv[5];

  console.log(`propName is ${value} prop2Name is ${value2}`);
};

parseArgs();
