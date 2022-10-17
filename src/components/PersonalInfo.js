import React, { useState } from "react";
import "../styles/output.css"
import "../styles/input.css"

const PersonalInfo = (props) => {

    const [isEdit, setIsEdit] = useState(true)
    const [info, setInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: ""
    })

    const handleChange = (event) => setInfo({...info, [event.target.id]: event.target.value})


    const toggleEdit = () => setIsEdit(!isEdit);


        return isEdit ?
               (<div className="info input">
                    <h1>Personal Information</h1>
                    <div className="personal-form">
                        <div className="name-input">
                            <input type="text" onChange={handleChange} id="firstName" placeholder="First Name" value={info.firstName} />
                            <input type="text" onChange={handleChange} id="lastName" placeholder="Last Name" value={info.lastName} />
                        </div>
                        <div className="info-input">
                            <input type="email" onChange={handleChange} id="email" placeholder="Email" value={info.email} />
                            <input type="text" onChange={handleChange} id="phone" placeholder="Phone" value={info.phone} />
                            <input type="text" onChange={handleChange} id="location" placeholder="Location" value={info.location} />
                        </div>
                    </div>
                    <button id="save" onClick={toggleEdit}>Save</button>
                </div>)
           : (<div className="info output" onClick={toggleEdit}>

                    <ul className="name">
                        <li className="first-name">{info.firstName}</li>
                        <li className="first-name">{info.lastName}</li>
                    </ul>
                    <table className="info-list">
                        <tr><td>Email </td><td>{info.email}</td></tr>
                        <tr><td>Phone </td><td>{info.phone}</td></tr>
                        <tr><td>Location </td><td>{info.location}</td></tr>                       
                    </table>
                
            </div>
        )
    }

export default PersonalInfo;