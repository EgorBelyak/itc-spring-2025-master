import classes from "./Form.module.css";
import { useRef, useEffect } from "react";

export const Form = ({ row, setRows, setCurrentRow }) => {
  const nameRef = useRef();
  const cityRef = useRef();

  useEffect(() => {
    if (row && nameRef.current) {
      nameRef.current.value = row.name || "";
    }
    if (row && cityRef.current) {
      cityRef.current.value = row.city || "";
    }
  }, [row]);

  const handleSave = () => {
    if (!row) return;

    setRows(prevRows => {
      return prevRows.map(r => {
        if (r.id === row.id) {
          return { ...r, name: nameRef.current.value, city: cityRef.current.value };
        }
        return r;
      });
    });
    setCurrentRow(-1);
  };


  return row.id && (
    <div className={classes.form}>
      <div className={classes.row}>
        <label className={classes.label}>Имя</label>
        <input className={classes.input} ref={nameRef} />
      </div>
      <div className={classes.row}>
        <label className={classes.label}>Город</label>
        <input className={classes.input} ref={cityRef} />
      </div>
      <div className={classes.row}>
        <button className={classes.button} onClick={handleSave}>
          Сохранить
        </button>
      </div>
    </div>
  );
};