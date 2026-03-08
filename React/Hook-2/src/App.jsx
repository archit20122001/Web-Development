import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter >= 20)
      return alert('Counter value cannot be greater than 20')
    else
      setCounter(counter + 1)
    // if this is repeated multiple times, it will be of no use becasue the useState trats it like same function written to multiple times to render single element, hence it will bundle up all the functions and execute only once, so it will not update the counter value as expected, to avoid this we can use callback function in setCounter which will give us the latest value of counter and then we can update it accordingly.
    }
  
  const subtractValue = () => {
    if (counter <= 0)
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