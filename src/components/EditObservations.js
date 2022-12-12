import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import axios from "axios";
import Head from "next/head";
import NextLink from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import queryString from "query-string"
import updateObservation from "./updateObservation";
import { useNavigate } from "react-router-dom";

const EditObservations = (props) => {
  // const url = "http://localhost:63993/fhir/Patient/"
  const { id } = useParams();
  const queryParams = queryString.parse(window.location.search)
  // const { name } = props
  const { name } = props
  const [heartRate, setHeartRate] = useState(0)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [temperature, setTemperature] = useState(0)
  const [heartRateId, setHeartRateId] = useState(0)
  const [weightId, setWeightId] = useState(0)
  const [heightId, setHeightId] = useState(0)
  const [temperatureId, setTemperatureId] = useState(0)
  const baseUrl = "http://localhost:8080/fhir/Observation/"
  const { trackChanges } = props
  const navigate = useNavigate()
  console.log(props)
  console.log(trackChanges)
  let handleSubmit = async (e) => {
    console.log("Confirmation ++++++++++")
    console.log(heightId)
    let reference = "Patient/" + id
    console.log(heightId)
    console.log(heartRateId)
    console.log(weightId)
    console.log(temperatureId)
    updateObservation(heightId, height, "Body height", reference)
    updateObservation(heartRateId, heartRate, "Body heartRate", reference)
    updateObservation(weightId, weight, "Body weight", reference)
    updateObservation(temperatureId, temperature, "Body temperature", reference)
    navigate(-1)
   }
  useEffect(() => {
    const url = `http://localhost:8080/fhir/Observation?subject=Patient/` + id;
    // console.log(url);
    axios
      .get(url)
      .then((response) => {
        if (response.data.total > 0) {
          response.data.entry.forEach(element => {
            console.log("Same source")
            console.log(element.resource.id)
            if (element.resource.code.text.toLowerCase() === "body height") {
              setHeight(element.resource.valueQuantity.value)
              setHeightId(element.resource.id)
            }
            if (element.resource.code.text.toLowerCase() === "body temperature") {
              setTemperature(element.resource.valueQuantity.value)
              setTemperatureId(element.resource.id)

            }
            if (element.resource.code.text.toLowerCase() === "body heartrate") {
              setHeartRate(element.resource.valueQuantity.value)
              setHeartRateId(element.resource.id)

              console.log(element)
              console.log("My friend no excuse!")
              console.log(heartRate)
            }
            if (element.resource.code.text.toLowerCase() === "body weight") {
              setWeight(element.resource.valueQuantity.value)
              setWeightId(element.resource.id)
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
          <NextLink href="/" passHref>
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              All Patients
            </Button>
          </NextLink>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="header">
              {/* <h1>Observations for {{ $name }}</h1> */}
              <Typography variant="h6" component="h5">
                Edit Observations for {name}
              </Typography>

            </div>
            <div>
              <TextField
                label="Heart Rate in BPM"
                variant="standard"
                value={heartRate}
                onChange={(e) => setHeartRate(e.target.value)}
              />
            </div>
            <div>
              <TextField
                label="Weight in kgs"
                variant="standard"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div>
              <TextField
                label="Height in cms"
                variant="standard"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div>
              <TextField
                label="Temperature in c"
                variant="standard"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
              />
            </div>
            <Button variant="contained" href="#" onClick={handleSubmit}>
              Save
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default EditObservations;
