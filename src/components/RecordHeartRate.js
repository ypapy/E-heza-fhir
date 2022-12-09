import { useState } from "react";

const RecordHeartRate = () => {
  const [heartRate, setHeartRate] = useState("");
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
          id: "body-height",
          meta: {
            profile: ["http://hl7.org/fhir/StructureDefinition/vitalsigns"],
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
            reference: "Patient" / id,
          },
          effectiveDateTime: "2022-07-02",
          valueQuantity: {
            value: heartRate,
            unit: "in",
            system: "http://unitsofmeasure.org",
            code: "[in_i]",
          },
        }),
      });

      if (res.status === "201 Created") {
        setHeartRate("");
        setId("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="record-temperature">
      <h1>Enter Heart Rate</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Heart Rate</label>
        <input
          type="text"
          value={heartRate}
          placeholder="Temperature"
          onChange={(e) => setHeartRate(e.target.value)}
        />

        <button type="submit">Submit</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
};

export default RecordHeartRate;
