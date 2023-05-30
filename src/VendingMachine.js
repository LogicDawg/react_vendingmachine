import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import CandyBar from "./Candybar";
import NavBar from "./NavBar";

const VendingMachine = () => {

    return (
        <>
        
        <BrowserRouter>
        <NavBar />
        <h1>Vending Machine</h1>

        <Routes>
            <Route exact path='/chips' element={<Chips />} />
            <Route exact path='/soda' element={<Soda/>} />
            <Route exact path='/candybar' element={<CandyBar/>} />
        </Routes>
        </BrowserRouter>
        
        
        </>

    )
}

export default VendingMachine;