import {Routes, Route, useNavigate} from 'react-router-dom'
import './App.css';
import {useEffect, useState} from 'react'


function App() {
  const [currentPuzzlesArray, setCurrentPuzzlesArray] = useState([])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home  currentPuzzlesArray={currentPuzzlesArray} setCurrentPuzzlesArray={setCurrentPuzzlesArray}/> }></Route>
        <Route path="/login"></Route>
        <Route path="/signup"></Route>
      </Routes>
    </div>
  );
}

export default App;
