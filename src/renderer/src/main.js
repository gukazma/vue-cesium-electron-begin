// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import VueCesium from 'vue-cesium'
import 'vue-cesium/dist/index.css'

createApp(App).use(VueCesium, {
    cesiumPath: './Cesium-1.115/Build/Cesium/Cesium.js'
  }).mount('#app')