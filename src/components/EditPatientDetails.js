import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import axios from "axios";
import Head from "next/head";
import NextLink from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"

const EditPatientDetails = (props) => {
  const navigate = useNavigate()
  // const url = "http://localhost:63993/fhir/Patient/"
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactPhone, setEmergencyContactPhone] = useState("");
  const [city, setCity] = useState("");
  const [streetNo, setStreetNo] = useState("");

  const url = `http://localhost:56869/fhir/Patient/` + id;
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
     fetch(url, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          resourceType: "Patient",
          id,
          active: true,
          name: [
            {
              use: "official",
              family: lastName,
              given: [firstName],
            },
          ],
          telecom: [
            {
              system: "phone",
              value: phoneNumber,
              use: "mobile",
            },
            {
              system: "email",
              value: email,
            },
          ],
          gender: gender,
          birthDate: birthDate,
          address: [
            {
              use: "home",
              line: [streetNo],
              city: city,
              district: district,
              state: state,
            },
          ],
          contact: [
            {
              name: {
                given: [emergencyContactName],
              },
              telecom: [
                {
                  system: "phone",
                  value: emergencyContactPhone,
                },
              ],
            },
          ],
        }),
      })
      .then(response=> navigate(-1) );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
   
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response.data)
        setFirstName(response.data.name[0].given[0].toUpperCase());
        setLastName(response.data.name[0].family.toUpperCase());
        setGender(response.data.gender);
        setBirthDate(response.data.birthDate);
        setCity(response.data.address[0].city.toUpperCase());
        setState(response.data.address[0].state.toUpperCase());
        setStreetNo(response.data.address[0].line[0].toUpperCase());
        setphoneNumber(response.data.telecom[0].value);
        setEmail(response.data.telecom[1].value);
        setDistrict(response.data.address[0].district.toUpperCase());
        setEmergencyContactName(
          response.data.name[0].given[0].toUpperCase()
        );
        setEmergencyContactPhone(response.data.contact[0].telecom[0].value);
      })
      .catch((err) => console.log(err));
    console.log(id);
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
              <h1>Patient Details</h1>
            </div>
            <div>
              <TextField
                label="FirstName"
                variant="standard"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                label="LastName"
                variant="standard"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <TextField
                label="Gender"
                variant="standard"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
              <TextField
                label="BirthDate"
                variant="standard"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>

            <div>
              <TextField
                label="Phone number"
                variant="standard"
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
              />
              <TextField
                label="Email"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <TextField
                id="standard-read-only-input"
                label="Street"
                variant="standard"
                value={streetNo}
                onChange={(e) => setStreetNo(e.target.value)}
              />
              <TextField
                label="City"
                onChange={(e) => setCity(e.target.value)}
                variant="standard"
                value={city}
              />
              <TextField
                label="District"
                variant="standard"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
              <TextField
                label="State"
                variant="standard"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div>
              <TextField
                label="Emergency Contact Person"
                variant="standard"
                value={emergencyContactName}
                onChange={(e) => setEmergencyContactName(e.target.value)}
              />
              <TextField
                label="Emergency Contact Phone"
                variant="standard"
                value={emergencyContactPhone}
                onChange={(e) => setEmergencyContactPhone(e.target.value)}
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
export default EditPatientDetails;
