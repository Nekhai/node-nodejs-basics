export const parseEnv = () => {
  const envName = Object.keys(process.env).find((el) => el.includes("RSS_"));
  const envValue = process.env[envName];

  console.log(`${envName}=${envValue}`);
};

parseEnv();
