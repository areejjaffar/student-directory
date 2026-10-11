
import React from 'react';

function AlertMessage({ message, onClose }) {
  if (!message) return null;

  return (
    <div
      className="alert alert-info alert-dismissible fade show mt-3"
      role="alert"
    >
      {message}

      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default AlertMessage;
