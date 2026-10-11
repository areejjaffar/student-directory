
import React from 'react';

function PageHeader({ onAddStudent }) {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
      <h2 className="h4 mb-0">Page Header</h2>

      <button
        className="btn btn-primary btn-sm"
        onClick={onAddStudent}
      >
        Add New Student
      </button>
    </div>
  );
}

export default PageHeader;
