import axios from "axios";
import { useState, useEffect } from "react";
import PatientsInfoTable from "./PatientsInfoTable";
import { Box, Button } from "@mui/material";

const GetAllPatients = () => {
  const url = "http://localhost:56869/fhir/Patient";
  const [patients, setPatients] = useState([]);
  const [fetched, setFetched] = useState(false)

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPatients(response.data.entry);
        if(patients.length!==0)
          setFetched(true)
        // console.log(patients)
      })
      .catch((err) => console.log(err));
  }, [patients, ]);

  return (
    <>
      <Box sx={{ py: 2 }}>
        <Button
          href="./CreatePatient"
          color="primary"
          size="medium"
          type="submit"
          variant="contained"
        >
          Register New Patient
        </Button>
      </Box>

      {fetched && <PatientsInfoTable patients={patients} />}
    </>
  );
};

export default GetAllPatients;
