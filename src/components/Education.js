import React, { useState } from "react";
import "../styles/output.css"



const Education  = (props) => {
    const [isEdit, setIsEdit] = useState(true);
    const [eduInfo, setEduInfo] = useState({
        courseName: "",
            schoolName: "",
            schoolLocation: "",
            startDate: "", 
            endDate: "",
            isPresent: false
    })

    const handleChange = (event) => setEduInfo({...eduInfo, [event.target.id]: event.target.value})
    

    const handleCheckbox = () => setEduInfo({...eduInfo, isPresent: !eduInfo.isPresent})
    

    const toggleEdit = () => setIsEdit(!isEdit);

        return isEdit ?
               (<div className="edu-form">
                    <div className="name-input">
                        <input type="text" onChange={handleChange} id="schoolName" placeholder="School Name" value={eduInfo.schoolName} />
                        <input type="text" onChange={handleChange} id="courseName" placeholder="Program Name" value={eduInfo.courseName} />
                    </div>
                    <div className="info-input">
                        <input type="date" onChange={handleChange} id="startDate" value={eduInfo.startDate} />
                        <input type="date" onChange={handleChange} id="endDate" disabled = {eduInfo.isPresent} value={eduInfo.endDate} />
                        <label htmlFor="isPresent">Current Education: 
                            <input type="checkbox" onChange={handleCheckbox} id="isPresent" checked={eduInfo.isPresent} />
                        
                        </label>
                        <input type="text" onChange={handleChange} id="schoolLocation" placeholder="School Location" value={eduInfo.schoolLocation} />
                    </div>
                    <div className="button">
                        <button id="save-btn" onClick={toggleEdit}>Save</button>
                        <button id="delete-btn" data-education={props.id} onClick={props.handleDelete}>Delete</button>
                    </div>
                </div>)
           : (<div className="education output" onClick={toggleEdit}>
                <ul>
                    <li className="school-name">{eduInfo.schoolName}</li> 
                    <li className="program">{eduInfo.courseName}</li>
                </ul>
                <div className="date-location">
                    <span>{eduInfo.startDate} - {eduInfo.isPresent ? "Present" : eduInfo.endDate}</span> 
                    <span>{eduInfo.schoolLocation}</span>
                </div>
            </div>
        )
}

export default Education;