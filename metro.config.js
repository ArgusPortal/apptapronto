const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: [...defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'), 'png', 'jpg', 'jpeg', 'gif', 'webp', 'psd', 'JPG'],
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  }
};