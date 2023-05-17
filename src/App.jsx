
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Share/Navbar'
import Footer from './Share/Footer'

function App() {

  return (
    <div className='w-[95%] mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
