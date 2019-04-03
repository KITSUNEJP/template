const path = require("path");

module.exports = {
  pages: {
    index: {
      entry: "src/main.js", // エントリーポイントとなるjs
      template: "public/index.html", // テンプレートのHTML
      filename: "index.html" // build時に出力されるファイル名
    }
  },
};