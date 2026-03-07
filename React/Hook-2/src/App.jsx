import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter >= 20)
      return alert('Counter value cannot be greater than 20')
    else
      setCounter(counter + 1)
  }

  const subtractValue = () => {
    if (counter <=0)
      return alert('Counter value cannot be less than 0')
    else
      setCounter(counter - 1)
  }

  return (
    <>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>+</button>
      <br />
      <button onClick={subtractValue}>-</button>
    </>
  )
}

export default App