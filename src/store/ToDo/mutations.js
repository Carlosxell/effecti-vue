export default {
  ADD_TASK(state, task) {
    state.todoList = [task, ...state.todoList]
  },
  ADD_TRANSITION_DATA(state, task) {
    state.transitionData = task
  },
  EDIT_TASK(state, task) {
    state.todoList = state.todoList.map((item) => {
      return item.id === task.id ? { ...item, ...task } : item
    })
  },
  SET_FORM_STATUS(state, status) {
    state.formIsOpen = status
  },
  SET_EDIT_STATUS(state, status) {
    state.editing = status
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
