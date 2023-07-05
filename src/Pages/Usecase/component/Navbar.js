import React from 'react'
import { IoIosHome } from 'react-icons/io';
import {BsChevronDown} from 'react-icons/bs'
import { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import logo from './images/logo.png';
import './Navbar.css';

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
  
    const navbarClassName = scroll ? 'navbar navbar-expand-lg navbar-white p-md-1 fixed-top bg-white' : 'navbar navbar-expand-lg navbar-white p-md-3 fixed-top';
  
    return (
      <>
        <nav className={navbarClassName} style={{ marginBottom: '-100px' }}>
          <div className="container my-3 mx-8">
            <img src={logo} width="220" height="100" id='img123' style={{marginLeft:'4%'}}/>
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
          <Dropdown.Toggle variant="default btn-default dropdown-toggle btn-lg" id="mybyn" style={{ color: 'black',marginRight:'6rem' ,fontWeight:'500'}}>
            Success Stories <i><BsChevronDown size={19} color='#1D165C' style={{ marginBottom: '3px' }} />
  
              </i> 
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
                </li>
                <li className="nav-item">
                <Dropdown>
          <Dropdown.Toggle variant="default btn-default dropdown-toggle btn-lg" id="mybyn" style={{ color: 'black' ,marginRight:'6rem',fontWeight:'500'}}>
            Demo <i> <BsChevronDown size={19} color='#1D165C' style={{ marginBottom: '3px' }}/></i>
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
                  <IoIosHome size={45} color='#1D165C'/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        <div className="banner-image d-flex justify-content-center align-items-center"></div>
      </>
    );
  };

export default Navbar