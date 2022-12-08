import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { Phone } from '@mui/icons-material';

export default function ViewPatientDetails(props) {
    // const url = "http://localhost:63993/fhir/Patient"
    const { id } = useParams()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [district, setDistrict] = useState("")
    const [state, setState] = useState("")
    const [emergencyContactName, setEmergencyContactName] = useState("")
    const [emergencyContactPhone, setEmergencyContactPhone] = useState("")
    const [city, setCity] = useState("")
    const [streetNo, setStreetNo] = useState("")
    useEffect(() => {
        const url = `http://localhost:63993/fhir/Patient` + id
        console.log(url)
        axios.get(url)
            .then(response => {

                setFirstName(response.data.name[0].given[0])
                setLastName(response.data.name[0].family)
                setGender(response.data.gender)
                setBirthDate(response.data.birthDate)
                setCity(response.data.address[0].city)
                setState(response.data.address[0].state)
                setStreetNo(response.data.address[0].line[0])
                setphoneNumber(response.data.telecom[0].value)
                setEmail(response.data.telecom[1].value)
                setDistrict(response.data.address[0].district)
                setEmergencyContactName(response.data.contact[0].name.given[0])
                setEmergencyContactPhone(response.data.contact[0].telecom.value)
                
                console.log(phoneNumber)
                console.log(email)
             
              
            })
            .catch(err => console.log(err))
        console.log(id)
    }, [firstName,email, id, phoneNumber])
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="header">
                <h1>Patient Details</h1>
            </div>
            <div>
                <TextField
                    id="standard-read-only-input"
                    label="FirstName"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    value={firstName}
                />
                <TextField
                    id="standard-read-only-input"
                    label="LastName"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    value={lastName}
                />
            </div>
            <div>
                <TextField
                    id="standard-read-only-input"
                    label="Gender"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    value={gender}
                />
                <TextField
                    id="standard-read-only-input"
                    label="BirthDate"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    value={birthDate}
                />
            </div>

            <div>
                <TextField
                    id="standard-read-only-input"
                    label="Phone number"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    value={phoneNumber}
                />
                <TextField
                    id="standard-read-only-input"
                    label="Email"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    value={email}
                />
            </div>
            <div>
                <TextField
                    id="standard-read-only-input"
                    label="Street"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    value={streetNo}
                />
                <TextField
                    id="standard-read-only-input"
                    label="City"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    value={city}
                />
                <TextField
                    id="standard-read-only-input"
                    label="District"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    value={district}
                />
                <TextField
                    id="standard-read-only-input"
                    label="State"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    value={state}
                />
            </div>
            <div>
                <TextField
                    id="standard-read-only-input"
                    label="Emergency Contact Person"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    value={emergencyContactName}
                />
                <TextField
                    id="standard-read-only-input"
                    label="Emergency Contact Phone"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    value={emergencyContactPhone}
                />
            </div>
        </Box>
    );
}