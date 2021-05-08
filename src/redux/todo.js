import * as ActionTypes from './ActionTypes'

const initialState = {
  todo: [
    { activity: 'First ToDo', complete: false, },
    { activity: 'Second ToDo', complete: true, },
  ],
}

export const ToDo = (state = initialState, action) => {
  switch (action.type) {
    // TASK: Change the cases to match with the code
    case ActionTypes.ADD_TODO:
      const todo = action.payload
      todo.id = state.todo.length
      return { ...state, todo: state.todo.concat(todo) }
    case ActionTypes.TOGGLE_COMPLETE:
      let updatedTodo = [...state.todo]
      updatedTodo[action.payload].complete = !updatedTodo[action.payload].complete
      return { ...state, todo: updatedTodo }
    case ActionTypes.CLEAR_TASKS:
      return { ...state, todo: state.todo.filter((task) => !task.complete) }
    case ActionTypes.DELETE_TASKS:
      // TASK implement the final action type
      return {...state, todo: []}
    case ActionTypes.DELETE_ONE_TASK: 
      console.log("made it")
      const Spliced = {...state, todo: state.todo.splice(action.payload,1)}
      return{...state, todo: state.todo.filter((task) => task !== Spliced)}
    default:
      return state
  }
}
