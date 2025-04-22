import knightImg from '../assets/black-knight.png'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentFigure } from '../store/reducers/figures'
import { selectCurrentFigure, selectTurn } from '../store/reducers/figures'

export const Knight = () => {
  const dispatch = useDispatch()
  const currentFigure = useSelector(selectCurrentFigure)
  const turn = useSelector(selectTurn)
  
  const handleClick = (e) => {
    e.stopPropagation()
    
    if (turn === 'knight') {
      dispatch(setCurrentFigure('knight'))
    }
  }

  
  const opacity = currentFigure === 'knight' ? 1 : turn === 'knight' ? 0.8 : 0.4

  return (
    <div 
      onClick={handleClick}
      style={{
        cursor: turn === 'knight' ? 'pointer' : 'default',
        opacity,
        transition: 'opacity 0.3s',
      }}
    >
      <img src={knightImg} width="100" height="100" alt="Knight" />
    </div>
  )
}