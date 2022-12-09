import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GetAllPatients from "./components/GetAllPatients";
import ViewPatientDetails from "./components/ViewPatientDetails.js";
import CreatePatient from "./components/CreatePatient";
import CreateObservation from "./components/CreateObservation";
import RecordHeight from "./components/RecordHeight";
import RecordTemperature from "./components/RecordTemperature";
import RecordWeight from "./components/RecordWeight";
import RecordHeartRate from "./components/RecordHeartRate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/CreatePatient" element={<CreatePatient />} />
        <Route path="/" element={<GetAllPatients />} />
        <Route path="/patientDetails/:id" element={<ViewPatientDetails />} />
        <Route path="/CreateObservation" element={<CreateObservation />} />
        <Route path="/CreateObservation/RecordHeight" element={<RecordHeight />} />
        <Route path="/CreateObservation/RecordTemperature" element={<RecordTemperature />} />
        <Route path="/CreateObservation/RecordWeight" element={<RecordWeight />} />
        <Route path="/CreateObservation/RecordHeartRate" element={<RecordHeartRate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
