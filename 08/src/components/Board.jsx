import classes from './Board.module.css'
import { Cell } from './Cell'

export const Board = () => {
  const cells = () => {
    const result = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        result.push(<Cell column={col} row={row} />);
      }
    }
    return result;
  }

  return  (
    <div className={classes.board}>
      { cells() }
    </div>
  )
}
