import Navbar from './Components/Navbar';
import Card from './Components/Card';
import { data } from './data';
import header from './Components/Images/Header.png'
import Card1 from './Components/Card1';
import tableau from '../BFSI/Components/Images/Tableau-menu.svg'
import powerbi from '../BFSI/Components/Images/powerBI.svg'
import { Link } from 'react-router-dom/cjs/react-router-dom';


function App() {
  const imageStyles = {
    width: '400px',
    border: '2px solid black',
    borderRadius: '10px',
    padding: '40px',
    marginRight: '100px',
  };
  return (
    <div className="App">
      <Navbar/>
      <h1 style={{
  textAlign: 'center',
  boxSizing:'border-box',
  margin: '50px auto',
  width: '50rem',
  maxWidth: '100%',
  wordWrap: 'break-word'
}}>
  Click on the box to deep dive into demos for respective tools.
</h1>
<div className="container-md">
  <div className="row justify-content-center">
    <div className="col-lg-6 col-md-12">
      <Link to="/powerbi">
      <img
        src={powerbi}
        alt=""
        className="img-responsive"
        style={{
          maxWidth: '100%',
          height: 'auto',
          border: '2px solid black',
          borderRadius: '10px',
          padding: '40px',
          marginBottom: '20px',
          marginLeft:'180px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          // marginRight:'80px'
        }}
      />
      </Link>
    </div>
    <div className="col-lg-6 col-md-12">
      <Link to="/tableau">
      <img
        src={tableau}
        alt=""
        className="img-responsive"
        style={{
          maxWidth: '70%',
          height: '90%',
          border: '2px solid black',
          borderRadius: '10px',
          padding: '40px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          marginLeft:'20px'
        }}
      />
      </Link>
    </div>
  </div>
</div>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
    
  );
}

export default App;