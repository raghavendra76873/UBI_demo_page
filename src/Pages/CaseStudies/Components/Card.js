import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center my-4 mx-0">
      <a href={props.link} style={{ textDecoration: 'none', position: 'relative' }}>
        <div
          className="card card-gradient-hover rounded-3"
          style={{ width: '21rem', border: '1px solid #1D165C', height: '550px', position: 'relative' }}
        >
          <img
            src={process.env.PUBLIC_URL + props.icon}
            className="card-img-top"
            alt="..."
            style={{ padding: '20px', paddingBottom: '0px' }}
          />
          <div
            className="card-body text-center card-gradient-hover"
            style={{ borderRadius: '0px 0px 5px 5px', height: '100%' }}
          >
            <h3 className="card-title1 my-0">{props.description}</h3>
            {/* Use absolute positioning for "Learn more..." text and rectangle */}
            <div
              className="rectangle"
              style={{
                backgroundImage: 'linear-gradient(to bottom,#1D165C,#3993DD)',
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                borderRadius: '0px 0px 5px 5px',
              }}
            ></div>
            <p
              className="card-text my-4"
              style={{
                position: 'absolute',
                bottom: '11px',
                left: '50%',
                transform: 'translateX(-50%)',
                margin: '0',
                fontWeight:'500'
              }}
            >
              Learn more...
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
