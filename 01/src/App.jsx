import React from 'react';

export const Person = ({ firstName, lastName, onChangeFirstName, onChangeLastName, onSubmit }) => {
  return (
    <div>
      <div>
        <label htmlFor="firstName">Имя:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={onChangeFirstName}
        />
      </div>
      <div>
        <label htmlFor="lastName">Фамилия:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={onChangeLastName}
        />
      </div>
      {onSubmit && (
        <button onClick={onSubmit}>Отправить</button>
      )}
      <p>
        Имя: {firstName}
      </p>
      <p>
        Фамилия: {lastName}
      </p>
    </div>
  );
};