
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {


  return (
    <>
     <Navbar/>
     <div className="cards">
      <Card title="card 1" description="this is card 1"/>
      <Card/>
      <Card/>
      <Card/>
     </div>
     <Footer/>

    </>
  )
}

export default App
