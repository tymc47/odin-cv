import React, { useState } from "react";
import "../styles/output.css"


const WorkExp = (props) => {

    const [isEdit, setIsEdit] = useState(true);
    const [jobInfo, setJobInfo] = useState({
        jobTitle: "",
        company: "",
        companyLocation: "",
        startDate: "", 
        endDate: "",
        jobDescription: "",
        isPresent: false
    })

    const handleCheckbox = () => setJobInfo({...jobInfo, isPresent: !jobInfo.isPresent})
    
    const toggleEdit = () => setIsEdit(!isEdit);

    const handleChange = (event) => setJobInfo({...jobInfo, [event.target.id]: event.target.value})

        return isEdit ?
               (<div className="work-form">
                    <div className="name-input">
                        <input type="text" onChange={handleChange} id="company" placeholder="Company" value={jobInfo.company} />
                        <input type="text" onChange={handleChange} id="jobTitle" placeholder="Job Title" value={jobInfo.jobTitle} />
                    </div>
                    <div className="info-input">
                        <input type="date" onChange={handleChange} id="startDate" value={jobInfo.startDate} />
                        <input type="date" onChange={handleChange} id="endDate" disabled = {jobInfo.isPresent} value={jobInfo.endDate} />
                        <label htmlFor="isPresent">Current Job: 
                            <input type="checkbox" onChange={handleCheckbox} id="isPresent" checked={jobInfo.isPresent} />
                        </label>
                        <input type="text" onChange={handleChange} id="companyLocation" placeholder="Company Location" value={jobInfo.companyLocation} />
                    </div>
                    <label htmlFor="job-description">Job description: </label>
                        <textarea rows="8" col="33" onChange={handleChange} id="jobDescription" value={jobInfo.jobDescription} />

                    <div className="button">
                        <button id="save-btn" onClick={toggleEdit}>Save</button>
                        <button id="delete-btn" data-workexp={props.id} onClick={props.handleDelete}>Delete</button>
                    </div>
                </div>)
           : (<div className="work output" onClick={toggleEdit}>
                <div className="job-info">
                    <ul>
                        <li className="company">{jobInfo.company}</li> 
                        <li className="title">{jobInfo.jobTitle}</li>
                    </ul>
                    <div className="date-location">
                        <span>{jobInfo.startDate} - {jobInfo.isPresent ? "Present" : jobInfo.endDate}</span> 
                        <span>{jobInfo.companyLocation}</span>
                    </div>
                </div>
                <div className="job-des">
                    {jobInfo.jobDescription}
                </div>
            </div>
        )
    }

export default WorkExp;