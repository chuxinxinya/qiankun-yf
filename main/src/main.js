import { createApp } from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun'
import microApps from './micro-app'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/reset.css'
const app = createApp(App)
app.use(elementPlus)
app.mount('#app')

registerMicroApps(microApps, {
  beforeLoad: app => {
    console.log('before load app name', app.name);
  },
  beforeMount: [
    app => {
      console.log('[lifeCycle] before mount %c%s', 'color:green', app.name);
    }
  ],
  afterMount: [
    app => {
      console.log('[lifeCycle] after mount %c%s', 'color:green', app.name);
    }
  ],
  afterUnmount: [
    app => {
      console.log('[lifeCycle after unmount %c%s]', 'color:green', app.name);
    }
  ]
})

start()
