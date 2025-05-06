import classes from './Check.module.css'
import clsx from 'clsx'

import { useSelector, useDispatch } from "react-redux";
import { getSelected } from "../../store/reducers/selected";
import { setSelected } from "../../store/reducers/selected";
import { Figure } from './Figure';

export const Check = ({ slug }) => {
  const dispatch = useDispatch();
  const isSelected = slug === useSelector(getSelected);

  const handleClick = () => {
    dispatch(setSelected(slug));
  }

  return (
    <div className={clsx({[classes.selected]: isSelected})} onClick={handleClick}>
      <Figure slug={slug} />
    </div>
  );
}