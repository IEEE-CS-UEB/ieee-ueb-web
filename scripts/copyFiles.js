const { copyFileAToFileB } = require("../src/shenanigans/files")

copyFileAToFileB('./static-admin/public/engineers.json', '../src/data/engineers.json')
copyFileAToFileB('./static-admin/public/societies.json', '../src/data/societies.json')