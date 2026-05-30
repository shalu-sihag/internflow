import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
import { JobProvider } from "./context/JobContext";

function App() {
  return (
    <ThemeProvider>
      <JobProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </JobProvider>
    </ThemeProvider>
  );
}

export default App;