import Vue from 'vue'
import Vuex from 'vuex'

import TodoModule from './ToDo/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TodoModule: { ...TodoModule },
  },
})
