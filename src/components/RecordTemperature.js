import { useState } from "react";

const RecordTemperature = () => {
  const [temperature, setTemperature] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState("");

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
            reference: "Patient" / id,
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
        setId("");
        setMessage("Success");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="record-temperature">
      <h1>Enter Temperature Value</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Temperature</label>
        <input
          type="text"
          value={temperature}
          placeholder="Temperature"
          onChange={(e) => setTemperature(e.target.value)}
        />

        <button type="submit">Submit</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
};

export default RecordTemperature;
