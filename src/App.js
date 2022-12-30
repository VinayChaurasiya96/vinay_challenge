import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import GoToMenu from './components/go-to-menu';
import FoodItems from './components/food-items'
import Signup from './components/signup'
import Login from './components/login'
function App() {
  // const [currentForm,setCurrentForm] = useState('login')
  return (
    
    <>
     {/* {currentForm === Login? <Login/>: <Signup/>} */}
      <Router>
        <Navbar/>

        <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/go-to-menu" element={<GoToMenu />} />
        
        
        <Route path="/Login" element={<Login/>} />
        <Route path="/food-items" element={<FoodItems/>} />
        


        </Routes>
      </Router>
         

         
          
          
         
        
      
    </>
  );
}

export default App;
