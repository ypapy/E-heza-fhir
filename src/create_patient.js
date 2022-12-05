import { useState } from "react";

const CreatePatient = () => {
    const [firstNames, setFirstNames] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://hapi.fhir.org/baseR4/Patient", {
            method: "POST",
            body: JSON.stringify({
                "resourceType": "Patient",
                "name": [
                    {
                        "use": "official",
                        "given": [firstNames],
                        "family": lastName
                    }
                ],
                "gender": gender,
                "birthDate": birthDate,
                "telecom": [
                    {
                        "value": mobileNumber,
                        "use": "mobile",
                        "system": "phone"
                    },
                    {
                        "system": "email",
                        "value": email
                    }
                ],
                "address": [
                    {
                        "city": city,
                        "district": district,
                        "country": country,
                        "line": [address]
                    }
                ]
            }),

          });

          let resJson = await res.json();

          if (res.status === 200) {
            setFirstNames("");
            lastName("");
            setGender("");
            setBirthDate("");
            setCity("");
            setDistrict("");
            setCountry("");
            setAddress("");
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
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={firstNames}
                placeholder="First Names"
                onChange={(e) => setFirstNames(e.target.value)}
                />

                <input
                type="text"
                value={lastName}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                />

                <input
                type="text"
                value={gender}
                placeholder="Gender"
                onChange={(e) => setGender(e.target.value)} 
                />

                <input
                type="text"
                value={birthDate}
                placeholder="Birth Date"
                onChange={(e) => setBirthDate(e.target.value)}
                />  

                <input
                type="text"
                value={address}
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
                />

                <input
                type="text"
                value={city}
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
                /> 

                <input
                type="text"
                value={district}
                placeholder="District"
                onChange={(e) => setDistrict(e.target.value)}
                />

                <input
                type="text"
                value={country}
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
                />

                <input
                type="text"
                value={mobileNumber}
                placeholder="Mobile Number"
                onChange={(e) => setMobileNumber(e.target.value)}
                />

                <input
                type="text"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit">Create Patient</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
  );
}

export default CreatePatient;