import { useParams } from "react-router-dom";
import Head from "next/head";
import NextLink from "next/link";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Container } from "@mui/material";

const RecordObservation = (props) => {
  const { id } = useParams();
  const [height, setHeight] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weight, setWeight] = useState("");
  const [message, setMessage] = useState("");

  const reference = "Patient/" + id;

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:56869/fhir/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          resourceType: "Bundle",
          type: "transaction",
          entry: [
            {
              resource: {
                resourceType: "Observation",
                id: "heart-rate",
                meta: {
                  profile: [
                    "http://hl7.org/fhir/StructureDefinition/vitalsigns",
                  ],
                },
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
                      code: "8667-4",
                      display: "Heart rate",
                    },
                  ],
                  text: "Heart rate",
                },
                subject: {
                  reference: reference,
                },
                effectiveDateTime: "2022-07-02",
                valueQuantity: {
                  value: heartRate,
                  unit: "inbeats/minute",
                  system: "http://unitsofmeasure.org",
                  code: "/min",
                },
              },
              request: {
                method: "POST",
                url: "Observation",
              },
            },
            {
              resource: {
                resourceType: "Observation",
                id: "body-height",
                meta: {
                  profile: [
                    "http://hl7.org/fhir/StructureDefinition/vitalsigns",
                  ],
                },
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
                      code: "8302-2",
                      display: "Body height",
                    },
                  ],
                  text: "Body height",
                },
                subject: {
                  reference: reference,
                },
                effectiveDateTime: "2022-07-02",
                valueQuantity: {
                  value: height,
                  unit: "in",
                  system: "http://unitsofmeasure.org",
                  code: "[in_i]",
                },
              },
              request: {
                method: "POST",
                url: "Observation",
              },
            },
            {
              resource: {
                resourceType: "Observation",
                id: "body-temperature",
                meta: {
                  profile: [
                    "http://hl7.org/fhir/StructureDefinition/vitalsigns",
                  ],
                },
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
                effectiveDateTime: "2022-07-02",
                valueQuantity: {
                  value: temperature,
                  unit: "C",
                  system: "http://unitsofmeasure.org",
                  code: "Cel",
                },
              },
              request: {
                method: "POST",
                url: "Observation",
              },
            },
            {
              resource: {
                resourceType: "Observation",
                id: "body-weight",
                meta: {
                  profile: [
                    "http://hl7.org/fhir/StructureDefinition/vitalsigns",
                  ],
                },
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
                      code: "29463-7",
                      display: "Body Weight",
                    },
                  ],
                  text: "Body weight",
                },
                subject: {
                  reference: reference,
                },
                effectiveDateTime: "2022-07-02",
                valueQuantity: {
                  value: weight,
                  unit: "lbs",
                  system: "http://unitsofmeasure.org",
                  code: "[lb_av]",
                },
              },
              request: {
                method: "POST",
                url: "Observation",
              },
            },
          ],
        }),
      });

      if (res.status === 200) {
        setHeartRate("");
        setHeight("");
        setTemperature("");
        setWeight("");
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
        <title>Record Observation</title>
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Heart Rate</label>
            <input
              type="text"
              value={heartRate}
              placeholder="Heart Rate"
              onChange={(e) => setHeartRate(e.target.value)}
            />
            <label htmlFor="">Height</label>
            <input
              type="text"
              value={height}
              placeholder="Height"
              onChange={(e) => setHeight(e.target.value)}
            />
            <label htmlFor="">Temperature</label>
            <input
              type="text"
              value={temperature}
              placeholder="Temperature"
              onChange={(e) => setTemperature(e.target.value)}
            />
            <label htmlFor="">Weight</label>
            <input
              type="text"
              value={weight}
              placeholder="Weight"
              onChange={(e) => setWeight(e.target.value)}
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

export default RecordObservation;
