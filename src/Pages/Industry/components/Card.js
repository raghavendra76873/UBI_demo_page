import React from 'react'
import './Card.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Card = (props) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-center my-4">
    <Link to={props.link} style={{ textDecoration: 'none' }}>
  <div className="card card-gradient-hover rounded-3" id="benkicard1" style={{ width: '18rem', boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',height:'33rem' }}>
      <img src={process.env.PUBLIC_URL + props.icon} className="card-img-top" alt="..." />
      <div className="card-body text-center card-gradient-hover">
        <h3 className="card-title mx-auto my-3">{props.name}</h3>
        <p className="card-text">{props.description}</p>
        <p className={`card-text ${props.margin}`}>Learn more...</p>
        <div className="rectangle" style={{ height: '6px', backgroundColor: '#1D165C', position: 'absolute', bottom: '0', left: '0', width: '100%', borderRadius: '0px 0px 5px 5px' }}></div>
      </div>
  </div>
    </Link>
</div>
  )
}

export default Card