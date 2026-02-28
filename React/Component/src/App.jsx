import UserCard from "./components/UserCard"
import birdlogo from "./assets/birdlogo.png"
import birdlogo2 from "./assets/birdlogo2.jpg"
import birdlogo3 from "./assets/birdlogo3.png"


function App() {

  return (
    <div className="container">
      <UserCard name = "Archit Kumar Singh" desc = "This is a description of the card" img={birdlogo}/>
      <UserCard name = "John Doe" desc = "This is another description of the card" img={birdlogo2}/>
      <UserCard name = "Jane Smith" desc = "This is a third description of the card" img={birdlogo3}/>
    </div>
  )
}

export default App