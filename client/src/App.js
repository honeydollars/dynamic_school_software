import { BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Navbar  from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Events from './pages/Events';
import Exams from './pages/Exams';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import Prizegiving from './pages/Prizegiving';
import Visiting from './pages/Visiting';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/events' element={<Events/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/exams' element={<Exams/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/prize-giving' element={<Prizegiving/>}></Route>
          <Route path='/visiting' element={<Visiting/>}></Route>
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
