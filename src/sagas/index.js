import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/types';
import { getTasksSaga } from './taskSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.GET_TASK_REQUEST, getTasksSaga);
}

export default rootSaga;
