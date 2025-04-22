import { useSelector } from 'react-redux'
import { selectTurn } from '../store/reducers/figures'

export const TurnIndicator = () => {
  const turn = useSelector(selectTurn)
  
  return (
    <div style={{
      padding: '10px',
      marginBottom: '20px',
      backgroundColor: '#f0f0f0',
      borderRadius: '5px',
      textAlign: 'center',
      fontWeight: 'bold'
    }}>
      {turn === 'knight' ? 'Ход коня' : 'Ход ладьи'}
    </div>
  )
}