import axios from 'axios';
import { useState, useEffect } from 'react';
import PatientsInfoTable from './PatientsInfoTable';

const GetAllPatients = () => {
    const url = "http://localhost:63993/fhir/Patient"
    const [patients, setPatients] = useState([]);
    useEffect(()=>{
        axios.get(url)
             .then(response=> {
                setPatients(response.data.entry)
                // console.log(patients)
             })
             .catch(err=> console.log(err))
    }, [patients])
  
    return (
        
        <>
        <div className="register-patient">
        <a href="./createPatient">
        <button>Register New Patient</button>
        </a>
        </div>
        
         {patients.length!==0 && <PatientsInfoTable patients={patients}/>}
            
        </>
    )

}

export default GetAllPatients;