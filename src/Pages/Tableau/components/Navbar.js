import React from "react";
import logo from "./tableau.png";
import { Dropdown } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
const Navbar = () => {
    return (
        <div>
            <br />
            <div class="d-flex justify-content-between">
                <img src={logo} alt="" style={{ width: "210px" }} />
                <Dropdown>
                    <Dropdown.Toggle
                        variant="default btn-default dropdown-toggle btn-md"
                        id="mybyn"
                        style={{ color: 'white' ,backgroundColor:'#1D165C',marginTop:'10px',fontSize:'18px'}}
                    >
                        <i>
                            <FaFilter
                                size={19}
                                color="#3993DD"
                                style={{ marginBottom: "4px",marginRight:'4px'}}
                            />
                        </i>
                        Filter By Industries{" "}
                        <i>
                            <BsChevronDown
                                size={19}
                                color="#3993DD"
                                style={{ marginBottom: "4px" }}
                            />
                        </i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <br />
            <div style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
  <hr />
</div>

            <br />
    
            <div class="d-flex justify-content-between" style={{paddingLeft:'5%',paddingRight:'5%'}}>
                <span id="span1">Name</span>
                <span id="span1">Industry</span>
            </div>
        </div>
    );
};

export default Navbar;
