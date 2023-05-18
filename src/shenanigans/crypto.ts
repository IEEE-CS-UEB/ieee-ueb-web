import fs, { PathLike } from "fs";
import path from "path";
import { readJSONFile } from "./files";

// CFUEN + ChatGPT
const generateIdForArticlesInFolder = (folderPath: PathLike, prefix: string) => {
  const jsonFilePath: PathLike = "src/data/article-ids.json";

  // Read the existing UUIDs from the JSON file, or create an empty object
  
  // Read the existing UUIDs from the JSON file, or create an empty object
  let fileIDs = {};
  if (fs.existsSync(jsonFilePath)) {
    const jsonContent = fs.readFileSync(jsonFilePath, "utf-8");
    fileIDs = JSON.parse(jsonContent);
  }

  // Loop through all the markdown files in the folder and update the UUIDs
  fs.readdirSync(folderPath)
    .filter((filename) => path.extname(filename).toLowerCase() === ".md")
    .forEach((filename) => {
      const saltyName: string = filename
        .replace(/\.md/gm, '')
        .replace(/\s+/gm, '-')
        .toLowerCase();
      const filePath = path.join(folderPath.toString(), filename);
      const stat = fs.statSync(filePath);

      if (stat.isFile() && saltyName != 'index') {
        const fileID = Object.keys(fileIDs[prefix]).length + 1;
        if (!fileIDs[prefix][saltyName]) {
          fileIDs[prefix][saltyName] = fileID;
          console.log(`Updated ID for file: ${saltyName} (${filename})`);
        }
      }
    });

  // Write the updated UUIDs to the JSON file
  fs.writeFileSync(jsonFilePath, JSON.stringify(fileIDs, null, 2));
  console.log("Done");
};

export { generateIdForArticlesInFolder };
