
function Home() {
  return (
    <div
      className="container mt-5 p-4 p-md-5 rounded-3 shadow-sm"
      style={{
        backgroundColor: '#f4f7fc',
        border: '1px solid #e1e8f0',
        minHeight: '260px'
      }}
    >
      <h1
        className="fw-bold mb-3"
        style={{ color: '#253858' }}
      >
        Welcome to Student Portal
      </h1>

      <p
        className="lead mb-0"
        style={{
          color: '#5b6b82',
          lineHeight: '1.8'
        }}
      >
        Manage students, courses and student profiles.
      </p>
    </div>
  );
}

export default Home;
