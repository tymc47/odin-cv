import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import WorkExp from "./components/WorkExp";

class App extends Component {
  constructor(props){
    super();
    this.state = {
      education: [],
      workExp: []
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.deleteWorkExp = this.deleteWorkExp.bind(this);

  }

  handleAdd(event){
    if (event.target.classList.contains('education')){
      this.setState({
        education: this.state.education.concat(<Education key={this.state.education.length} id={this.state.education.length} handleDelete={this.deleteEducation}/>)
        }
      )
    } else {
      this.setState({
        workExp: this.state.workExp.concat(<WorkExp key={this.state.workExp.length} id={this.state.workExp.length} handleDelete={this.deleteWorkExp}/>)
      })
    }
   
  }

  deleteEducation(event){
    const index = event.target.dataset.entry
    const newArray = this.state.education.filter(entry => entry.key !== index)
    this.setState({education: newArray})
  }

  deleteWorkExp(event){
    const index = event.target.dataset.entry
    const newArray = this.state.workExp.filter(entry => entry.key !== index)
    console.log(newArray);
    this.setState({workExp: newArray})
  }

  render(){
    return(
      <div className="main">
        <div className="personal-info">
          <h1>Personal Information</h1>
          <PersonalInfo />
        </div>
        <div className="education">
          <h1>Education</h1>
          <button className="add-btn education" onClick={this.handleAdd}>Add</button>
          {this.state.education.map((component) => component)}
        </div>
        <div className="work-exp">
          <h1>Work Experience</h1>
          <button className="add-btn work-exp" onClick={this.handleAdd}>Add</button>
          {this.state.workExp.map((component) => component)}
        </div>
      </div>
    )
  }
}

export default App;
