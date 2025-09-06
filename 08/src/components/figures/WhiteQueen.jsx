import classes from './figure.module.css'
import figure from '../../assets/white-queen.png'

export const WhiteQueen = () => {
  return (
    <div className={classes.figure}>
      <img className={classes.figure} src={figure} />
    </div>
  )
}
