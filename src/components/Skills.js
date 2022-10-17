import React, { useState } from "react";
import "../styles/output.css"

const Skills = (props) => {

    const [isEdit, setIsEdit] = useState(true);
    const [skillInfo, setSkillInfo] = useState({
        skill: "",
        proficiency: ""
    })

    const toggleEdit = () => setIsEdit(!isEdit);

    const handleChange = (event) => setSkillInfo({...skillInfo, [event.target.id]: event.target.value})

        return isEdit ?
            (<div className="skill-form">
                <input type="text" onChange={handleChange} id="skill" placeholder="Skill" value={skillInfo.skill} />
                <input type="text" onChange={handleChange} id="proficiency" placeholder="Proficiency/ Description" value={skillInfo.proficiency} />
                <button id="save-btn" onClick={toggleEdit}>Save</button>
                <button id="delete-btn" data-skills={props.id} onClick={props.handleDelete}>Delete</button>
            </div>)
        : (<div className="skill output" onClick={toggleEdit}>
                <span className="skillset">{skillInfo.skill}</span>
                <span className="proficiency">{skillInfo.proficiency}</span>
            </div>
        )  
    }


export default Skills;