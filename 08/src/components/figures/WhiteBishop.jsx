import classes from './figure.module.css'
import figure from '../../assets/white-bishop.png'

export const WhiteBishop = () => {
  return (
    <div className={classes.figure}>
      <img className={classes.figure} src={figure} />
    </div>
  )
}
