import { createStore } from 'vuex'

const modulesA = { // 模块A
  namespaced: true
}

const modulesB = { // 模块B
  namespaced: true,
  state: {
    name: '掌声'
  },
  getters: {
    setname (state) {
      return state.name + '李丽丽'
    }
  }
}

export default createStore({
  modules: { // 总模块
    modulesB, // 子模块
    modulesA
  }
})
