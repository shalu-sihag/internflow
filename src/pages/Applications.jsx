import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import SearchBar from "../components/common/SearchBar";
import FilterBar from "../components/common/FilterBar";
import InterviewChecklist from "../components/common/InterviewChecklist";

import { useJobs } from "../context/JobContext";

import toast from "react-hot-toast";

function Applications() {
  const {
    jobs,
    deleteJob,
    updateStatus,
  } = useJobs();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.company
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      job.role
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      job.status === filter;

    return matchesSearch && matchesFilter;
  });

  const handleDelete = (id) => {
    deleteJob(id);
    toast.success("Application Deleted");
  };

  const getDeadlineStatus = (deadline) => {
    if (!deadline) return null;

    const today = new Date();

    const deadlineDate = new Date(deadline);

    const diff =
      Math.ceil(
        (deadlineDate - today) /
          (1000 * 60 * 60 * 24)
      );

    if (diff < 0)
      return (
        <span className="expired">
          ❌ Expired
        </span>
      );

    if (diff <= 2)
      return (
        <span className="warning">
          ⚠ Deadline Soon
        </span>
      );

    return (
      <span className="safe">
        {diff} days left
      </span>
    );
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Applications</h1>

        <div className="top-controls">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <FilterBar
            filter={filter}
            setFilter={setFilter}
          />
        </div>

        <div className="applications-grid">
          {filteredJobs.map((job) => (
            <div
              className="job-card"
              key={job.id}
            >
              <h2>{job.company}</h2>

              <p>{job.role}</p>

              <p>
                Deadline: {job.deadline}
              </p>

              {getDeadlineStatus(
                job.deadline
              )}

              <br />

              <select
                value={job.status}
                onChange={(e) =>
                  updateStatus(
                    job.id,
                    e.target.value
                  )
                }
              >
                <option>Applied</option>
                <option>OA</option>
                <option>Interview</option>
                <option>Rejected</option>
                <option>Selected</option>
              </select>

              {job.notes && (
                <div className="notes-box">
                  <h4>Notes</h4>
                  <p>{job.notes}</p>
                </div>
              )}

              <InterviewChecklist
                role={job.role}
                jobId={job.id}
              />

              <button
                className="delete-btn"
                onClick={() =>
                  handleDelete(job.id)
                }
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Applications;