import React from "react";

function Loader() {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" style={{ width: '4rem', height: '4rem' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
