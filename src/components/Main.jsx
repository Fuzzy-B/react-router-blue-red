import { Routes, Route, Link } from "react-router-dom"
import Red from "./Red"
import Blue from './Blue'
import Home from './Home'
import Random from "./Random"

export default function Main() {
    return (
      <div id="main-section">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blue' element={<Blue />} />
            <Route path='/red' element={<Red />}/> 
            <Route path='/random' element={<Random />} />
        </Routes>  
      </div> 
    )
}