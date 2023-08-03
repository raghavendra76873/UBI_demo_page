import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // Import icons
import "./Pagination.css";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];
  console.log(totalPosts)

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const handlePageClick = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
  };

  const handleNext = (event) => {
    event.preventDefault();
    setCurrentPage(currentPage < pages.length ? currentPage + 1 : currentPage);
  };

  return (
    <div className="pagination justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item mx-2">
            <a className="page-link"  onClick={handlePrevious} style={{}}>
            <IoIosArrowBack color={currentPage === 1 ? '#CDCFD0' : 'black'} /> {/* Left Arrow Icon */}
            </a>
          </li>
          {pages.map((page, index) => {
            return (
              <li
                style={{ border: "none" }}
                className={currentPage === page ? "page-item active" : "page-item"}
                key={index}
                onClick={(e) => handlePageClick(e, page)}
              >
                {" "}
                <a className="page-link mx-2"  >
                  {page}
                </a>
              </li>
            );
          })}
          <li className="page-item mx-2">
            <a className="page-link "  onClick={handleNext} >
            <IoIosArrowForward  color={currentPage === pages.length ? '#CDCFD0' : 'black'} /> {/* Right Arrow Icon */}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

