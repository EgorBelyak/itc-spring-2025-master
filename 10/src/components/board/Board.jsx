import classes from './Board.module.css'
import { Row } from './Row';
import { Cell } from './Cell';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { positionSlice } from '../../store/slices/position';
import { bindSlice } from '../../store/slices/bind';

const range = () => [ 0, 1, 2 ];

export const Board = () => {
  const dispatch = useDispatch();
  const { moveDir } = positionSlice.actions;
  const { getBinds } = bindSlice.selectors;
  const binds = useSelector(getBinds);
  const { up, down, left, right } = binds;

  useEffect(() => {
    const handleKeyDown = (e) => {
      let direction = null;
      if (e.code === up) direction = 'UP';
      else if (e.code === down) direction = 'DOWN';
      else if (e.code === left) direction = 'LEFT';
      else if (e.code === right) direction = 'RIGHT';

      if (direction) {
        dispatch(moveDir({ direction }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [dispatch, up, down, left, right]);

  return (
    <div className={classes.board}>
      {
        range().map((row) => {
          return (
            <Row key={row}>
              { range().map((column) => <Cell key={column} row={row} column={column}/>) }
            </Row>
          )
        })
      }
    </div>
  );
}