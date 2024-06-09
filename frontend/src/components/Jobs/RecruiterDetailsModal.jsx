import React from "react";

const RecruiterDetailsModal = ({ recruiter, onClose }) => {
  return (
    <>
      <input
        type="checkbox"
        id="recruiterDetailsModal"
        className="modal-toggle"
        checked={!!recruiter}
        readOnly
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Recruiter Details</h3>
          <p>
            <strong>Name:</strong> {recruiter.name}
          </p>
          <p>
            <strong>Email:</strong> {recruiter.email}
          </p>
          <p>
            <strong>Phone:</strong> {recruiter.phone}
          </p>
          <div className="modal-action">
            <button className="btn btn-primary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecruiterDetailsModal;
