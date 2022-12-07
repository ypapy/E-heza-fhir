import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GetAllPatients from './components/GetAllPatients';
import ViewPatientDetails from './components/ViewPatientDetails.js';

function App() {
  return (
    // <div className="App">
    //    <GetAllPatients />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetAllPatients/>}/>
        <Route path="/create" element={<GetAllPatients/>}/>
        <Route path="/patientDetails/:id" element={<ViewPatientDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
