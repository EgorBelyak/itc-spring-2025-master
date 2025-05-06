import classes from './figure.module.css'
import figure from '../../assets/black-knight.png'

export const BlackKnight = () => {
  return (
    <div className={classes.figure}>
      <img className={classes.figure} src={figure} />
    </div>
  )
}
