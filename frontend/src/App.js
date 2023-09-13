import { useEffect, useState } from 'react'

function App() {
  const [display, setDisplay] = useState([])
  useEffect(() => {
    fetch('localhost:4000/')
    .then(res => res.json())
    .then(data => setDisplay(data))
  }, [])
  
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Message to be displayed here</h1>
      </header>
    </div>
  )
}

export default App;
