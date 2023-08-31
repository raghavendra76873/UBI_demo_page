// import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { data } from './data';

function App() {
  return (
    <div >
      <div className="container" style={{width:'78%'}}>
        <Navbar/>
      <br />
      {/* <div style={{border:'1px solid #e0dfdf',borderRadius:'10px'}}> */}
      {/* <div style={{border:'1px solid black',borderRadius:'10px'}}> */}
      {data.map((x) => (
          <Card
            number={x.number}
            desc={x.desc}
            text={x.text}
            link={x.link}
            radius={x.radius}
          />
          ))}
      </div>
      <br />
      <br />
      <br />
      </div>
    // </div>
  );
}

export default App;