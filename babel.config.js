const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.jsx', '.tsx', '.js', '.ts', '.json'],
        root: ['./'],
        alias: {
          '@': path.join(__dirname, './src'),
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
