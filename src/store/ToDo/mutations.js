export default {
  SET_DIALOG_STATUS(state, status) {
    state.dialogIsOpen = status
  },
  CHANGE_TASK_STATUS(state, { id, status }) {
    state.todoList = state.todoList.map((item) => {
      return item.id === id ? { ...item, completed: !status } : item
    })
  },
  DELETE_TASK(state, id) {
    state.todoList = state.todoList.filter(({ id: localId }) => id !== localId)
  },
}
