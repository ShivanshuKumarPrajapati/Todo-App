import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Home'
import Auth from './component/Auth/Auth';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
