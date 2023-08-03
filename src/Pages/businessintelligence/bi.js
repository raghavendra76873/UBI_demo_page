import Navbar from './Components/Navbar';
import Card from './Components/Card';
import { data } from './data';
import header from './Components/Images/Header.png'
import Card1 from './Components/Card1';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container-md">
        <div className="row justify-content-center">
          {/* <Card1/> */}
        {data.map((x) => (
          <Card
            name={x.name}
            icon={x.icon}
            description={x.description}
            link={x.link}
            link2={x.link2}
            btntxt={x.btntxt}
            fontSize={x.fontSize}
            imgheight={x.imgheight}
            imgwidth={x.imgwidth}
          />
          ))}
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