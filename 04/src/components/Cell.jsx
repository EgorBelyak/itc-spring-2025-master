import classes from './Cell.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { setPosition, getRow, getColumn } from '../store/reducers/KnightSlice';
import { useState } from 'react';
import { Knight } from './Knight';

export const Cell = ({ column, row }) => {
  const dispatch = useDispatch();
  const knightRow = useSelector(getRow);
  const knightCol = useSelector(getColumn);
  const [isHovered, setIsHovered] = useState(false);

  const color = (column % 2 === row % 2) ? 'white' : 'black';
  const isKnightHere = row === knightRow && column === knightCol;

  // Проверяем, является ли клетка возможным ходом для коня
  const isPossibleMove = () => {
    const rowDiff = Math.abs(row - knightRow);
    const colDiff = Math.abs(column - knightCol);
    return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
  };

  const handleClick = () => {
    if (isPossibleMove()) {
      dispatch(setPosition({ row, column }));
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Добавляем подсветку через inline-стиль, не изменяя CSS-классы
  const getHighlightStyle = () => {
    if (isHovered && isPossibleMove() && !isKnightHere) {
      return {
        backgroundColor: 'rgba(144, 238, 144, 0.7)',
        cursor: 'pointer'
      };
    }
    return {};
  };

  return (
    <div
      className={clsx(classes.cell, classes[color])}
      style={getHighlightStyle()}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isKnightHere && <Knight />}
    </div>
  );
};