import {
  ADD_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  DELETE_TODO
} from '../constants/ActionTypes';

const initialState = [
  {
    text: "Use Redux",
    completed: false,
    id: 0
  },
  {
    text: "Use CodeSandBox",
    completed: true,
    id: 1
  }
];

export default function todos(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ];
    case EDIT_TODO:
      return state.map(
        todo => todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    case COMPLETE_TODO:
      return state.map(
        todo => todo.id === action.id ? { ...todo, completed: !todo.completed} : todo
      );
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}