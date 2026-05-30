function RecentApplications({ jobs }) {
  return (
    <div className="recent-box">
      <h2>Recent Applications</h2>

      {jobs.length === 0 ? (
        <p>No applications added yet.</p>
      ) : (
        jobs.slice(-5).map((job, index) => (
          <div className="job-card" key={index}>
            <h3>{job.company}</h3>
            <p>{job.role}</p>
            <span>{job.status}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default RecentApplications;