import './App.css';
import { BrowserRouter as Router,Link , Route, Routes } from "react-router-dom";

import Home from './Home'
import Auth from './component/Auth/Auth';
import PageNotFound from './component/ErrorPage/PageNotFound';
import useToken from './useToken';
import { accessToken } from './component/CreateNote/CreateNote';
import ProtectedRoute from './ProtectedRoute';

function App() {
  
  const { setToken, token } = useToken();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Auth setToken={setToken} />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
