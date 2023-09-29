import { Route, Routes } from "react-router"
import Header from "./Componets/Header/Header.jsx"

import Home from "./Componets/Home/Home.jsx"
import Electronic from "./Componets/Electronic/Electronic.jsx"
import Beuty from "./Componets/Beuty/Beuty.jsx"
import HomeDecore from "./Componets/Home Decore/HomeDecore.jsx"
import Viewcart from "./Componets/Viewcart/viewcart.jsx"
import SingUp from "./Componets/SingUp/SingUp.jsx"
import Singin from "./Componets/SignIn/Singin.jsx"






function App() {


  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Electronic" element={<Electronic/>}></Route>
      <Route path="/Beuty" element={<Beuty/>}></Route>
      <Route path="/HomeDecore" element={<HomeDecore/>}></Route>
      <Route path="/viewcart" element={<Viewcart/>}></Route>
      <Route path="/SingUp" element={<SingUp/>}></Route>
      <Route path="/Singin" element={<Singin/>}></Route>
    </Routes>
     </>
     
  )
}

export default App
