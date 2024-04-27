import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './BasicStructure/Navbar'
import Footer from './BasicStructure/Footer'

function App() {
  return (
    <>
      <div className="max-w-[1170px] mx-auto mt-6">
        <Navbar></Navbar>
        <Outlet></Outlet>

      </div>
      <div className="bg-stone-400 bg-opacity-75">
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
