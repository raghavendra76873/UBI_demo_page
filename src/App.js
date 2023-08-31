import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Pages/Usecase/component/Navbar';
import header from './Pages/Usecase/component/images/Header.png'
import Usecase from './Pages/Usecase/Usecase';
import Lifescience from './Pages/Lifesciences/lifescience'
import Dataengineering from './Pages/dataengineering/dataengineering' 
import Datascience from './Pages/datascience/datascience' 
import Businessintelligence from './Pages/businessintelligence/bi' 
import Automotive from './Pages/Automotive/BFSI' 
import Retail from './Pages/Retail/BFSI' 
import CaseStudies from './Pages/CaseStudies/CaseStudies'
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import Industry from './Pages/Industry/Industry';
import BFSI from './Pages/BFSI/BFSI'
import Tableau from './Pages/Tableau/Tableau'
import Reporting1 from './Pages/BFSI/Reporting'
import Reporting2 from './Pages/Retail/Reporting'
import Reporting3 from './Pages/Automotive/Reporting'
import Reporting4 from './Pages/businessintelligence/Reporting'
import PowerBI from './Pages/PowerBI/PowerBI'


function App() {
  
  const ScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      // Determine the active button based on the current route
      if (location.pathname === "/industry") {
        setActiveButton("usecase");
      } else if (location.pathname === "/usecase") {
        setActiveButton("industry");
      }
    }, [location.pathname]);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  };
  const [activeButton, setActiveButton] = useState('usecase');

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  
  return (
    <Router>
      <div className="App">
      <ScrollToTop />
        <Switch>
          <Route exact path="/lifescience">
            <Lifescience />
          </Route>
          <Route exact path="/BFSI">
            <BFSI />
          </Route>
          <Route exact path="/dataengineering">
            <Dataengineering/>
          </Route>
          <Route exact path="/datascience">
            <Datascience/>
          </Route>
          <Route exact path="/businessintelligence">
            <Businessintelligence/>
          </Route>
          <Route exact path="/automotive">
            <Automotive/>
          </Route>
          <Route exact path="/retail">
            <Retail/>
          </Route>
          <Route exact path="/casestudies">
            <CaseStudies/>
          </Route>
          <Route exact path="/tableau">
            <Tableau/>
          </Route>
          <Route exact path="/reporting1">
            <Reporting1/>
          </Route>
          <Route exact path="/reporting2">
            <Reporting2/>
          </Route>
          <Route exact path="/reporting3">
            <Reporting3/>
          </Route>
          <Route exact path="/reporting4">
            <Reporting4/>
          </Route>
          <Route exact path="/powerbi">
            <PowerBI/>
          </Route>
          <Route>
        <Navbar/>
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
              <Link to="/industry">
                <button
                  type="button"
                  id="buttoz"
                  className={`btn btn-lg btn mx-2 ${activeButton === 'usecase' ? 'active1' : ''}`}
                  style={{ backgroundColor: '#DCDCDC', width: '30rem', fontWeight: '600' }}
                  onClick={() => handleButtonClick('usecase')}
                >
                By Industry
                </button>
              </Link>
              <Link to="/usecase">
                <button
                  type="button"
                  id="buttoz"
                  className={`btn btn-lg mx-2 ${activeButton === 'industry' ? 'active1' : ''}`}
                  style={{ backgroundColor: '#DCDCDC', width: '30rem', fontWeight: '600' }}
                  onClick={() => handleButtonClick('industry')}
                  >
                    By Use Case
                </button>
              </Link>
            </div>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/industry">
            <Usecase />
          </Route>
          <Route exact path="/">
            <Usecase/>
          </Route>
          <Route exact path="/usecase">
            <Industry/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
