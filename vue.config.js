const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/GestorTareas-Planilla/'  // Nombre exacto del repositorio
    : '/'
});

