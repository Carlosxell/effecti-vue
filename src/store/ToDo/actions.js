export default {
  addTask({ commit }, task) {
    commit('ADD_TASK', task)
  },
  addTransitionData({ commit }, task) {
    commit('ADD_TRANSITION_DATA', task)
  },
  editTask({ commit }, task) {
    commit('EDIT_TASK', task)
  },
  setFormStatus({ commit }, status) {
    commit('SET_FORM_STATUS', status)
  },
  setEditStatus({ commit }, status) {
    commit('SET_EDIT_STATUS', status)
  },
  changeTaskStatus({ commit }, val) {
    commit('CHANGE_TASK_STATUS', val)
  },
  deleteTask({ commit }, id) {
    commit('DELETE_TASK', id)
  },
}
