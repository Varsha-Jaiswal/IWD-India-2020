module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'IWD India 2020 App',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#4A90E2',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  }
}
