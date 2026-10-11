import React from "react";

function Navbar({ searchInput, setSearchInput, onNavigate }) {
  return (
    <>
      {/* Top Header */}
      <div className="top-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', background: '#fff' }}>
        <h2 className="portal-title" style={{ margin: 0 }}>Student Portal</h2>

        <nav className="main-links" style={{ display: 'flex', gap: '20px' }}>
          <a href="#dashboard">Dashboard</a>
          <a href="#students">Students</a>
          <a href="#courses">Courses</a>
          <a href="#reports">Reports</a>
        </nav>

        <div className="header-actions" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button className="settings-btn" style={{ padding: '6px 12px', cursor: 'pointer' }}>Settings</button>
          
          {/* Working Search Bar */}
          <input
            type="text"
            placeholder="Search students..."
            value={searchInput}
            onChange={setSearchInput}
            style={{
              padding: '6px 12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              outline: 'none',
              width: '200px'
            }}
          />
        </div>
      </div>

      {/* Black Navbar */}
      <nav className="black-navbar" style={{ background: '#1a1a1a', padding: '10px 20px', display: 'flex', gap: '20px' }}>
        <a href="#home" onClick={() => onNavigate('home')} style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
        <a href="#student-list" onClick={() => onNavigate('student-list')} style={{ color: '#fff', textDecoration: 'none' }}>Directory</a>
      </nav>
    </>
  );
}

export default Navbar;