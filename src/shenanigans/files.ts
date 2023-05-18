import fs, { PathLike } from "fs";

const readJSONFile = (jsonFilePath: PathLike) => {
  if (fs.existsSync(jsonFilePath)) {
    const jsonContent = fs.readFileSync(jsonFilePath, "utf-8");
    return JSON.parse(jsonContent);
  } else {
    throw new Error("Ni mierdas");
  }
};

const copyFileAToFileB = (a_url, b_url) => {
  const a = fs.readFileSync(a_url, "utf-8");
  fs.writeFileSync(b_url, a, "utf-8");
};

export { readJSONFile, copyFileAToFileB };
