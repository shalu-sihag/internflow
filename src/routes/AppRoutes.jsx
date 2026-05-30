import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Applications from "../pages/Applications";
import AddJob from "../pages/AddJob";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/add-job" element={<AddJob />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;