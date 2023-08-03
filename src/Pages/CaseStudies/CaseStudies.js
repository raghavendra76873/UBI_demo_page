import './CaseStudies.css';
import React, { useState, useEffect } from "react";
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import { data } from './data';
import Pagination from './Components/Pagination';
import { MdKeyboardArrowDown } from "react-icons/md";
import Dropdown from 'react-bootstrap/Dropdown';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState("All");
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleFilterChange = (eventKey) => {
    setSelectedFilter(eventKey);
  };
  const filteredData = data.filter((item) => {
    if (selectedFilter === "All" || item.category === selectedFilter) {
      return searchText === "" || item.description.toLowerCase().includes(searchText.toLowerCase());
    }
    return false;
  });
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredData.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        <p className="col-auto my-2" style={{color:'#1D165C',fontWeight:'500'}}>Filter By:</p>
        <Dropdown className="col-auto" onSelect={handleFilterChange}>
          <Dropdown.Toggle
            variant=""
            id="dropdown-basic"
            className='rounded-3'
            style={{
              backgroundColor: "#FEFEFE",
              border: "1px solid #AEAEAE",
              color: "#AEAEAE",
              width: "16rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: "10px",
              boxShadow:'0px 2px 5px rgba(0, 0, 0, 0.2)'
            }}
          >
            All <MdKeyboardArrowDown size={20} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="Life Sciences">Life Sciences</Dropdown.Item>
            <Dropdown.Item eventKey="Banking and Financials">Banking and Financials</Dropdown.Item>
            <Dropdown.Item eventKey="Retail & CPG">Retail & CPG</Dropdown.Item>
            <Dropdown.Item eventKey="Automotive<">Automotive</Dropdown.Item>
            <Dropdown.Item eventKey="Hi-tech">Hi-tech</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
              <div className="col-auto group">
                {searchText === "" ? (
                  <svg
                    className="icon"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                  </svg>
                ) : null}
                <input
                  placeholder="Search"
                  type="search"
                  className="input"
                  value={searchText}
                  onChange={handleInputChange}
                />
              </div>
      </div>
    </div>
      <br />
      <br />
      <div className="container-fluid"
        style={
          { width: '1200px' }
        }>
        <div className="row justify-content-center">
          {
            currentPosts.map((x, index) => (
              <Card key={index}
                name={
                  x.name
                }
                icon={
                  x.icon
                }
                description={
                  x.description
                }
                link={
                  x.link
                } />
            ))
          } </div>
        <Pagination totalPosts={
          filteredData.length
        }
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage} />
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;