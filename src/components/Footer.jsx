
import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <h6>Links</h6>
            <ul className="list-unstyled small mb-0">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Computer Science</a></li>
              <li><a href="#" className="text-white text-decoration-none">Courses</a></li>
              <li><a href="#" className="text-white text-decoration-none">Reports</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-6">
            <h6>Contact Info</h6>
            <div className="small">
              Contact Us
              <br />
              +1: 123 456 7890
              <br />
              info@studentportal.com
            </div>
          </div>
        </div>

        <hr className="border-secondary" />

        <p className="text-center small mb-0">
          © 2026 StudentPortal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
