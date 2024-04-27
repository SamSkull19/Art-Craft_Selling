import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './BasicStruture/Navbar'

function App() {
  return (
    <>
      <div className="max-w-[1170px] mx-auto mt-6">
        <Navbar></Navbar>
        <Outlet></Outlet>

      </div>
    </>
  )
}

export default App
