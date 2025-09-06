import classes from './Cell.module.css';
import { onBoard } from '../store/reducers/board';
import { useDispatch, useSelector } from 'react-redux';
import { getSelected, getCells, selectCell } from '../store/reducers/board';

export const Cell = ({ row, col }) => {
  const dispatch = useDispatch();
  const selected = useSelector(getSelected);
  const cells = useSelector(getCells);
  
  const key = `${row}:${col}`;
  const hasPeg = cells[key];
  const isSelected = selected?.row === row && selected?.col === col;
  
  if (!onBoard(row, col)) {
    return <div className={classes.dummy} />;
  }

  return (
    <div 
      className={
        isSelected ? classes.selected : 
        hasPeg ? classes.filled : 
        classes.empty
      }
      onClick={() => dispatch(selectCell({ row, col }))}
    />
  );
};