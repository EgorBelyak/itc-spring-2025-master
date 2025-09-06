import classes from './figure.module.css'
import figure from '../../assets/black-rook.png'

export const BlackRook = () => {
  return (
    <div className={classes.figure}>
      <img className={classes.figure} src={figure} />
    </div>
  )
}
