import React, { useState } from "react";
import './Card1.css'
import vector from './Images/Vector 5.png';
const Card = (props) => {
  console.log(props.icon)
  const isPharmLaunch = props.name === "UBI Pharma Launch";
  return ( 
    <>
     <div className="col-12 col-md-12 col-lg-6 col-xl-4 d-flex justify-content-center g-5">
  <div className="container2">
    <div className="circleImage">
      <img
        src={process.env.PUBLIC_URL + props.icon}
        alt="..."
        className="img1"
        style={{
          width: props.imgwidth,
          height: props.imgheight
        }}
      />
    </div>
    <div className="cardContainer1">
      <div className="card my-card" id="fav-card" style={{ width: '22rem', display: 'flex', flexDirection: 'column', height: '440px',marginRight:'10%' ,border: '1px solid black',
  borderradius: '10px',transform: 'scale(1.05)',
  transition: 'transform 0.3s, box-shadow 0.3s'}}>
        <div className="card-body d-flex flex-column" id="card-body" style={{paddingtop: '40%'}}>
        <h3 className="card-title text-center" style={{ color: '#3993DD', marginTop: isPharmLaunch ? '-20px' : '-35px', marginBottom: isPharmLaunch ? '27px' : '10px' }}>{props.name}</h3>
          <img
            src={vector}
            alt="..."
            style={{ marginBottom: '15px' }}
          />
          <p className="card-text text-center">
            {props.description}
          </p>
          <div className="mt-auto d-flex justify-content-center">
            <a href={props.link2} className="btn btn-dark d-flex justify-content-center align-items-center mx-2" style={{ backgroundColor: 'white', minWidth: '145px', fontSize: '0.85rem', height: '35px', lineHeight: '15px' }}>
               Watch Demo
            </a>
            <a href={props.link} className="btn btn-dark d-flex justify-content-center align-items-center mx-2" style={{ backgroundColor: 'white', minWidth: '145px', fontSize: '0.85rem' }}>
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    </>
  );
};

export default Card;
