import classes from './figure.module.css'
import figure from '../../assets/black-pawn.png'

export const BlackPawn = () => {
  return (
    <div className={classes.figure}>
      <img className={classes.figure} src={figure} />
    </div>
  )
}
