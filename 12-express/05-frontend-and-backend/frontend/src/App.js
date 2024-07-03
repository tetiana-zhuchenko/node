import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [person, setPerson] = useState()
  const API = 'http://127.0.0.1:8080'
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setPerson(data)
        console.log(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      {person && (
        <>
          <h1>{person.name}</h1>
          <h2>{person.isInstructor ? 'Instractor' : 'Student'}</h2>
        </>
      )}
    </div>
  )
}

export default App
