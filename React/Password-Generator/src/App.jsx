import { useState, useCallback, useEffect, useRef } from "react"
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [includeNum, setIncludeNum] = useState(false)
  const [includeChar, setIncludeChar] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(() => {
    let pw = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (includeNum) str = str + "0123456789"
    if (includeChar) str = str + "!@#$%^&*_-+=/?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pw = pw + str.charAt(char)
    }
    setPassword(pw)
  }, [length, includeNum, includeChar, setPassword])

  useEffect(() => { passwordGenerator() }, [length, includeNum, includeChar, passwordGenerator])
  return (
    <>
      <h1 className='text-3xl text-center text-white'>Password Generator</h1>
      <div className='w-full m-2 p-3 rounded-lg bg-gray-500 text-shadow-blue-200'>
        <div className='flex overflow-hidden m-4 p-2 rounded-lg'>
          <input
            type="text"
            value={password}
            className='outline-none w-full p-2 m-2 bg-white rounded-sm'
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="m-2 p-2 bg-blue-400 rounded-md" onClick={copyPassword}>Copy</button>
        </div>
        <div className='flex-row px-2'>
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label className="p-2 mr-4">Length: {length}</label>
          <input
            type="checkbox"
            defaultChecked={includeNum}
            id='numberinput'
            onChange={() => {
              setIncludeNum((prev) => !prev)
            }}
          />
          <label className="px-2">Number</label>
          <input
            type="checkbox"
            defaultChecked={includeChar}
            id='numberinput'
            onChange={() => {
              setIncludeChar((prev) => !prev)
            }}
          />
          <label className="px-2">Symbols</label>
        </div>
      </div>
    </>
  )
}

export default App