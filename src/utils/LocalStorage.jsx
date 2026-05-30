export const saveJobs = (jobs) => {
  localStorage.setItem("jobs", JSON.stringify(jobs));
};

export const getJobs = () => {
  return JSON.parse(localStorage.getItem("jobs")) || [];
};