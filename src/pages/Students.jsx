
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Students() {
  const students = [
    { id: 101, name: 'Jane Doe', program: 'Computer Science', semester: 2, email: 'jane@example.com' },
    { id: 102, name: 'Mary Doe', program: 'Software Engineering', semester: 4, email: 'mary@example.com' },
    { id: 103, name: 'Gant Doe', program: 'Computer Science', semester: 3, email: 'gant@example.com' },
    { id: 104, name: 'Amm Doe', program: 'Information Technology', semester: 2, email: 'amm@example.com' }
  ];

  const [visibleDetails, setVisibleDetails] = useState({});
  const [refresh, setRefresh] = useState(0);

  function toggleDetails(id) {
    setVisibleDetails(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }

  function viewProfile(id) {
    const key = `profileViews_${id}`;
    const currentViews = Number(localStorage.getItem(key) || 0);
    localStorage.setItem(key, String(currentViews + 1));
    setRefresh(prev => prev + 1);
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1>Students</h1>
          <p className="text-muted">View and manage student records.</p>
        </div>
        <button className="btn btn-primary">+ Add New Student</button>
      </div>

      <div className="row">
        {students.map(student => {
          const isVisible = visibleDetails[student.id];
          const views = Number(
            localStorage.getItem(`profileViews_${student.id}`) || 0
          );

          return (
            <div className="col-md-6 col-lg-3 mb-4" key={student.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3"
                    style={{ width: 55, height: 55, fontSize: 22 }}
                  >
                    {student.name.charAt(0)}
                  </div>

                  <h5 className="card-title">{student.name}</h5>
                  <p className="text-muted mb-2">ID: {student.id}</p>

                  {isVisible && (
                    <div className="mb-3">
                      <hr />
                      <p><strong>Program:</strong> {student.program}</p>
                      <p><strong>Semester:</strong> {student.semester}</p>
                      <p><strong>Email:</strong> {student.email}</p>
                    </div>
                  )}

                  <button
                    className="btn btn-outline-secondary btn-sm w-100 mb-2"
                    onClick={() => toggleDetails(student.id)}
                  >
                    {isVisible ? 'Hide Details' : 'Show Details'}
                  </button>

                  <Link
                    to={`/students/${student.id}`}
                    className="btn btn-primary btn-sm w-100"
                    onClick={() => viewProfile(student.id)}
                  >
                    View Profile
                  </Link>

                  <p className="text-muted small mt-3 mb-0">
                    Profile Views: {views + (refresh < 0 ? 0 : 0)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Students;
