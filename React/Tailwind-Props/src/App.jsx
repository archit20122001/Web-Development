import Card from './components/Card'
function App() {

  return (
    <>
      <h1 className="bg-green-500 text-2xl p-7 mb-2 rounded text-center "> Tailwind Test </h1>
      <Card channel="Archit's channel" username="Archit" btnText="Follow me" />
      <Card channel="Aman's channel" username="Aman" btnText="Visit here" />
    </>
  )
}

export default App