// Table.jsx
import { useDispatch, useSelector } from "react-redux";
import { rowsSlice } from "../store/reducers/rows";
import classes from "./Table.module.css";
import { useNavigate } from "react-router-dom";

export const Table = () => {
  const { getRows } = rowsSlice.selectors;
  const { setCurrentRow } = rowsSlice.actions;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const rows = useSelector(getRows);

  if (!rows || rows.length === 0) {
    return <div className={classes.empty}>Нет данных для отображения</div>;
  }

  const handleRowClick = (row) => {
    dispatch(setCurrentRow(row));
    navigate(`/edit/${row.id}`);
  };

  const renderRow = (row) => {
    return (
      <tr
        className={classes.tr}
        key={row.id}
        onClick={() => handleRowClick(row)}
      >
        <td className={classes.td}>{row.name}</td>
        <td className={classes.td}>{row.city}</td>
      </tr>
    );
  };

  return (
    <table className={classes.table}>
      <tbody>{rows.map(renderRow)}</tbody>
    </table>
  );
};