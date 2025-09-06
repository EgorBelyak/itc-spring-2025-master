import classes from './Bone.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { bonesSlice } from '../store/slices/bones'

const { moveBone } = bonesSlice.actions;
const { getMoves } = bonesSlice.selectors;

export const Bone = ({ number }) => {
  const dispatch = useDispatch();
  const moves = useSelector(getMoves);

  const handleClick = () => {
    const direction = moves[number];
    if (direction !== undefined) {
      dispatch(moveBone({ bone: number, direction }));
    }
  }

  return (
    <div className={classes.bone} onClick={handleClick}>
      { number }
    </div>
  );
}

export const BlankBone = () => {
  return (
    <div className={classes.blankBone}>
    </div>
  );
}