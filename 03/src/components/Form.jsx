// Form.jsx
import { useDispatch, useSelector } from "react-redux";
import { rowsSlice } from "../store/reducers/rows";
import { useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./Form.module.css";

export const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setRow } = rowsSlice.actions;

  const row = useSelector((state) =>
    state.rows.rows.find((row) => row.id === Number(id))
  );

  const nameRef = useRef();
  const cityRef = useRef();

  useEffect(() => {
    if (!id || !row) {
      navigate("/", { replace: true });
    }
  }, [id, row, navigate]);

  if (!row) {
    return null;
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  const handleSave = () => {
    const nameValue = nameRef.current?.value.trim();
    const cityValue = cityRef.current?.value.trim();

    if (!nameValue || !cityValue) return;

    const updatedRow = {
      ...row,
      name: nameValue,
      city: cityValue,
    };

    dispatch(setRow(updatedRow));
    navigate(-1);
  };

  return (
    <div className={classes.form}>
      <div className={classes.row}>
        <label htmlFor="form_name" className={classes.label}>Имя</label>
        <input
          id="form_name"
          className={classes.input}
          ref={nameRef}
          defaultValue={row.name}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className={classes.row}>
        <label htmlFor="form_city" className={classes.label}>Город</label>
        <input
          id="form_city"
          className={classes.input}
          ref={cityRef}
          defaultValue={row.city}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className={classes.row}>
        <button className={classes.button} onClick={handleSave}>
          Сохранить
        </button>
      </div>
    </div>
  );
};