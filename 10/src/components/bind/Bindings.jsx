import classes from './Bindings.module.css'
import { Bind } from './Bind'
import { useEffect } from 'react'
import { bindSlice } from '../../store/slices/bind';
import { useDispatch, useSelector } from 'react-redux';
import { positionSlice } from '../../store/slices/position';

export const Bindings = () => {
  const { setBind, selectDirection } = bindSlice.actions;
  const { getDirection } = bindSlice.selectors;
  const { setPause } = positionSlice.actions;
  const dispatch = useDispatch();
  const direction = useSelector(getDirection);

  useEffect(() => {
    const bindHandler = (e) => {
      if (direction) {
        e.preventDefault();
        dispatch(setBind({ direction, key: e.code }));
        dispatch(selectDirection(null));
        dispatch(setPause(false));
      }
    };

    document.addEventListener('keydown', bindHandler);
    return () => document.removeEventListener('keydown', bindHandler);
  }, [dispatch, direction]);

  return (
    <div className={classes.bindings}>
      <Bind direction="up" />
      <Bind direction="down" />
      <Bind direction="left" />
      <Bind direction="right" />
    </div>
  )
}