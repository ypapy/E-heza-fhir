import { useState } from "react";
import { useParams } from "react-router-dom";
import Head from "next/head";
import NextLink from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Container } from "@mui/material";

const RecordWeight = (props) => {
  const [weight, setWeight] = useState("");
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
            },
          ],
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "29463-7",
                display: "Body Weight",
              },
              {
                system: "http://loinc.org",
                code: "3141-9",
                display: "Body weight Measured",
              },
              {
                system: "http://snomed.info/sct",
                code: "27113001",
                display: "Body weight",
              },
              {
                system: "http://acme.org/devices/clinical-codes",
                code: "body-weight",
                display: "Body Weight",
              },
            ],
          },
          subject: {
            reference: reference,
          },
          effectiveDateTime: "2022-03-28",
          valueQuantity: {
            value: weight,
            unit: "lbs",
            system: "http://unitsofmeasure.org",
            code: "[lb_av]",
          },
        }),
      });

      if (res.status === 201) {
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
        <title>Weight</title>
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

          <h1>Enter Weight Value</h1>
          <form onSubmit={handleSubmit}>
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

export default RecordWeight;
