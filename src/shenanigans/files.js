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
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/shenanigans/files.ts
var files_exports = {};
__export(files_exports, {
  copyFileAToFileB: () => copyFileAToFileB,
  readJSONFile: () => readJSONFile
});
module.exports = __toCommonJS(files_exports);
var import_fs = __toESM(require("fs"));
var readJSONFile = (jsonFilePath) => {
  if (import_fs.default.existsSync(jsonFilePath)) {
    const jsonContent = import_fs.default.readFileSync(jsonFilePath, "utf-8");
    return JSON.parse(jsonContent);
  } else {
    throw new Error("Ni mierdas");
  }
};
var copyFileAToFileB = (a_url, b_url) => {
  const a = import_fs.default.readFileSync(a_url, "utf-8");
  import_fs.default.writeFileSync(b_url, a, "utf-8");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  copyFileAToFileB,
  readJSONFile
});
