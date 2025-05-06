import classes from './figure.module.css'
import figure from '../../assets/white-king.png'

export const WhiteKing = () => {
  return (
    <div className={classes.figure}>
      <img className={classes.figure} src={figure} />
    </div>
  )
}
