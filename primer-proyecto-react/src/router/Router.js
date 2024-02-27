
import {BrowserRouter as Router, Routes, Route} from "react-dom";

import Home from "../pages/Home/Home"
import Character from "../pages/Characters/Characters"
import Contact from "../pages/Contact/Contact"

export default function Ruteo (){

    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/character' element={<Character/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </Router>
    )
} 