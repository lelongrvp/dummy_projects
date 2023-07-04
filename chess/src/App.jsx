import { useState } from 'react'
import './App.css'
import ChessBoard from './ChessBoard'

const App = () => {
  const [size, setSize] = useState(8)
  const [black, setBlack] = useState('#000000')
  const [white, setWhite] = useState('#ffffff')

  const handleClick = () => {
    setBlack(white)
    setWhite(black)
  }

  return (
    <div className="App">
      <h1>Chess Board</h1>
      <input
        type="number"
        min={0}
        value={size}
        onChange={(e) => {
          console.log(e.target.value);
          setSize(e.target.value)
        }} 
      />
      <input
        type="color"
        value={black}
        onChange={(e) => {
          console.log(e.target.value);
          setBlack(e.target.value)
        }}
      />
      <input
        type="color"
        value={white}
        onChange={(e) => {
          console.log(e.target.value);
          setWhite(e.target.value)
        }}
      />
      <button onClick={() => {
        handleClick()
      }}>Click here to switch</button>
      <ChessBoard size={size} black={black} white={white}/>
    </div>
  )
}

export default App
