import axios from "axios";

const updateObservation = (id, value, textValue, reference) => {
    const url = "http://localhost:8080/fhir/Observation/"+id
    console.log(id)
    console.log(url)
    if(id===0) {
        fetch("http://localhost:8080/fhir/Observation/", {
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
                text: "Body heartRate",
              },
              subject: {
                reference: reference,
              },
              effectiveDateTime: "2022-07-02",
              valueQuantity: {
                value: value,
                unit: "in",
                system: "http://unitsofmeasure.org",
                code: "[in_i]",
              },
            }),
          })
          .then(response=> console.log)
          .catch(err => console.log)
    } else {
        fetch(url, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                "resourceType": "Observation",
                id,
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2022-12-12T11:46:45.627+00:00",
                    "source": "#brKGPRoniYBA7GXB",
                    "profile": [
                        "http://hl7.org/fhir/StructureDefinition/vitalsigns"
                    ]
                },
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8302-2",
                            "display": "Body height"
                        }
                    ],
                    "text": textValue
                },
                "subject": {
                    "reference": reference
                },
                "effectiveDateTime": "2022-07-02",
                "valueQuantity": {
                    "value": value,
                    "unit": "in",
                    "system": "http://unitsofmeasure.org",
                    "code": "[in_i]"
                }
            }),
          })
          .then(response=> console.log(response) )
          .catch(err=> console.log);
    
    }
    

    // axios.put(url, {
    //     "resourceType": "Observation",
    //     "id": id,
    //     "meta": {
    //         "versionId": "1",
    //         "lastUpdated": "2022-12-12T11:46:45.627+00:00",
    //         "source": "#brKGPRoniYBA7GXB",
    //         "profile": [
    //             "http://hl7.org/fhir/StructureDefinition/vitalsigns"
    //         ]
    //     },
    //     "status": "final",
    //     "category": [
    //         {
    //             "coding": [
    //                 {
    //                     "system": "http://terminology.hl7.org/CodeSystem/observation-category",
    //                     "code": "vital-signs",
    //                     "display": "Vital Signs"
    //                 }
    //             ],
    //             "text": "Vital Signs"
    //         }
    //     ],
    //     "code": {
    //         "coding": [
    //             {
    //                 "system": "http://loinc.org",
    //                 "code": "8302-2",
    //                 "display": "Body height"
    //             }
    //         ],
    //         "text": textValue
    //     },
    //     "subject": {
    //         "reference": "Patient/1"
    //     },
    //     "effectiveDateTime": "2022-07-02",
    //     "valueQuantity": {
    //         "value": value,
    //         "unit": "in",
    //         "system": "http://unitsofmeasure.org",
    //         "code": "[in_i]"
    //     }
    // })
    // .then(response=> console.log(response))
    // .catch(err=> console.log(err))

    

}

export default updateObservation;