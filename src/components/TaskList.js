import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as ActionCreators from '../actions';
import Task from './Task';

const TaskList = props => {
  const { tasks, isFetching, error } = useSelector(state => state.task);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionCreators.getTasksRequest());
  }, [dispatch]);

  return (
    <div>
      <span style={{ color: 'red' }}>
        {error && (
          <>
            {error.message}
            <button onClick={() => dispatch(ActionCreators.clearTaskError())}>
              X
            </button>
          </>
        )}
      </span>
      {tasks.map(t => (
        <Task {...t} key={t.id} />
      ))}
    </div>
  );
};

/*
const mapStateToProps = ({ task }) => task;
const mapDispatchToProps = dispatch => ({
  getTasksAction: () => dispatch(ActionCreators.getTaskRequest()),
});
 */
export default TaskList;

// <TaskList{...oldProps, ...propsFromMapStateToProps}/>
