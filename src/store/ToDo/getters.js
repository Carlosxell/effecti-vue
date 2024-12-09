export default {
  getEditStatus: (state) => state.editing,
  getTodoList: (state) => state.todoList,
  getFormStatus: (state) => state.formIsOpen,
  getTransitionData: (state) => state.transitionData,
}
