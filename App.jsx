
import './App.css';
import './Xtra.css';
// import '../src/LOGINCOMP/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './LOGINCOMP/Login';
import SuccessLOgin from './LOGINCOMP/SuccessLOgin';
import { BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Privatecomp from './LOGINCOMP/Privatecomp';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Signup from './LOGINCOMP/Signup';
function App() {
  return(

  <div className='Navlink'>
   
 <Router>
  
    <div className='constainer'>
    <Link className='link' to="/home">home</Link>
   
    <Link className='link' to="/">login</Link>
    </div>
  <Routes>
    
    < Route path='/'  element={<Login/>}/>
<Route path='/home' element={<SuccessLOgin/>}/>
<Route path='/sign' element={<Signup/>}/>

  </Routes>
 </Router> 
   
  </div>
  );
}

export default App;
