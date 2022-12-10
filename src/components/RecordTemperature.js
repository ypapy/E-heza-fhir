import { useState } from "react";
import { useParams } from "react-router-dom";
import Head from "next/head";
import NextLink from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Container } from "@mui/material";

const RecordTemperature = () => {
  const [temperature, setTemperature] = useState("");
  const [message, setMessage] = useState("");
  const { id } = useParams();

  const reference = "Patient/" + id;

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:63993/fhir/Observation/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          resourceType: "Observation",
          status: "final",
          category: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/observation-category",
                  code: "vital-signs",
                  display: "Vital Signs",
                },
              ],
              text: "Vital Signs",
            },
          ],
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8310-5",
                display: "Body temperature",
              },
            ],
            text: "Body temperature",
          },
          subject: {
            reference: reference,
          },
          valueQuantity: {
            value: temperature,
            unit: "C",
            code: "Cel",
          },
        }),
      });

      if (res.status === 201) {
        setTemperature("");
        setMessage("Success");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Temperature</title>
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

          <h1>Enter Temperature Value</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Temperature</label>
            <input
              type="text"
              value={temperature}
              placeholder="Temperature"
              onChange={(e) => setTemperature(e.target.value)}
            />

            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                size="medium"
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </Box>

            <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default RecordTemperature;
