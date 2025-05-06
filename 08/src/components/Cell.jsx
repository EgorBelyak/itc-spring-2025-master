import classes from './Cell.module.css';
import clsx from 'clsx';

import { useDispatch, useSelector } from 'react-redux';
import { onBoardSlice, getFigure } from '../store/reducers/onboard';
import { selectedSlice } from '../store/reducers/selected';
import { Figure } from './figures/Figure';

export const Cell = ({ column, row }) => {
  const color = (column % 2 === row % 2) ? 'white' : 'black';
  const dispatch = useDispatch();

  const { getFigures } = onBoardSlice.selectors;
  const { setFigure } = onBoardSlice.actions;
  const { getSelected } = selectedSlice.selectors;

  const selected = useSelector(getSelected);
  const figures = useSelector(getFigures);

  const slug = getFigure(figures, row, column);

  const handleClick = () => {
    dispatch(setFigure({ row, column, slug: selected }));
  }

  return (
    <div className={clsx(classes.cell, classes[color])}
      onClick={handleClick}
    >
      <Figure slug={ slug }/>
    </div>
  )
}
