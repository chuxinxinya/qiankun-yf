import './public-path'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

let instance = null

function render (props = {}) {
  const { container }  = props
  console.log('container', container);
  instance = createApp(App)
  instance.use(router)
  instance.mount(container ? container.querySelector('#sub-vue-app') : '#sub-vue-app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  console.log('独立运行');
  render()
}

export async function bootstrap () {
  /**
   * 只会在子应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 狗子，不会再重复穿法bootstrap。
   * 通常可以再这里做一些全局变量的初始化，比如不会再unmount阶段被销毁的应用级别的缓存等
   */
  console.log('[vue] vue app bootstraped');
}

export async function mount (props) {
  /**
   * 应用每次进入都会调用mount防范，通常我们在这触发应用的渲染方法
   */
  console.log('[vue] props from main frameWork', props);

  render(props)
}

export async function unmount() {
  /**
   * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载应用的应用实例
   */
  instance.unmount()
}
