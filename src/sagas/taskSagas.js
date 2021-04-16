import { put } from 'redux-saga/effects';
import * as ActionCreators from '../actions';
import * as API from '../api';

export function * getTasksSaga (action) {
  try {
    const {
      data: { data: tasks },
    } = yield API.getTasks();

    yield put(ActionCreators.getTaskSuccess({ tasks }));
  } catch (error) {
    yield put(ActionCreators.getTasksError({ error }));
  }
}
