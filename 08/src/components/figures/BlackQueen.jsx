import classes from './figure.module.css'
import figure from '../../assets/black-queen.png'

export const BlackQueen = () => {
  return (
    <div className={classes.figure}>
      <img className={classes.figure} src={figure} />
    </div>
  )
}
