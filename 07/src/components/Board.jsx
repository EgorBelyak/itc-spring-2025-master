import classes from './Board.module.css';
import { Cell } from './Cell';
import { useSelector } from 'react-redux';
import { getRemainingPegs } from '../store/reducers/board';

const boardWidth = 7;

const range = () => Array(boardWidth).fill(0).map((_, i) => i);

export const Board = () => {
  const remainingPegs = useSelector(getRemainingPegs);
  
  return (
    <div className={classes.container}>
      <div className={classes.board}>
        {range().map((row) => (
          <div key={row} className={classes.row}>
            {range().map((col) => (
              <Cell key={`${row}-${col}`} row={row} col={col} />
            ))}
          </div>
        ))}
      </div>
      <div className={classes.status}>
        {remainingPegs === 1 ? "You won!" : `Pegs left: ${remainingPegs}`}
      </div>
    </div>
  );
};