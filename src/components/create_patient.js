import { useState } from "react";


const CreatePatient = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("");
    const [streetNo, setStreetNo] = useState("");
    const [email, setEmail] = useState("");
    const [emergencyContact, setEmergencyContact] = useState("");
    const [emergencyContactPhone, setEmergencyContactPhone] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:63993/fhir/Patient", {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
              "resourceType": "Patient",
              "active": true,
              "name": [
                {
                  "use": "official",
                  "family": lastName,
                  "given": [
                    firstName
                  ]
                }
              ],
              "telecom": [
                {
                  "system": "phone",
                  "value": mobileNumber,
                  "use": "mobile"
                },
                {
                  "system": "email",
                  "value": email
                }
              ],
              "gender": gender,
              "birthDate": birthDate,
              "address": [
                {
                  "use": "home",
                  "line": [
                    streetNo
                  ],
                  "city": city,
                  "district": district,
                  "state": state
                }
              ],
              "contact": [
                {
                  "name": {
                    "given": [
                      emergencyContact
                    ]
                  },
                  "telecom": [
                    {
                      "system": "phone",
                      "value": emergencyContactPhone
                    }
                  ]
                }
              ]
            }),

          });

          // let resJson = await res.json();

          if (res.status === 201) {
            firstName("");
            lastName("");
            setGender("");
            setBirthDate("");
            setCity("");
            setDistrict("");
            setState("");
            setStreetNo("");
            setEmail("");
            setMobileNumber("");
            setMessage("User created successfully");

          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };

    return ( 
        <div className="CreatePatient">
          <h1>Register Patient</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input
                type="text"
                value={firstName}
                placeholder="First Names"
                onChange={(e) => setFirstName(e.target.value)}
                />

                <label htmlFor="">Name</label>
                <input
                type="text"
                value={lastName}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                />

                <label htmlFor="">Gender</label>
                <input
                type="text"
                value={gender}
                placeholder="Gender"
                onChange={(e) => setGender(e.target.value)} 
                />

                <label htmlFor="">Date of Birth</label>
                <input
                type="date"
                value={birthDate}
                placeholder="Birth Date"
                onChange={(e) => setBirthDate(e.target.value)}
                />  

                <label htmlFor="">Address</label>
                <input
                type="text"
                value={streetNo}
                placeholder="Address"
                onChange={(e) => setStreetNo(e.target.value)}
                />

                <label htmlFor="">City</label>
                <input
                type="text"
                value={city}
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
                /> 

                <label htmlFor="">District</label>
                <input
                label="District"
                type="text"
                value={district}
                placeholder="District"
                onChange={(e) => setDistrict(e.target.value)}
                />

                <label htmlFor="">State</label>
                <input
                type="text"
                value={state}
                placeholder="State"
                onChange={(e) => setState(e.target.value)}
                />

                <label htmlFor="">Phone Number</label>
                <input
                type="tel"
                value={mobileNumber}
                placeholder="Mobile Number"
                onChange={(e) => setMobileNumber(e.target.value)}
                />

                <label htmlFor="">Email</label>
                <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="">Emergency Contact</label>
                <input
                type="text"
                value={emergencyContact}
                placeholder="Emergency Contact"
                onChange={(e) => setEmergencyContact(e.target.value)}
                />

                <label htmlFor="">Emergency Contact Phone Number</label>
                <input
                type="tel"
                value={emergencyContactPhone}
                placeholder="Emergency Contact Phone"
                onChange={(e) => setEmergencyContactPhone(e.target.value)}
                />

                <button type="submit">Create Patient</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
  );
}

export default CreatePatient;