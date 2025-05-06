import classes from './figure.module.css'
import figure from '../../assets/white-pawn.png'

export const WhitePawn = () => {
  return (
    <div className={classes.figure}>
      <img className={classes.figure} src={figure} />
    </div>
  )
}
