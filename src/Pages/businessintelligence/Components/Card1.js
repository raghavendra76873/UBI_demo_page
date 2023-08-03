import React from 'react'
// import './Card.css'
import vector from './Images/Vector 5.png'
import accelerator from './Images/accelerator.png'
const Card1 = () => {
  return (
    <>
     <div className="col-12 col-md-12 col-lg-6 col-xl-4 d-flex justify-content-center g-5">
  <div className="container2">
    <div className="circleImage">
      <img
        src={accelerator}
        alt="..."
        className="img1"
        style={{
          width: '95px',
          height: '91px'
        }}
      />
    </div>
    <div className="cardContainer1">
      <div className="card my-card" id="fav-card" style={{ width: '22rem', display: 'flex', flexDirection: 'column', height: '440px',marginRight:'10%' }}>
        <div id="card-body" className="card-body d-flex flex-column">
        <h3 className="card-title text-center" style={{ color: '#3993DD', marginTop: '-30px', display: 'flex', flexDirection: 'column', height: '40px', lineHeight: '30px' }}>
            UBI<br/>Accelerator
          </h3>
          <img
            src={vector}
            alt="..."
            style={{ marginBottom: '15px' ,marginTop:'23px' }}
          />
          <p className="card-text text-center">
          Efficiently automate data pipelines for data lakes and warehouses, with seamless onboarding, UI-driven metadata configuration, and effective delta detection using key attributes.
          </p>
          <div className="mt-auto d-flex justify-content-center">
            <a href='https://usefulbicorp.sharepoint.com/:b:/s/UBIDemoWebsite/EY4yK4RFJLhEqwJ6v3MS3UsByjm3IB3bMUSDuEAy0wr3pg' className="btn btn-dark d-flex justify-content-center align-items-center mx-2" style={{ backgroundColor: 'white', minWidth: '145px', fontSize: '0.85rem', height: '35px', lineHeight: '15px' }}>
               Watch Demo
            </a>
            <a href="#" className="btn btn-dark d-flex justify-content-center align-items-center mx-2" style={{ backgroundColor: 'white', minWidth: '145px', fontSize: '0.85rem' }}>
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    </>

  )
}

export default Card1