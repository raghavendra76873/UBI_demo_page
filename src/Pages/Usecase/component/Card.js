import React from 'react'
import img from './images/img1.png'
import './Card.css'
const Card = (props) => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center my-4">
  <div className="card card-gradient-hover rounded-3"  id="benkicard" style={{ width: '25rem', boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)' }}>
    <img src={process.env.PUBLIC_URL + props.icon} className="card-img-top" alt="..." />
    <div className="card-body text-center card-gradient-hover" style={{borderRadius:'0px 0px 5px 5px'}}>
      <h3 className="card-title mx-auto my-3">{props.name}</h3>
      <p className="card-text">{props.description}</p>
      <p className="card-text my-4">Learn more...</p>
      <div className="rectangle" style={{ height: '6px', backgroundColor: '#1D165C', position: 'absolute', bottom: '0', left: '0', width: '100%', borderRadius: '0px 0px 5px 5px' }}></div>
    </div>
  </div>
</div>




  )
}

export default Card