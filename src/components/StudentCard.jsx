
import React from 'react';

function StudentCard({
  name,
  id,
  major,
  year,
  gpa,
  onViewProfile,
  onDelete
}) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="bg-light text-secondary text-center py-3">
        <svg
          width="65"
          height="65"
          viewBox="0 0 100 100"
          role="img"
          aria-label="Student avatar"
        >
          <circle cx="50" cy="30" r="17" fill="#adb5bd" />
          <path
            d="M15 95 C15 62 32 48 50 48
               C68 48 85 62 85 95 Z"
            fill="#adb5bd"
          />
        </svg>
      </div>

      <div className="card-body p-2">
        <h6 className="card-title mb-1">{name}</h6>

        <div className="small text-secondary">
          <div>ID: {id}</div>
          <div>Major: {major}</div>
          <div>Year: {year}</div>
          <div>GPA: {gpa.toFixed(1)}</div>
        </div>

        <div className="d-flex gap-1 mt-2">
          <button
            className="btn btn-outline-primary btn-sm flex-grow-1"
            onClick={onViewProfile}
          >
            View Profile
          </button>

          <button
            className="btn btn-outline-danger btn-sm"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
