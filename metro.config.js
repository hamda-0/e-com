const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const customConfig = {
  // Your additional Metro configurations (if needed)
};

// Merge default config with custom config
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Wrap with Reanimated Metro Config
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
