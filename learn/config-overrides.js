const { override,
  fixBabelImports,addBabelPlugins
 } = require("customize-cra");


module.exports = override(
  // antd按需加载
 fixBabelImports(
    "import", { libraryName: "antd", libraryDirectory: "es", style: "css" }
  ),
  addBabelPlugins(
    ['@babel/plugin-proposal-decorators', { legacy: true }],
  )
);