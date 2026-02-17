import React, { useState } from "react";
import "../App.css";

const JobCard = ({
  category,
  location,
  title,
  jobType,
  experience,
  salary,
  stack = []
}) => {
  const [showSpecs, setShowSpecs] = useState(false);

  return (
    <article className="job-card">
      <div className="job-card-inner">
        <div className="job-card-content">

          {/* LEFT SIDE */}
          <div className="job-left">
            <div className="job-badges">
              <span className="badge-category">{category}</span>
              <span className="badge-location">{location}</span>
            </div>

            <h3 className="job-title">{title}</h3>

            <div className="job-meta">
              <span>{jobType}</span>
              <span>{experience}</span>
              <span>{salary}</span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="job-actions">
            <button className="save-btn">🔖</button>

            <button
              className="specs-btn"
              onClick={() => setShowSpecs(!showSpecs)}
            >
              Specs
              <span className={showSpecs ? "arrow rotate" : "arrow"}>
                ▼
              </span>
            </button>

            <button className="apply-btn">Apply</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default JobCard;
