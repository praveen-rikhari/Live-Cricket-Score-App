import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import LiveScore from './components/LiveScore/LiveScore.jsx';
import Series from './components/Series/Series.jsx';
import Matches from './components/Matches/Matches.jsx';
import Players from './components/Players/Players.jsx';
import './App.css'

function App() {
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact component={LiveScore} />
        <Route path="/series" component={Series} />
        <Route path="/matches" component={Matches} />
        <Route path="/players" component={Players} />
      </Routes>
      <LiveScore />
    </div>

  );
}

export default App;
