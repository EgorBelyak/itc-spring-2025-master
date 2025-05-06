import classes from './figure.module.css'
import figure from '../../assets/black-king.png'

export const BlackKing = () => {
  return (
    <div className={classes.figure}>
      <img className={classes.figure} src={figure} />
    </div>
  )
}
