import { useState } from "react";

function App() {
  let [color, setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-4xl">
            <button className="oultine-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
            <button className="oultine-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>
            <button className="oultine-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>
            <button className="oultine-none px-4 py-1 rounded-full text-black" style={{ backgroundColor: "lavender" }} onClick={() => setColor("lavender")}>Lavender</button>
            <button className="oultine-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "purple" }} onClick={() => setColor("purple")}>Purple</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
