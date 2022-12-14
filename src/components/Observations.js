import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Head from "next/head";
import NextLink from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Container, Typography } from "@mui/material";
import queryString from "query-string";
import EditObservations from "./EditObservations";
import ViewPatientObservations from "./ViewPatientObservations";
import updateObservation from "./updateObservation";

const Observations = () => {
  // const url = "http://localhost:63993/fhir/Patient/"
  const { id } = useParams();
  const queryParams = queryString.parse(window.location.search);
  let name = "Yussuf";
  const [edit, setEdit] = useState(false);
  const [description, setDescritption] = useState("Edit observations");
  let hrt;
  let hght;
  let w;
  let t;
  const [heartRate, setHeartRate] = useState({
    id: -1,
    value: 0,
  });
  const [height, setHeight] = useState({
    id: -1,
    value: 0,
  });
  const [weight, setWeight] = useState({
    id: -1,
    value: 0,
  });
  const [temperature, setTemperature] = useState({
    id: -1,
    value: 0,
  });
  const [heartRateChangeTracker, setHeartRateChangeTracker] = useState(false);
  const [weightChangeTracker, setWeightChangeTracker] = useState(false);
  const [heightChangeTracker, setHeightChangeTracker] = useState(false);
  const [temperatureChangeTracker, setTemperatureChangeTracker] =
    useState(false);
  const [noObservations, setNoObservations] = useState(true);

  const handleClick = () => {
    console.log("Clicked :)");
    setEdit(!edit);
    if (!edit) {
      setDescritption("Save observations");
      console.log("Save observations");
      console.log(edit);
    } else {
      setDescritption("Edit observations");
      if (hrt !== heartRate) {
        setHeartRateChangeTracker(true);
        // updateObservation(heartRate.id, heartRate.value)
      }
      if (hght != height) {
        setHeightChangeTracker(true);
      }
      if (w === weight) {
        setWeightChangeTracker(true);
      }
      if (t === temperature) {
        setTemperatureChangeTracker(true);
      }
    }
  };
  useEffect(() => {
    const url = `http://localhost:56869/fhir/Observation?subject=Patient/` + id;
    // console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.total);
        if (response.data.entry.length > 0) {
          setNoObservations(false);
          response.data.entry.forEach((element) => {
            console.log(element);
            if (element.resource.code.text.toLowerCase() === "body height") {
              setHeight({
                id: element.id,
                value: element.resource.valueQuantity.value,
              });
              hght = height.value;
            }
            if (
              element.resource.code.text.toLowerCase() === "body temperature"
            ) {
              setTemperature({
                id: element.id,
                value: element.resource.valueQuantity.value,
              });
              t = temperature.value;
            }
            if (element.resource.code.text.toLowerCase() === "heart rate") {
              setHeartRate({
                id: element.resource.id,
                value: element.resource.valueQuantity.value,
              });
              hrt = heartRate.value;
              console.log(element);
              console.log("My friend no excuse!");
              console.log(heartRate);
            }
            if (element.resource.code.text.toLowerCase() === "body weight") {
              setWeight({
                id: element.id,
                value: element.resource.valueQuantity.value,
              });
              w = weight.value;
            }
          });
        }
      })
      .catch((err) => console.log(err));
    // console.log(id);
  }, []);
  return (
    <>
      <Head>
        <title>Register New Patient</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            {noObservations ? (
              <Typography>
                No observations recorded for {queryParams.name}
              </Typography>
            ) : (
              <ViewPatientObservations
                observations={{ heartRate, height, weight, temperature }}
                name={queryParams.name}
              />
            )}
            {noObservations ? (
              <Button
                href={`/RecordObservation/${id}`}
                id="editObs"
                variant="contained"
                type="submit"
              >
                Take Observations for {queryParams.name}
              </Button>
            ) : (
              <Button
                href={`/patientDetails/editObservations/${id}`}
                id="editObss"
                variant="contained"
                type="submit"
              >
                {description.toLowerCase()}
              </Button>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Observations;
