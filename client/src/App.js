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
import PrizeGiving from './pages/PrizeGiving';
import Visiting from './pages/Visiting';
import ParentsMeeting from './pages/ParentsMeeting';
import ScienceCongress from './pages/ScienceCongress';
import MusicFestivals from './pages/MusicFestivals';
import GamesDay from './pages/GamesDay';
import SchoolTrips from './pages/SchoolTrips';
import Api from './pages/Api';

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
          <Route path='/events/prize-giving' element={<PrizeGiving/>}></Route>
          <Route path='/events/visiting-day' element={<Visiting/>}></Route>
          <Route path='/events/parents-meeting' element={<ParentsMeeting/>}></Route>
          <Route path='/events/science-fair' element={<ScienceCongress/>}></Route>
          <Route path='/events/music-festivals' element={<MusicFestivals/>}></Route>
          <Route path='/events/games' element={<GamesDay/>}></Route>
          <Route path='/events/school-trips' element={<SchoolTrips/>}></Route>
          <Route path='/api-test' element={<Api/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
