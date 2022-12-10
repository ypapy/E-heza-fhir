import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useParams } from "react-router-dom";
import Head from "next/head";
import NextLink from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Container } from "@mui/material";

const CreateObservation = (props) => {
  const { id } = useParams();
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
          <ButtonGroup variant="contained" aria-label="outlined button group">
            <div>
              <Button
                variant="contained"
                href={`/CreateObservation/RecordTemperature/${id}`}
              >
                Temperature
              </Button>
            </div>
            <br />

            <div>
              <Button
                variant="contained"
                href={`/CreateObservation/RecordWeight/${id}`}
              >
                Weight
              </Button>
            </div>
            <br />

            <div>
              <Button
                variant="contained"
                href={`/CreateObservation/RecordHeight/${id}`}
              >
                Height
              </Button>
            </div>
            <br />

            <div>
              <Button
                variant="contained"
                href={`/CreateObservation/RecordHeartRate/${id}`}
              >
                Heart Rate
              </Button>
            </div>
            <br />
          </ButtonGroup>
        </Container>
      </Box>
    </>
  );
};

export default CreateObservation;
