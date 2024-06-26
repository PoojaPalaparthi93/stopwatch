import './App.css';
import { useState } from "react"


function App() {

  const [counter, setCounter] = useState(0)
  const [running, setRunning] = useState(false)

  return (
    <div>
      <header className="App-header">
        <h1>Stopwatch App</h1>
      </header>
      <div className='counterText'>
        <span>{("0" + Math.floor((counter / 60000) % 60 ))}</span>
        <span>{("0" + Math.floor((counter / 1000) % 60 ))}</span>
        <span>{("0" + Math.floor((counter / 10) % 100 ))}</span>
      </div>
      <div className="btnContainer">
        <button onClick={() => { setRunning(true) }}> Start </button>
        <button onClick={() => { setRunning(false) }}> Pause </button>
        <button onClick={() => { setCounter(0) }}> Reset </button>
      </div>
    </div>
  );
}

export default App;
