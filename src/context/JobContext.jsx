import { createContext, useContext, useEffect, useState } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    setJobs((prevJobs) => [
      ...prevJobs,
      {
        ...job,
        id: Date.now(),
      },
    ]);
  };

  const deleteJob = (id) => {
    setJobs((prevJobs) =>
      prevJobs.filter((job) => job.id !== id)
    );
  };

  const updateStatus = (id, status) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id
          ? { ...job, status }
          : job
      )
    );
  };

  const updateJob = (updatedJob) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === updatedJob.id
          ? updatedJob
          : job
      )
    );
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        addJob,
        deleteJob,
        updateStatus,
        updateJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => useContext(JobContext);