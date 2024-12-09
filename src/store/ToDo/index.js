import { state } from './state.js'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

export default {
  namespaced: true,
  state: state(),
  getters,
  actions,
  mutations,
}
