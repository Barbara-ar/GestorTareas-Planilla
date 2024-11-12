const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue-Clone/GestorTareas-Planilla/'  // Ruta base correcta para GitHub Pages
    : '/'
});
