import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './Pages/Usecase/component/Navbar';
import header from './Pages/Usecase/component/images/Header.png'
import Usecase from './Pages/Usecase/Usecase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Industry from './Pages/Industry/Industry';


function App() {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <Router>
    <div className="App">
      <Navbar />
      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>
        <span style={{ color: '#3993DD' }}>UBI DEMO</span>{' '}
        <span style={{ color: '#1D165C' }}>CATALOGUE</span>
      </h1>
      <img
        src={header}
        alt=""
        style={{
          display: 'block',
          margin: '0 auto',
          maxWidth: '100%',
          height: 'auto',
          width: '420px'
        }}
      />
      <br />
      <br />
      <div className="d-flex justify-content-center">
        <Link to="/usecase">
          <button
            type="button"
            id="buttoz"
            className={`btn btn-lg btn mx-2 ${activeButton === 'usecase' ? 'active1' : ''}`}
            style={{ backgroundColor: '#DCDCDC', width: '30rem', fontWeight: '600' }}
            onClick={() => handleButtonClick('usecase')}
          >
            By Use Case
          </button>
        </Link>
        <Link to="/industry">
          <button
            type="button"
            id="buttoz"
            className={`btn btn-lg mx-2 ${activeButton === 'industry' ? 'active1' : ''}`}
            style={{ backgroundColor: '#DCDCDC', width: '30rem', fontWeight: '600' }}
            onClick={() => handleButtonClick('industry')}
          >
            By Industry
          </button>
        </Link>
      </div>
      <Switch>
        <Route exact path="/usecase">
          <Usecase />
        </Route>
        <Route exact path="/industry">
          <Industry/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
