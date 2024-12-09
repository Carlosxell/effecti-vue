export const state = () => ({
  formIsOpen: false,
  editing: false,
  transitionData: {},
  todoList: [
    {
      completed: false,
      description: 'lorem ipsum dolor sit amet',
      id: 'user123-m4gz68in-y611s',
      title: 'Number One',
      priority: 'LOW',
    },
    {
      completed: true,
      description: 'lorem ipsum dolor sit amet',
      id: 'user123-m4gz68in-u611s',
      title: 'Number two',
      priority: 'MEDIUM',
    },
    {
      completed: false,
      description: 'lorem ipsum dolor sit amet',
      id: 'user123-m4gz68im-y611s',
      title: 'Number three',
      priority: 'HIGH',
    },
  ],
})
