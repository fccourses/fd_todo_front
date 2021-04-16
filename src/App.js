import { useDispatch } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import * as ActionCreators from './actions';

function App (props) {
  const dispatch = useDispatch();

  const createTaskAction = task =>
    dispatch(ActionCreators.createTaskRequest({ task }));

  return (
    <div>
      <TaskForm submitHandler={createTaskAction} />

      <TaskList />
    </div>
  );
}

export default App;
