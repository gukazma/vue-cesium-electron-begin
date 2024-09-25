// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import VueCesium from 'vue-cesium'
import 'vue-cesium/dist/index.css'

createApp(App).use(VueCesium, {
    cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
  }).mount('#app')