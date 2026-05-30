import { useState } from "react";
import { useJobs } from "../../context/JobContext";
import toast from "react-hot-toast";

function JobForm() {
  const { addJob } = useJobs();

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    deadline: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addJob(formData);

    toast.success("Application Added");

    setFormData({
      company: "",
      role: "",
      status: "Applied",
      deadline: "",
      notes: "",
    });
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={formData.company}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
        required
      />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option>Applied</option>
        <option>OA</option>
        <option>Interview</option>
        <option>Rejected</option>
        <option>Selected</option>
      </select>

      <input
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
      />

      <textarea
        name="notes"
        placeholder="Interview Notes..."
        rows="4"
        value={formData.notes}
        onChange={handleChange}
      />

      <button type="submit">
        Add Application
      </button>
    </form>
  );
}

export default JobForm;