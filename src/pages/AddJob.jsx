import Navbar from "../components/layout/Navbar";
import JobForm from "../components/forms/JobForm";

function AddJob() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Add New Application</h1>

        <JobForm />
      </div>
    </>
  );
}

export default AddJob;