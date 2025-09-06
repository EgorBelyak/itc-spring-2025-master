import classes from './figure.module.css'
import figure from '../../assets/black-bishop.png'

export const BlackBishop = () => {
  return (
    <div className={classes.figure}>
      <img className={classes.figure} src={figure} />
    </div>
  )
}
