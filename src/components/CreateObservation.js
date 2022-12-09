import Button from "@mui/material/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const CreateObservation = () => {
  return (
    <ButtonGroup variant="contained" aria-label="outlined button group">
      <div>
        <Button variant="contained" href="/CreateObservation/RecordTemperature">
          Temperature
        </Button>
      </div>

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

      <div>
        <Button variant="contained" href="/CreateObservation/RecordHeartRate">
          Heart Rate
        </Button>
      </div>
    </ButtonGroup>
  );
};

export default CreateObservation;
