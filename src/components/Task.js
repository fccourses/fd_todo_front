import { useDispatch } from 'react-redux';
import * as ActionCreators from '../actions';

const Task = props => {
  const { body, deadline, isDone, id } = props;
  const dispatch = useDispatch();
  const isDoneHandler = ({ target: { checked } }) => {
    
  };
  const deleteHandler = () =>
    dispatch(ActionCreators.deleteTaskRequest({ id }));

  return (
    <article>
      <hr />
      {id}
      <p>{body}</p>
      <input type='checkbox' checked={isDone} onChange={isDoneHandler} />
      <div>{deadline}</div>
      <button disabled={!isDone} onClick={deleteHandler}>DELETE TASK</button>
      <hr />
    </article>
  );
};

export default Task;
