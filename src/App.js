import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import SchoolPage from './Pages/SchoolPage';

import './App.css';

function App() {
  return (
    <div className="App">
     
        <Router>
          <Routes>
              <Route element={<HomePage />} path=""  />
              <Route element={<SchoolPage />} path="/school/:username"  />
          </Routes>
        </Router>
    
    </div>
  );
}

export default App;
