import React from "react"
import Navbar from "./components/Navbar"
import Main from "./pages/Main"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Rooms from "./pages/Rooms";
import Activities from "./pages/Activities";
import RoomCard from "./pages/RoomCard";
import Contact from "./pages/Contact";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/activities" element={<Activities />} />
          <Route path='/RoomCard/:ID' element={<RoomCard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
