import ACTION_TYPES from '../actions/types';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

function taskReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.GET_TASK_SUCCESS: {
      const {
        payload: { tasks },
      } = action;
      return {
        ...state,
        isFetching: false,
        tasks: [...state.tasks, ...tasks],
      };
    }
    case ACTION_TYPES.GET_TASK_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    default:
      return state;
  }
}

export default taskReducer;
