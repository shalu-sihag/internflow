import { Link } from "react-router-dom";
import ThemeToggle from "../common/ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">InternFlow</h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/applications">Applications</Link>
        <Link to="/add-job">Add Job</Link>
      </div>

      <ThemeToggle />
    </nav>
  );
}

export default Navbar;