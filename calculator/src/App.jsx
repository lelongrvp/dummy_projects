import { useState } from "react"
import "./App.css"

const App = () => {
  const [result, setResult] = useState("")

  const handleClick = (e) => {
    if (e.target.name === "+" || e.target.name === "-" || e.target.name === "*" || e.target.name === "/") {
      if (result === "") {
        return
      }
      const lastChar = result[result.length - 1]
      if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
        setResult(result.slice(0, -1).concat(e.target.name))
      } else {
        setResult(result.concat(e.target.name))
      }
    } else {
      setResult(result.concat(e.target.name))
    }
  }

  const deleteElement = () => {
    setResult(result.slice(0, -1))
  }

  const clear = () => {
    setResult("")
  }

  const calculate = () => {
    let resultArray = result.split("")
    let numbers = []
    let operators = []
    let number = ""
    for (let i = 0; i < resultArray.length; i++) {
      if (resultArray[i] === "+" || resultArray[i] === "-" || resultArray[i] === "*" || resultArray[i] === "/") {
        operators.push(resultArray[i])
        numbers.push(number)
        number = ""
      } else {
        number += resultArray[i]
      }
    }
    numbers.push(number)
    let resultNumber = parseFloat(numbers[0])
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === "+") {
        resultNumber += parseFloat(numbers[i + 1])
      } else if (operators[i] === "-") {
        resultNumber -= parseFloat(numbers[i + 1])
      } else if (operators[i] === "*") {
        resultNumber *= parseFloat(numbers[i + 1])
      } else if (operators[i] === "/") {
        resultNumber /= parseFloat(numbers[i + 1])
      }
    }
    setResult(resultNumber)
  }
  return (
    <div className="wrapper">
      <h1>Calculator</h1>
      <form>
        <input type="text" readOnly value={result} />
      </form>      
      <div className="keypad">
        <div className="row">
          <button onClick={deleteElement} id="delete">&#8592;</button>
          <button onClick={clear} id="clear">C</button>
          <button name="." onClick={handleClick}>.</button>
          <button name="(" onClick={handleClick} disabled>(</button>
        </div>
        <div className="row">
          <button name="7" onClick={handleClick}>7</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name=")" onClick={handleClick} disabled>)</button>
        </div>
        <div className="row">
          <button name="8" onClick={handleClick}>8</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="0" onClick={handleClick}>0</button>
        </div>
        <div className="row">
          <button name="9" onClick={handleClick}>9</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="3" onClick={handleClick}>3</button>
          <button onClick={calculate} style={{
            backgroundColor: "#f21b0c"
          }}>=</button>
        </div>
        <div className="row">
          <button name="*" onClick={handleClick}>&times;</button>
          <button name="/" onClick={handleClick}>&divide;</button>
          <button name="+" onClick={handleClick}>+</button>
          <button name="-" onClick={handleClick}>-</button>
        </div>
      </div>
    </div>
  )
}

export default App