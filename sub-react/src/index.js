import './public-path'
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

let root = null

function render (props) {
  const { container } = props
  root = createRoot(container ? container.querySelector('#sub-react-root') : document.querySelector('#sub-react-root'))
  root.render(<App/>)
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log('[react18] react app bootstrap');
}

export async function mount(props) {
  console.log('[react18] props from main framework', props);
  render(props)
}

export async function unmount(props) {
  // const { container } = props
  // const root = createRoot(container ? container.querySelector('#sub-react-root') : document.querySelector('#sub-react-root'))
  root.unmount()
}

if (process.env.NODE_ENV === 'development') {
  window.qiankunLifecycle = {
    bootstrap,
    mount,
    unmount
  }
}

