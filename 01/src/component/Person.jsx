import classes from "./Person.module.css"

export function Person({
  firstName = '',
  onChangeFirstName = () => null,
  lastName = '',
  onChangeLastName = () => null,
  onSubmit,
}) {

  return (
    <div>
      <div>
        <label className={classes.label}>Имя</label>
        <input type="text" onInput={onChangeFirstName} defaultValue={firstName} />
      </div>
      <div>
        <label className={classes.label}>Фамилия</label>
        <input type="text" onInput={onChangeLastName} defaultValue={lastName} />
      </div>
      { typeof onSubmit === 'function' ? <button onClick={onSubmit}>Отправить</button> : null }
    </div>
  )
}
