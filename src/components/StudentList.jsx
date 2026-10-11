
import React from 'react';
import StudentCard from './StudentCard';

function StudentList({ students, onViewProfile, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="alert alert-warning">
        No students found.
      </div>
    );
  }

  return (
    <div className="row g-3 justify-content-center">
      {students.map((student) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={student.id}>
          <StudentCard
            name={student.name}
            id={student.id}
            major={student.major}
            year={student.year}
            gpa={student.gpa}
            onViewProfile={() => onViewProfile(student)}
            onDelete={() => onDelete(student.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default StudentList;
