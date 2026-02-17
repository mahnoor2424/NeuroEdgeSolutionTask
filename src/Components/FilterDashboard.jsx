import React, { useState } from "react";
import "../App.css";

const jobs = [
  {
    id: 1,
    category: "Engineering",
    location: "Remote",
    title: "Senior Full-Stack Developer",
    type: "Full-time",
    experience: "5+ years",
    salary: "$80k - $120k",
    responsibilities: [
      "Architect and maintain scalable web applications.",
      "Lead code reviews and mentor junior developers.",
      "Collaborate with designers to implement pixel-perfect UIs.",
      "Optimize cloud infrastructure for performance and cost."
    ],
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    perks: ["Home Office Budget", "Unlimited PTO"]
  },
  {
    id: 2,
    category: "Design",

            location: "Remote [Global]",
    title: "Senior UI/UX Designer",
    type: "Full-time",
    experience: "4+ years",
    salary: "$65k - $90k",
    responsibilities: [
      "Create user-centered designs.",
      "Develop wireframes and prototypes.",
      "Work closely with engineering team."
    ],
    stack: ["Figma", "Adobe XD", "Design Systems"],
    perks: ["Remote Work", "Health Insurance"]
  },
  {
    id: 3,
    category: "Business Development",
        location: "Remote [Hybrid]",
    title: "Freelance Platforms Specialist",
    type: "Full-time",
    experience: "3+ years",
    salary: "$1.5k - $4k + Commission",
    responsibilities: [
      "Manage profiles on multiple freelance platforms.",
      "Identify and apply for relevant projects.",
      "Maintain client communication and follow-ups.",
      "Optimize proposals for higher win rates."
    ],
    stack: ["Upwork", "Fiverr", "LinkedIn Sales Navigator"],
    perks: ["Flexible Hours", "Remote Work"]
  },
  {
    id: 4,
    category: "Business Development",
            location: "Remote [Global]",
    title: "Technical Bidder & Lead Gen",
    type: "Full-time",
    experience: "4+ years",
    salary: "$2k - $5k + Bonus",
    responsibilities: [
      "Research potential clients and leads.",
      "Prepare technical proposals and bids.",
      "Track project submissions and deadlines.",
      "Coordinate with sales and engineering teams."
    ],
    stack: ["CRM Tools", "Google Workspace", "Microsoft Excel"],
    perks: ["Remote Work", "Performance Bonus"]
  },
  {
    id: 5,
    category: "Business Development",
            location: "Remote ",
    title: "Upwork Bidder / BD Executive",
    type: "Full-time",
    experience: "2+ years",
    salary: "$1k - $3k + Commission",
    responsibilities: [
      "Handle Upwork account and client proposals.",
      "Generate and qualify new business leads.",
      "Maintain relationships with active clients.",
      "Analyze platform metrics to improve win rate."
    ],
    stack: ["Upwork", "CRM Tools", "Excel"],
    perks: ["Remote Work", "Flexible Schedule"]
  },
  {
    id: 6,
    category: "Engineering",
            location: "Remote [Hybrid]",
    title: "Web Developer Intern",
    type: "Internship",
    experience: "Fresher / Student",
    salary: "Paid Internship",
    responsibilities: [
      "Assist in front-end and back-end development.",
      "Learn and implement best coding practices.",
      "Participate in code reviews and team meetings.",
      "Help optimize website performance and UX."
    ],
    stack: ["HTML", "CSS", "JavaScript", "React"],
    perks: ["Mentorship", "Remote Work"]
  }
];
const toggleSave = (id) => {
  setSavedJobs((prev) =>
    prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id]
  );
};

export default function JobBoard() {
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [filterType, setFilterType] = useState("All");
  const [filterStack, setFilterStack] = useState("All");

const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase());
    const matchesRole = filterRole === "All" || job.role === filterRole;
    const matchesType = filterType === "All" || job.type === filterType;
    const matchesStack =
  filterStack === "All" || job.stack.includes(filterStack);
    return matchesSearch && matchesRole && matchesType && matchesStack;
  });
const [openJobId, setOpenJobId] = useState(null);
const [savedJobs, setSavedJobs] = useState([]);


const toggleSpecs = (id) => {
  setOpenJobId(openJobId === id ? null : id);
};

  const removeFilter = (type) => {
    if (type === "role") setFilterRole("All");
    if (type === "type") setFilterType("All");
    if (type === "stack") setFilterStack("All");
  };

  return (
    <section className="job-board">
      {/* Filters */}
  <div className="filter-card container">
  <div className="filter-top">

    {/* Search */}
    <div className="search-box">
      <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>

      <input
        type="text"
        placeholder="Search by role or stack..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    {/* Filters */}
    <div className="filter-grid">

      {/* Role */}
      <div className="select-wrapper">
        <select
          className="custom-select"
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
        >
          <option value="All">Role: All</option>
          <option value="Engineering">Engineering</option>
          <option value="Design">Design</option>
          <option value="Business Development">Business Development</option>
        </select>
        <span className="select-arrow">⌄</span>
      </div>

      {/* Type */}
      <div className="select-wrapper">
        <select
          className="custom-select"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="All">Type: All</option>
          <option value="Full-time">Full-time</option>
          <option value="Internship">Internship</option>
        </select>
        <span className="select-arrow">⌄</span>
      </div>

      {/* Stack */}
      <div className="select-wrapper">
        <select
          className="custom-select"
          value={filterStack}
          onChange={(e) => setFilterStack(e.target.value)}
        >
          <option value="All">Stack: All</option>
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
          <option value="Figma">Figma</option>
          <option value="Upwork">Upwork</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Lead Generation">Lead Generation</option>
        </select>
        <span className="select-arrow">⌄</span>
      </div>

    </div>
  </div>

  {/* Active Filters */}
  {(filterRole !== "All" || filterType !== "All" || filterStack !== "All") && (
    <div className="active-filters">

      <span className="filter-label">Active Filters:</span>

      {filterRole !== "All" && (
        <button
          className="filter-chip"
          onClick={() => removeFilter("role")}
        >
          {filterRole} <span>×</span>
        </button>
      )}

      {filterType !== "All" && (
        <button
          className="filter-chip"
          onClick={() => removeFilter("type")}
        >
          {filterType} <span>×</span>
        </button>
      )}

      {filterStack !== "All" && (
        <button
          className="filter-chip"
          onClick={() => removeFilter("stack")}
        >
          {filterStack} <span>×</span>
        </button>
      )}

      {/* Reset */}
      <button
        className="reset-btn"
        onClick={() => {
          setFilterRole("All");
          setFilterType("All");
          setFilterStack("All");
          setSearch("");
        }}
      >
        Reset Dashboard
      </button>

    </div>
  )}
</div>

<div className="jobs-grid container">
  {filteredJobs.length > 0 ? (
    filteredJobs.map((job) => (
      <article
        key={job.id}
        className={`job-card ${openJobId === job.id ? "active" : ""}`}
      >

        {/* Top Section */}
        <div className="job-top">
          <div className="job-info">
            <div className="job-tags">
              <span className="job-role">{job.category}</span>
              <span className="job-location">{job.location}</span>
            </div>

            <h3 className="job-title">{job.title}</h3>

            <div className="job-meta">
              <span>{job.type}</span>
              <span>{job.experience}</span>
              <span>{job.salary}</span>
            </div>
          </div>

          <div className="job-actions">
             <button
  className={`btn-save ${savedJobs.includes(job.id) ? "saved" : ""}`}
  onClick={() => toggleSave(job.id)}
>
  <svg
    viewBox="0 0 24 24"
    className="save-icon"
    fill={savedJobs.includes(job.id) ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" />
  </svg>
</button>


            <button
              className="btn-specs"
              onClick={() => toggleSpecs(job.id)}
            >
              {openJobId === job.id ? "Hide" : "Specs"}
            </button>

            <button className="btn-apply">Apply</button>
          </div>
        </div>

{/* Expand Section */}
{openJobId === job.id && (
  <div className="job-expand">
    <div className="expand-grid">

      {/* LEFT */}
      <div className="expand-left">
        <h4 className="expand-heading">
          <span></span>
          Responsibilities
        </h4>

        <ul className="expand-list">
          {job.responsibilities?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="expand-right">
        <h4 className="expand-heading">
          <span></span>
          Stack Node Integration
        </h4>

        <div className="stack-taags">
          {job.stack?.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        {job.perks && (
          <div className="perks-section">
            <h4 className="expand-heading small">
              Perks & Benefits
            </h4>

            <div className="perks-grid">
              {job.perks.map((perk, index) => (
                <div className="perk-item" key={index}>
                  ✓ <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  </div>
)}


      </article>
    ))
  ) : (
    <div className="no-jobs">No jobs found for selected filters.</div>
  )}
</div>

    </section>
  );
}
