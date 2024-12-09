export default {
  setDialogStatus({ commit }, status) {
    commit('SET_DIALOG_STATUS', status)
  },
  changeTaskStatus({ commit }, val) {
    commit('CHANGE_TASK_STATUS', val)
  },
  deleteTask({ commit }, id) {
    commit('DELETE_TASK', id)
  },
}
