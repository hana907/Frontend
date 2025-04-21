// metro.config.js
module.exports = {
 transformer: {
   getTransformOptions: async () => ({
     transform: {
       experimentalImportSupport: false,
       inlineRequires: true,
     },
   }),
 },
 resolver: {
   sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json'], // Add extensions used in your project
 },
};