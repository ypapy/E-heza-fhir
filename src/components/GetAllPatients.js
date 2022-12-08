import axios from 'axios';
import { useState, useEffect } from 'react';
import PatientsInfoTable from './PatientsInfoTable';

const GetAllPatients = () => {
    const url = "http://localhost:57916/fhir/Patient"
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
         {patients.length!==0 && <PatientsInfoTable patients={patients}/>}
            
        </>
    )

}

export default GetAllPatients;