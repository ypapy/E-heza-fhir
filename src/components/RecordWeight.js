import { useState } from "react";

const RecordWeight = () => {
  const [weight, setWeight] = useState("");
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
            reference: "Patient"/id,
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
      <h1>Enter Weight Value</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Weight</label>
        <input
          type="text"
          value={weight}
          placeholder="Temperature"
          onChange={(e) => setWeight(e.target.value)}
        />

        <button type="submit">Submit</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
};

export default RecordWeight;
