import classes from './Box.module.css'

import {Check} from './Check'

const renderFigure = (slug) => {
  return (
    <div className={classes.row}>
      <Check slug={"white-" + slug} />
      <Check slug={"black-" + slug} />
    </div>
  )
}

const figures = [
  'pawn', 'king', 'queen', 'bishop', 'knight', 'rook'
];

export const FigureBox = () => {
  return (
    <div className={classes.box}>
      { figures.map(renderFigure) }
    </div>
  )
}
