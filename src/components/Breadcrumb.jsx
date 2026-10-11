
import React from 'react';

function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb" className="mb-3">
      <ol className="breadcrumb bg-dark text-white p-2 rounded mb-0">
        <li className="breadcrumb-item">
          <a href="#" className="text-white-50 text-decoration-none">
            Home
          </a>
        </li>
        <li className="breadcrumb-item">
          <a href="#" className="text-white-50 text-decoration-none">
            Students
          </a>
        </li>
        <li
          className="breadcrumb-item active text-white"
          aria-current="page"
        >
          Directory
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
