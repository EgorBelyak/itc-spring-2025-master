import classes from './Board.module.css'
import { Cell } from './Cell'
import { Knight } from './Knight'
import { Rook } from './Rook'
import { useSelector } from 'react-redux'
import { selectKnightPosition, selectRookPosition } from '../store/reducers/figures'
import { TurnIndicator } from './TurnIndicator'

export const Board = () => {
  const knightPos = useSelector(selectKnightPosition)
  const rookPos = useSelector(selectRookPosition)

  const cells = () => {
    const result = []
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 8; col++) {
        const hasKnight = row === knightPos.row && col === knightPos.column
        const hasRook = row === rookPos.row && col === rookPos.column
        
        result.push(
          <Cell key={`${row}-${col}`} column={col} row={row}>
            {hasKnight && <Knight />}
            {hasRook && <Rook />}
          </Cell>
        )
      }
    }
    return result
  }

  return (
    <div>
      <TurnIndicator />
      <div className={classes.board}>
        {cells()}
      </div>
    </div>
  )
}