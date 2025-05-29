import { useDispatch, useSelector } from 'react-redux';
import { moveSlice } from '../store/slices/move';
import classes from './Pole.module.css';
import { itemsSlice } from '../store/slices/items';
import { Item } from './Item';

export const Pole = ({ id }) => {
  const { setSource, dropSource } = moveSlice.actions;
  const { getSource } = moveSlice.selectors;
  const { moveItem } = itemsSlice.actions;
  const { getItems } = itemsSlice.selectors;
  const dispatch = useDispatch();

  const items = useSelector(getItems)[id] || [];
  const source = useSelector(getSource);

  const handleClick = () => {
    if (source === null) {
      // Если источник не выбран, выбираем текущий стержень (если на нем есть диски)
      if (items.length > 0) {
        dispatch(setSource(id));
      }
    } else {
      if (source === id) {
        // Если кликнули на тот же стержень - отменяем выбор
        dispatch(dropSource());
      } else {
        // Пытаемся переместить диск
        dispatch(moveItem({ from: source, to: id }));
        dispatch(dropSource());
      }
    }
  };

  const renderItems = () => {
    return items.map((itemId, index) => <Item key={itemId} number={itemId} />);
  };

  return (
    <div
      className={classes.pole}
      onClick={handleClick}
      style={{
        borderBottom: source === id ? '5px solid red' : 'none'
      }}
    >
      {renderItems()}
    </div>
  );
};