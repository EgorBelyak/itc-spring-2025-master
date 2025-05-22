import { useDispatch, useSelector } from "react-redux";
import { boxesSlice } from "../store/slices/boxes";
import { orderSlice } from "../store/slices/order";
import { pinsSlice } from "../store/slices/pins";
import classes from './Boxes.module.css';
import { useEffect } from "react";

export const Boxes = () => {
  const { getGreenBox, getOrangeBox, canMove } = boxesSlice.selectors;
  const { moveBox, modifyValue } = boxesSlice.actions;
  const { getOrder } = orderSlice.selectors;
  const { next } = orderSlice.actions;
  const { getPins } = pinsSlice.selectors;
  const { cleanPins } = pinsSlice.actions;

  const greenBox = useSelector(getGreenBox);
  const orangeBox = useSelector(getOrangeBox);
  const order = useSelector(getOrder);
  const pins = useSelector(getPins);
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
      const otherBox = order === 'green' ? orangeBox : greenBox;
      const newRow = currentBox.row + direction.dr;
      const newColumn = currentBox.column + direction.dc;

      // Проверка границ поля (0-7 для строк и столбцов)
      const isWithinBounds = (
        newRow >= 0 && newRow < 8 &&
        newColumn >= 0 && newColumn < 8
      );

      // Дополнительные ограничения для оранжевого куба
      const isOrangeRestricted = (
        order === 'orange' &&
        newRow >= 6
      );

      // Дополнительные ограничения для зеленого куба
      const isGreenRestricted = (
        order === 'green' &&
        newRow >= 6
      );

      if (
        isWithinBounds &&
        !(newRow === otherBox.row && newColumn === otherBox.column) &&
        !isOrangeRestricted &&
        !isGreenRestricted
      ) {
        // Проверяем наличие пина на новой позиции
        const pinKey = `${newRow}:${newColumn}`;
        const pin = pins[pinKey];

        if (pin) {
          if (order === 'green') {
            // Зеленый квадрат: зеленые пины +, оранжевые -
            const amount = pin.color === 'green' ? pin.value : -pin.value;
            dispatch(modifyValue({ color: 'green', amount }));
          } else {
            // Оранжевый квадрат: оранжевые пины +, зеленые -
            const amount = pin.color === 'orange' ? pin.value : -pin.value;
            dispatch(modifyValue({ color: 'orange', amount }));
          }
          dispatch(cleanPins({ sr: newRow, sc: newColumn, er: newRow, ec: newColumn }));
        }

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
  }, [order, greenBox, orangeBox, dispatch, movesAvailable, pins]);

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
        <div className={classes.title}>{order === color ? "[" + value + "]" : value}</div>
      </div>
    )
  }

  return (
    <>
      {renderBox({ ...greenBox, color: 'green' })}
      {renderBox({ ...orangeBox, color: 'orange' })}
    </>
  )
}