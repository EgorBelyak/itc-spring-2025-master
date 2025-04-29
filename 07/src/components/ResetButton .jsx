import { useDispatch } from 'react-redux';
import { resetBoard } from '../store';

export const ResetButton = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(resetBoard())}>
      Reset Game
    </button>
  );
};