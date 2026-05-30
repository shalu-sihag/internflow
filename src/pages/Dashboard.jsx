import Navbar from "../components/layout/Navbar";
import StatsCard from "../components/dashboard/StatsCard";
import RecentApplications from "../components/dashboard/RecentApplications";

import { useJobs } from "../context/JobContext";

function Dashboard() {
  const { jobs } = useJobs();

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Dashboard</h1>

        <div className="stats-grid">
          <StatsCard title="Total Applications" value={jobs.length} />

          <StatsCard
            title="Interviews"
            value={jobs.filter((job) => job.status === "Interview").length}
          />

          <StatsCard
            title="Selected"
            value={jobs.filter((job) => job.status === "Selected").length}
          />
        </div>

        <RecentApplications jobs={jobs} />
      </div>
    </>
  );
}

export default Dashboard;