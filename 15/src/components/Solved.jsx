import classes from './Solved.module.css'

import { useSelector } from 'react-redux';
import { bonesSlice } from '../store/slices/bones';

const { getSolved } = bonesSlice.selectors;

export const Solved = () => {
  const solved = useSelector(getSolved);

  return (
    <div className={classes.solved}>{ solved ? 'Все в порядке' : '' }</div>
  )
}