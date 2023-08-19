import './App.css';
import { Routes, Route,} from "react-router-dom";
import Home from './Component/Home';
import Feedback from './Component/Feedback';
import Cart from './Component/Cart';
import Contact from './Component/Contact';
import Navbar from './Navbar';
import { useState } from 'react';

function App() {
 const [quan,setQuan]=useState(0); 
 const[Pvalue,setPvalue]=useState(0);
 const[proCount,setProCount]=useState(0);
  return (
   <>
   
    <Routes>
      <Route  element={<Navbar  quan={quan} />}>
      <Route path="/" element={<Home quan={quan} setQuan={setQuan}/>} />     
      <Route path="/feedback" element={<Feedback/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart proCount={proCount} setProCount={setProCount} Pvalue={Pvalue} setPvalue={setPvalue}/>} />
      </Route>    
    </Routes>
    </>
  );
}
export default App;

