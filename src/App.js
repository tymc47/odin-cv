import React, { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import WorkExp from "./components/WorkExp";
import Skills from "./components/Skills";
import "./styles/app.css";

const App = () => {

  const [education, setEducation] = useState([])
  const [workexp, setWorkexp] = useState([])
  const [skills, setSkills] = useState([])


  const handleAdd = (event) => {
    const classList = event.target.classList 
    if (classList.contains('education')){
      setEducation(
        education.concat(<Education key={education.length} id={education.length} handleDelete={handleDelete}/>)
      )
    } else if(classList.contains('workexp')) {
      setWorkexp(
        workexp.concat(<WorkExp key={workexp.length} id={workexp.length} handleDelete={handleDelete}/>)
      )
    } else {
      setSkills(
        skills.concat(<Skills key={skills.length} id={skills.length} handleDelete={handleDelete}/>)
      )
    } 
  }

  const handleDelete = (event) => {   
    const dataset = event.target.dataset;
    if ('education' in dataset){
      const index = event.target.dataset.education
      const newArray = education.filter(entry => entry.key !== index)
      setEducation(newArray)
    } else if ('workexp' in dataset) {
      const index = event.target.dataset.workexp
      const newArray = workexp.filter(entry => entry.key !== index)
      setWorkexp(newArray)
    } else {
      const index = event.target.dataset.skills
      const newArray = skills.filter(entry => entry.key !== index)
      setSkills(newArray)
    }
  }

    return(
      <div className="main">

        <div className="banner">
          <h1>CV Builder</h1>
          <span>Build your CV. Hover to different sections to start.</span>
        </div>
        
        <PersonalInfo />
        <hr />
        
        <div className="education">
          <div className="section-title">
            <h1>Education</h1>
            <button className="add-btn education" onClick={handleAdd}>+</button>
          </div>
          {education.map((component) => component)}
        </div>
        <hr />
        <div className="work-exp">
          <div className="section-title">
            <h1>Work Experience</h1>
            <button className="add-btn workexp" onClick={handleAdd}>+</button>
          </div>
          {workexp.map((component) => component)}
        </div>
        <hr />
        <div className="skills">
          <div className="section-title">
            <h1>Skills</h1>
            <button className="add-btn skills" onClick={handleAdd}>+</button>
          </div>
          {skills.map((component) => component)}
        </div>
      </div>
    )
}

export default App;
