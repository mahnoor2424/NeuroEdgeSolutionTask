import React from "react";
import "../App.css";

const jobs = [
  { id: 1, title: "Frontend Developer", department: "Development", type: "Junior", stack: "React", location: "Remote" },
  { id: 2, title: "UI/UX Designer", department: "Design", type: "Senior", stack: "Figma", location: "Onsite" },
  { id: 3, title: "Backend Developer", department: "Development", type: "Senior", stack: "Node", location: "Remote" },
  { id: 4, title: "React Developer", department: "Development", type: "Junior", stack: "React", location: "Onsite" },
  { id: 5, title: "Graphic Designer", department: "Design", type: "Junior", stack: "Figma", location: "Remote" },
  { id: 6, title: "Fullstack Developer", department: "Development", type: "Senior", stack: "Node", location: "Onsite" }
];

const JobList = ({ search, department, type, stack }) => {

  const filteredJobs = jobs.filter(job => {
    return (
      (search === "" || job.title.toLowerCase().includes(search.toLowerCase())) &&
      (department === "All" || job.department === department) &&
      (type === "All" || job.type === type) &&
      (stack === "All" || job.stack === stack)
    );
  });

  return (
    <div className="job-list">
      {filteredJobs.length > 0 ? (
        filteredJobs.map(job => (
          <div key={job.id} className="job-card">
            <div className="job-card-inner">
              <div className="job-top">
                <h3 className="job-title">{job.title}</h3>
                <div className="job-meta">
                  <span className="category">{job.department}</span>
                  <span className="location">{job.location}</span>
                </div>
              </div>
              <div className="job-actions">
                <button className="save-btn">Save</button>
                <button className="apply-btn">Apply</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p style={{ color: "#fff", textAlign: "center", marginTop: "40px" }}>No jobs match your filters.</p>
      )}
    </div>
  );
};

export default JobList;
