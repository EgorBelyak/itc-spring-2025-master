import './App.css'
import { Person } from './component/Person'
import { useState } from 'react'

export function App() {
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');

  const handleSend = () => {
  }

  return (
    <>
      <h1>Отправка данных</h1>
      <div id="container">
        <section id="left">
          <Person
            firstName={firstName}
            lastName={lastName}
            onChangeFirstName={(e) => setFirstName(e.target.value)}
            onChangeLastName={(e) => setLastName(e.target.value)}
            onSubmit={handleSend} />
        </section>
        <section id="right">
          <Person
            firstName={firstName}
            lastName={lastName}
            />
        </section>
      </div>
    </>
  )
}
