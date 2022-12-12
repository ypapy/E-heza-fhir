import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GetAllPatients from "./components/GetAllPatients";
import ViewPatientDetails from "./components/ViewPatientDetails";
import CreatePatient from "./components/CreatePatient";
import RecordObservation from "./components/RecordObservation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/CreatePatient" element={<CreatePatient />} />
        <Route path="/" element={<GetAllPatients />} />
        <Route path="/patientDetails/:id" element={<ViewPatientDetails />} />
        <Route path="/RecordObservation/:id" element={<RecordObservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
