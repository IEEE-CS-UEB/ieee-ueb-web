var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/shenanigans/crypto.ts
var crypto_exports = {};
__export(crypto_exports, {
  generateIdForArticlesInFolder: () => generateIdForArticlesInFolder
});
module.exports = __toCommonJS(crypto_exports);
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var generateIdForArticlesInFolder = (folderPath, prefix) => {
  const jsonFilePath = "src/data/article-ids.json";
  let fileIDs = {};
  if (import_fs.default.existsSync(jsonFilePath)) {
    const jsonContent = import_fs.default.readFileSync(jsonFilePath, "utf-8");
    fileIDs = JSON.parse(jsonContent);
  }
  import_fs.default.readdirSync(folderPath).filter((filename) => import_path.default.extname(filename).toLowerCase() === ".md").forEach((filename) => {
    const saltyName = filename.replace(/\.md/gm, "").replace(/\s+/gm, "-").toLowerCase();
    const filePath = import_path.default.join(folderPath.toString(), filename);
    const stat = import_fs.default.statSync(filePath);
    if (stat.isFile() && saltyName != "index") {
      const fileID = Object.keys(fileIDs[prefix]).length + 1;
      if (!fileIDs[prefix][saltyName]) {
        fileIDs[prefix][saltyName] = fileID;
        console.log(`Updated ID for file: ${saltyName} (${filename})`);
      }
    }
  });
  import_fs.default.writeFileSync(jsonFilePath, JSON.stringify(fileIDs, null, 2));
  console.log("Done");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateIdForArticlesInFolder
});
