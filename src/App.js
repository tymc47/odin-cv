import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import WorkExp from "./components/WorkExp";
import Skills from "./components/Skills";
import "./styles/app.css";

class App extends Component {
  constructor(props){
    super();
    this.state = {
      education: [],
      workexp: [],
      skills: [],
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(event){
    const classList = event.target.classList 
    if (classList.contains('education')){
      this.setState({
        education: this.state.education.concat(<Education key={this.state.education.length} id={this.state.education.length} handleDelete={this.handleDelete}/>)
        }
      )
    } else if(classList.contains('workexp')) {
      this.setState({
        workexp: this.state.workexp.concat(<WorkExp key={this.state.workexp.length} id={this.state.workexp.length} handleDelete={this.handleDelete}/>)
      })
    } else {
      this.setState({
        skills: this.state.skills.concat(<Skills key={this.state.skills.length} id={this.state.skills.length} handleDelete={this.handleDelete}/>)
      })
    }
   
  }

  handleDelete(event){   
    const dataset = event.target.dataset;
    let keyName = 'education' in dataset ? 'education' :
                  'workexp' in dataset ? 'workexp' : 'skills';
    const index = event.target.dataset[keyName]
    const newArray = this.state[keyName].filter(entry => entry.key !== index)
    this.setState({[keyName]: newArray})
  }

  render(){
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
            <button className="add-btn education" onClick={this.handleAdd}>+</button>
          </div>
          {this.state.education.map((component) => component)}
        </div>
        <hr />
        <div className="work-exp">
          <div className="section-title">
            <h1>Work Experience</h1>
            <button className="add-btn workexp" onClick={this.handleAdd}>+</button>
          </div>
          {this.state.workexp.map((component) => component)}
        </div>
        <hr />
        <div className="skills">
          <div className="section-title">
            <h1>Skills</h1>
            <button className="add-btn skills" onClick={this.handleAdd}>+</button>
          </div>

          {this.state.skills.map((component) => component)}
        </div>
      </div>
    )
  }
}

export default App;
