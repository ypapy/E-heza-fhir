import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GetAllPatients from './components/GetAllPatients';
import ViewPatientDetails from './components/ViewPatientDetails.js';
import CreatePatient from './components/create_patient';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path="/createPatient" element={<CreatePatient/>}/>
      <Route path="/" element={<GetAllPatients/>}/>  
      <Route path="/patientDetails/:id" element={<ViewPatientDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
