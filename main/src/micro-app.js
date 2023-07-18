const microApps = [ 
  {
    name: 'sub-vue',
    entry: '//localhost:7777/',
    activeRule: '/sub-vue',
    container: '#sub-vue-viewport',
    props: {
      routerBase: '/sub-vue'
    }
  },
  {
    name: 'sub-react',
    entry: '//localhost:3000/',
    activeRule: '/sub-react',
    container: '#sub-react-viewport',
    props: {
      routerBase: '/sub-react'
    }
  }
]

export default microApps