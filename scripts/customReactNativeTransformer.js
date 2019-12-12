const {
  transform,
  getCacheKey
} = require("metro-react-native-babel-transformer/src/index");

function customTransform(config) {
  config.options.hot = false;
  return transform(config);
}

module.exports = {
  transform: customTransform,
  getCacheKey
};
