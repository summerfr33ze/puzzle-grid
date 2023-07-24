import {Routes, Route, useNavigate} from 'react-router-dom'
import './App.css';
import {useEffect, useState} from 'react'
import Lilita from './fonts/Lilita'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import GenrePage from './components/GenrePage'

function App() {
  const [currentPuzzlesArray, setCurrentPuzzlesArray] = useState([])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home  currentPuzzlesArray={currentPuzzlesArray} setCurrentPuzzlesArray={setCurrentPuzzlesArray}/> }></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/genre-page" element={<GenrePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
