import { useState } from "react";

const CreatePatient = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");

    return ( 
        <div className="patient">
            <div className="patient-header"></div>
            <div className="patient-content">
                <div className="patient-name"></div>
                <div className="patient-address"></div>
                <div className="patient-contact"></div>
                <div className="patient-phone"></div>
                <div className="patient-email"></div>
                <div className="patient-dob"></div>
                <div className="patient-date"></div>
                <div className="patient-time"></div>
            </div>
        </div>
     );
}
 
export default CreatePatient;