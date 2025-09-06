import classes from './Towers.module.css'
import { Pole } from './Pole'

export const Towers = () => {
  return (
    <div className={classes.towers}>
      <Pole id={1} />
      <Pole id={2} />
      <Pole id={3} />
    </div>
  )
}