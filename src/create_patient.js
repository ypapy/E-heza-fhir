import { useState } from "react";

const CreatePatient = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [emergencyContact, setEmergencyContact] = useState("");
    const [emergencyContactPhone, setEmergencyContactPhone] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:61958/fhir/Patient", {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
              "resourceType": "Patient",
              "name": [
                  {
                      "use": "official",
                      "given": ["Kwaku Tsyops"]
                  }
              ],
              "gender": "female",
              "birthDate": "1998-06-22",
              "telecom": [
                  {
                      "value": "0791591978",
                      "use": "mobile",
                      "system": "phone"
                  },
                  {
                      "system": "email",
                      "value": "ktsyops@gmail.com"
                  }
              ],
              "address": [
                  {
                      "city": "Kigali",
                      "district": "Gasabo",
                      "country": "Rwanda",
                      "postalCode": "00250",
                      "line": ["14 KG 71 Street"]
                  }
              ]
          }),

          });

          // let resJson = await res.json();

          if (res.status === 200) {
            name("");
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
                <label htmlFor="">Name</label>
                <input
                type="text"
                value={name}
                placeholder="First Names"
                onChange={(e) => setName(e.target.value)}
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
                value={address}
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
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

                <label htmlFor="">Country</label>
                <input
                type="text"
                value={country}
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
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