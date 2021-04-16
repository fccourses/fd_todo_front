import ACTION_TYPES from './types';

export const createTaskRequest = ({ task }) => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
  payload: { task },
});

export const createTaskSuccess = ({ task }) => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  payload: { task },
});

export const createTaskError = ({ error }) => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  payload: { error },
});

export const getTaskRequest = ({ page, limit } = {}) => ({
  type: ACTION_TYPES.GET_TASK_REQUEST,
  payload: { page, limit },
});

export const getTaskSuccess = ({ tasks } = {}) => ({
  type: ACTION_TYPES.GET_TASK_SUCCESS,
  payload: { tasks },
});

export const getTasksError = ({ error }) => ({
  type: ACTION_TYPES.GET_TASK_ERROR,
  payload: { error },
});
