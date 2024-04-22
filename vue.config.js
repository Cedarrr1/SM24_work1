const { defineConfig } = require("@vue/cli-service");
const { VantResolver } = require("@vant/auto-import-resolver");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      //当 unplugin-vue-components 版本大于等于 0.26.0 时，使用以下写法
      AutoImport.default({ resolvers: [VantResolver()] }),
      Components.default({ resolvers: [VantResolver()] }),
    ],
  },
  chainWebpack: (config) => {
    // 设置 Vue 的全局特性标志
    config.plugin("define").tap((definitions) => {
      definitions[0]["__VUE_OPTIONS_API__"] = true; // 是否启用 Options API
      definitions[0]["__VUE_PROD_DEVTOOLS__"] = false; // 是否在生产环境启用 DevTools
      definitions[0]["__VUE_PROD_HYDRATION_MISMATCH_DETAILS__"] = false; // 是否启用详细的水合不匹配警告
      return definitions;
    });
  },
});
