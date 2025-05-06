import classes from './figure.module.css'
import figure from '../../assets/white-knight.png'

export const WhiteKnight = () => {
  return (
    <div className={classes.figure}>
      <img className={classes.figure} src={figure} />
    </div>
  )
}
