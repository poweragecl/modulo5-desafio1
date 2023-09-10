import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu'
import Home from './views/Home'
import Servicios from './views/Servicios'
import Contacto from './views/Contacto'

function App() {

  return (
    <>
        <BrowserRouter>
              <Menu></Menu>

              <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/servicios" element={<Servicios></Servicios>}></Route>
                <Route path="/contacto" element={<Contacto></Contacto>}></Route>
              </Routes>

        </BrowserRouter>
    </>
  )
}

export default App
