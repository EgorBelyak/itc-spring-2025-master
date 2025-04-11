import classes from "./Table.module.css";

export const Table = ({ rows, setCurrentRow, currentRow }) => {
  const handleRowClick = (row) => {
    setCurrentRow(row.id);
  }

  console.log(classes, currentRow);

  const renderRow = (row) => {
    const isSelected = (currentRow === row.id);
    return (
      <tr
        className={`${classes.tr} ${isSelected ? classes.selected : 'x'}`}
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
