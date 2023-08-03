import React from 'react'
import { IoIosHome } from 'react-icons/io';
import {BsChevronDown} from 'react-icons/bs'
import { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import logo from './Images/UBI-logo.svg';
import img1 from './Images/navbar_case1.png';
import img2 from './Images/navbar_case2.png';
import './Navbar.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 100) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const navbarClassName = scroll ? 'navbar navbar-expand-lg navbar-white p-md-1 fixed-top navbar-scrolled' : 'navbar navbar-expand-lg navbar-white p-md-1 fixed-top ';
  
    return (
      <>
        <nav className={navbarClassName} style={{ marginBottom: '-100px' }}>
          <div className="container my-3 mx-8">
            <Link to="/">
            <img src={logo} width="220" height="100" id='img123' style={{marginLeft:'20%'}}/>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ backgroundColor: 'grey' }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="mx-auto"></div>
              <ul className="navbar-nav" style={{marginRight:'5%'}}>
                
                <li className="nav-item">
                <Dropdown>
          <Dropdown.Toggle variant="default btn-default dropdown-toggle btn-lg disabled" id="mybyn" style={{ color: '#3993DD' ,marginRight:'6rem',fontWeight:'500',border:'none'}}>
            Case Studies
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
  </li>
  
                <li className="nav-item" style={{  }}>
                  <a href="https://usefulbi.com">
                  <IoIosHome size={45} color='#3993DD'/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        {/* <div className="banner-image d-flex justify-content-center align-items-center"></div> */}
        <img src={img1} alt="" id="img" />
        <img src={img2} alt="" id="img" />
      </>
    );
  };

export default Navbar