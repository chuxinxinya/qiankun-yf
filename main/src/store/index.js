import { defineStore } from 'pinia'

export const useSystemFlag = defineStore('useSystemFlag', {
  state: () => ({
    subAppFlag: false
  }),
  actions: {
    changeSystem(type) {
      this.subAppFlag = type
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'pinia',
        storage: window.localStorage
      }
    ]
  }
})