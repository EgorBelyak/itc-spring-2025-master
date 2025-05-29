import clsx from 'clsx';
import classes from './Item.module.css'

export const Item = ({ number }) => {
  return (
    <div
      className={clsx(classes.item, classes["item-" + number])}
    />
  )
}