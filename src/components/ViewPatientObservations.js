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

const ViewPatientObservations = (props) => {
  // const url = "http://localhost:63993/fhir/Patient/"
  const { id } = useParams();
  const queryParams = queryString.parse(window.location.search)
  // const { name } = props
  const { name } = props
  const { heartRate } = props.observations
  const { height } = props.observations
  const { weight } = props.observations
  const { temperature } = props.observations

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
                Observations for {name}
              </Typography>

            </div>
            <div>
              <TextField
                label="Heart Rate in BPM"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                value={heartRate.value}
              />
            </div>
            <div>
              <TextField
                label="Weight in kgs"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                value={weight.value}
              />
            </div>

            <div>
              <TextField
                label="Height in cms"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                value={height.value}
              />
            </div>
            <div>
              <TextField
                label="Temperature in c"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                value={temperature.value}
              />
            </div>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default ViewPatientObservations;
