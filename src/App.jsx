import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AppointmentScheduling from "./pages/AppointmentScheduling.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/appointment-scheduling" element={<AppointmentScheduling />} />
      </Routes>
    </Router>
  );
}

export default App;
