import Button from "@mui/material/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const CreateObservation = () => {
  return (
    (
      <div className="header">
        <h2>Select Observation to Record</h2>
      </div>
    ),
    (
      <ButtonGroup variant="contained" aria-label="outlined button group">
        <Button variant="contained" href="/CreateObservation/RecordTemperature">
          Temperature
        </Button>

        <div>
          <Button variant="contained" href="/CreateObservation/RecordWeight">
            Weight
          </Button>
        </div>

        <div>
          <Button variant="contained" href="/CreateObservation/RecordHeight">
            Height
          </Button>
        </div>

        <Button variant="contained" href="/CreateObservation/RecordHeartRate">
          Heart Rate
        </Button>
      </ButtonGroup>
    )
  );
};

export default CreateObservation;
