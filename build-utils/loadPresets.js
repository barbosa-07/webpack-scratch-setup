const { merge } = require("webpack-merge");

const applyPreset = (env) => {
  const { presets, mode } = env;
  /**
   * @type {string[]}
   */

  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map((presetName) => {
    return require(`./presets/webpack.${presetName}`)(env);
  });
  return merge({}, ...mergedConfigs);
};

module.exports = applyPreset;
