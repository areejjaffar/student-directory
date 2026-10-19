
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

function StudentProfile() {
  const { id } = useParams();

  const students = {
    101: { name: 'Jane Doe', program: 'Computer Science', semester: 2, email: 'jane@example.com' },
    102: { name: 'Mary Doe', program: 'Software Engineering', semester: 4, email: 'mary@example.com' },
    103: { name: 'Gant Doe', program: 'Computer Science', semester: 3, email: 'gant@example.com' },
    104: { name: 'Amm Doe', program: 'Information Technology', semester: 2, email: 'amm@example.com' }
  };

  const student = students[id];
  const [showDetails, setShowDetails] = useState(false);
  const views = Number(localStorage.getItem(`profileViews_${id}`) || 0);

  if (!student) {
    return (
      <div className="container mt-5">
        <h2>Student not found</h2>
        <Link to="/students" className="btn btn-secondary">Back to Students</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body p-4">
          <h1>Student Profile</h1>
          <hr />

          <p><strong>Student ID:</strong> {id}</p>
          <p><strong>Name:</strong> {student.name}</p>

          <div className="alert alert-info">
            <strong>Profile Views:</strong> {views}
          </div>

          {showDetails && (
            <div>
              <p><strong>Program:</strong> {student.program}</p>
              <p><strong>Semester:</strong> {student.semester}</p>
              <p><strong>Email:</strong> {student.email}</p>
            </div>
          )}

          <button
            className="btn btn-primary me-2 mb-2"
            onClick={() => setShowDetails(prev => !prev)}
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>

          <Link to="/students" className="btn btn-secondary mb-2">
            Back to Students
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
