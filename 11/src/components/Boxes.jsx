import { useDispatch, useSelector } from "react-redux";
import { boxesSlice } from "../store/slices/boxes";
import { orderSlice } from "../store/slices/order";
import classes from './Boxes.module.css';
import { useEffect } from "react";

export const Boxes = () => {
  const { getGreenBox, getOrangeBox, canMove } = boxesSlice.selectors;
  const { moveBox } = boxesSlice.actions;
  const { getOrder } = orderSlice.selectors;
  const { next } = orderSlice.actions;
  const greenBox = useSelector(getGreenBox);
  const orangeBox = useSelector(getOrangeBox);
  const order = useSelector(getOrder);
  const dispatch = useDispatch();
  const movesAvailable = useSelector(canMove);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!movesAvailable) return;
      
      const directionMap = {
        ArrowUp: { dr: -1, dc: 0 },
        ArrowDown: { dr: 1, dc: 0 },
        ArrowLeft: { dc: -1, dr: 0 },
        ArrowRight: { dc: 1, dr: 0 },
      };
      
      const direction = directionMap[e.key];
      if (!direction) return;
      
      const currentBox = order === 'green' ? greenBox : orangeBox;
      const newRow = currentBox.row + direction.dr;
      const newColumn = currentBox.column + direction.dc;
      
      // Проверка границ поля (0-7)
      if (newRow >= 0 && newRow < 8 && newColumn >= 0 && newColumn < 8) {
        dispatch(moveBox({
          color: order,
          row: newRow,
          column: newColumn,
        }));
        dispatch(next());
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [order, greenBox, orangeBox, dispatch, movesAvailable]);

  const renderBox = ({ color, row, column, value }) => {
    const left = (column * 100 + 20) + 'px';
    const top = (row * 100 + 20) + 'px';

    const style = {
      left,
      top,
      backgroundColor: color,
    }

    return (
      <div className={classes.box} style={style}>
        <div className={classes.title}>{ order === color ? "[" + value + "]" : value }</div>
      </div>
    )
  }

  return (
    <>
      { renderBox({ ...greenBox, color: 'green' }) }
      { renderBox({ ...orangeBox, color: 'orange' }) }
    </>
  )
}