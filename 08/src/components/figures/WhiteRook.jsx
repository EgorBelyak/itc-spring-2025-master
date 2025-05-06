import classes from './figure.module.css'
import figure from '../../assets/white-rook.png'

export const WhiteRook = () => {
  return (
    <div className={classes.figure}>
      <img className={classes.figure} src={figure} />
    </div>
  )
}
