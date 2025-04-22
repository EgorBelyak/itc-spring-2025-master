import classes from './Cell.module.css'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { 
  selectCurrentFigure,
  selectKnightPosition,
  selectRookPosition,
  selectTurn,
  setToPosition 
} from '../store/reducers/figures'

export const Cell = ({ column, row, children }) => {
  const dispatch = useDispatch()
  const currentFigure = useSelector(selectCurrentFigure)
  const knightPos = useSelector(selectKnightPosition)
  const rookPos = useSelector(selectRookPosition)
  const turn = useSelector(selectTurn) 
  
  const color = (column % 2 === row % 2) ? 'white' : 'black'
  const isCurrent = 
    (currentFigure === 'knight' && row === knightPos.row && column === knightPos.column) ||
    (currentFigure === 'rook' && row === rookPos.row && column === rookPos.column)

  const isPossibleMove = () => {
    if (!currentFigure) return false
    
    if (currentFigure === 'knight') {
      const dx = Math.abs(column - knightPos.column)
      const dy = Math.abs(row - knightPos.row)
      return (dx === 2 && dy === 1) || (dx === 1 && dy === 2)
    }
    
    if (currentFigure === 'rook') {
      return row === rookPos.row || column === rookPos.column
    }
    
    return false
  }

  const handleClick = () => {
    if (currentFigure && isPossibleMove()) {
      dispatch(setToPosition({ row, column }))
    }
  }

  return (
    <div 
      className={clsx(
        classes.cell, 
        classes[color],
        isCurrent && classes.current,
        isPossibleMove() && classes['possible-move']
      )}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}