import rookImg from '../assets/white-rook.png'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentFigure } from '../store/reducers/figures'
import { selectCurrentFigure, selectTurn } from '../store/reducers/figures'

export const Rook = () => {
  const dispatch = useDispatch()
  const currentFigure = useSelector(selectCurrentFigure)
  const turn = useSelector(selectTurn)
  
  const handleClick = (e) => {
    e.stopPropagation()
   
    if (turn === 'rook') {
      dispatch(setCurrentFigure('rook'))
    }
  }

  // Добавляем стиль для неактивной фигуры
  const opacity = currentFigure === 'rook' ? 1 : turn === 'rook' ? 0.8 : 0.4

  return (
    <div 
      onClick={handleClick}
      style={{
        cursor: turn === 'rook' ? 'pointer' : 'default',
        opacity,
        transition: 'opacity 0.3s',
      }}
    >
      <img src={rookImg} width="100" height="100" alt="Rook" />
    </div>
  )
}